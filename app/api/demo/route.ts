import { getDb } from "@/db";
import { demoLeads } from "@/db/schema";

const MAX_BODY_BYTES = 16_384;
const LEAD_KEYS = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "restaurant",
  "municipality",
  "website",
] as const;

type LeadKey = (typeof LEAD_KEYS)[number];
type LeadPayload = Record<LeadKey, string>;

const jsonHeaders = {
  "Cache-Control": "no-store",
  "Content-Type": "application/json; charset=utf-8",
};

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function hasExactStringFields(value: Record<string, unknown>): value is LeadPayload {
  const keys = Object.keys(value);
  return (
    keys.length === LEAD_KEYS.length &&
    LEAD_KEYS.every((key) => typeof value[key] === "string") &&
    keys.every((key) => LEAD_KEYS.includes(key as LeadKey))
  );
}

function validateLead(payload: LeadPayload) {
  const firstName = payload.firstName.trim();
  const lastName = payload.lastName.trim();
  const email = payload.email.trim().toLowerCase();
  const phone = payload.phone.trim();
  const restaurant = payload.restaurant.trim();
  const municipality = payload.municipality.trim();
  const errors: Partial<Record<Exclude<LeadKey, "website">, string>> = {};

  if (!firstName || firstName.length > 80) errors.firstName = "Enter a valid first name.";
  if (!lastName || lastName.length > 80) errors.lastName = "Enter a valid last name.";
  if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (
    phone.length > 32 ||
    phoneDigits.length < 7 ||
    phoneDigits.length > 15 ||
    !/^\+?[0-9().\-\s]+$/.test(phone)
  ) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!restaurant || restaurant.length > 160) errors.restaurant = "Enter a valid restaurant name.";
  if (!municipality || municipality.length > 120) {
    errors.municipality = "Enter a valid municipality.";
  }

  return {
    errors,
    lead: { firstName, lastName, email, phone, restaurant, municipality },
  };
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase();
  if (contentType !== "application/json") {
    return json({ ok: false, error: "Content-Type must be application/json." }, 415);
  }

  const declaredLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return json({ ok: false, error: "Request body is too large." }, 413);
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return json({ ok: false, error: "Request body is too large." }, 413);
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return json({ ok: false, error: "Request body must contain valid JSON." }, 400);
  }

  if (!isRecord(body) || !hasExactStringFields(body)) {
    return json(
      {
        ok: false,
        error: "Request body must include only the expected form fields as strings.",
      },
      400,
    );
  }

  const id = crypto.randomUUID();

  // Bots commonly fill this hidden field. Return a normal success response but
  // deliberately do not persist the submission.
  if (body.website.trim()) {
    return json({ ok: true, id }, 201);
  }

  const { errors, lead } = validateLead(body);
  if (Object.keys(errors).length > 0) {
    return json({ ok: false, error: "Please correct the highlighted fields.", fields: errors }, 400);
  }

  try {
    await getDb()
      .insert(demoLeads)
      .values({ id, ...lead, createdAt: new Date() })
      .run();
  } catch (error) {
    console.error("Failed to save demo request", error);
    return json({ ok: false, error: "We could not save your request. Please try again." }, 500);
  }

  return json({ ok: true, id }, 201);
}
