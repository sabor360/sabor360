"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function DemoForm() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          restaurant: data.get("restaurant"),
          municipality: data.get("municipality"),
          website: data.get("website"),
        }),
      });

      const payload = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(payload.error || "No pudimos enviar tu solicitud.");

      form.reset();
      setStatus("success");
      setMessage("¡Listo! Recibimos tu solicitud. Nuestro equipo se pondrá en contacto contigo.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Ocurrió un error. Intenta nuevamente en unos minutos.",
      );
    }
  }

  return (
    <form className="demo-form" onSubmit={handleSubmit}>
      <p className="form-intro">
        Completa el formulario y uno de nuestros especialistas se pondrá en contacto contigo para
        mostrarte cómo Sabor 360 puede ayudarte a vender más y transformar la experiencia de tus
        clientes.
      </p>

      <div className="form-grid">
        <label>
          <span>Nombre</span>
          <input name="firstName" type="text" autoComplete="given-name" placeholder="Nombre*" required />
        </label>
        <label>
          <span>Apellido</span>
          <input name="lastName" type="text" autoComplete="family-name" placeholder="Apellido*" required />
        </label>
        <label>
          <span>Correo electrónico</span>
          <input name="email" type="email" autoComplete="email" placeholder="Correo electrónico*" required />
        </label>
        <label>
          <span>Teléfono</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="Teléfono*" required />
        </label>
        <label>
          <span>Nombre del restaurante</span>
          <input name="restaurant" type="text" autoComplete="organization" placeholder="Nombre del restaurante*" required />
        </label>
        <label>
          <span>Municipio</span>
          <input name="municipality" type="text" autoComplete="address-level2" placeholder="Municipio*" required />
        </label>
      </div>

      <label className="honeypot" aria-hidden="true">
        Sitio web
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <p className="form-consent">
        Al enviar este formulario, aceptas que nos comuniquemos contigo para coordinar tu demostración.
        Sin compromiso.
      </p>

      <button className="button button-primary form-submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Enviando…" : "Solicitar Demo"}
      </button>

      <p className={`form-status ${status}`} role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
