import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("build contains the Sabor 360 experience and required routes", async () => {
  const [home, pricing, layout, privacy, terms] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/pricing/page.tsx", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("app/privacy/page.tsx", root), "utf8"),
    readFile(new URL("app/terms/page.tsx", root), "utf8"),
  ]);

  assert.match(home, /Presenta tu menú/);
  assert.match(home, /id="features"/);
  assert.match(home, /<DemoSection \/>/);
  assert.match(home, /<FAQSection \/>/);
  assert.match(pricing, /Planes y precios/i);
  assert.match(pricing, /Esencial/);
  assert.match(pricing, /Enterprise/);
  assert.match(layout, /lang="es"/);
  assert.match(privacy, /Política de Privacidad/);
  assert.match(terms, /Términos de Servicio/);
});

test("production artifacts and lead migration are present", async () => {
  await Promise.all([
    access(new URL("dist/server/index.js", root)),
    access(new URL("dist/client/.vite/manifest.json", root)),
    access(new URL("dist/.openai/drizzle/0000_complete_phalanx.sql", root)),
    access(new URL("app/api/demo/route.ts", root)),
  ]);

  const [hosting, api] = await Promise.all([
    readFile(new URL(".openai/hosting.json", root), "utf8"),
    readFile(new URL("app/api/demo/route.ts", root), "utf8"),
  ]);

  assert.match(hosting, /"d1"\s*:\s*"DB"/);
  assert.match(api, /demoLeads/);
  assert.doesNotMatch(api, /console\.log\(/);
  await assert.rejects(access(new URL("app/_sites-preview/SkeletonPreview.tsx", root)));
});
