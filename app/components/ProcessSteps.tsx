"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Descubrimiento",
    body: "Conocemos tu restaurante, analizamos tu menú y definimos la mejor estrategia para aumentar tus ventas.",
  },
  {
    number: "02",
    title: "Producción",
    body: "Creamos fotografías y video de cada plato para que la experiencia se sienta tan apetecible como tu cocina.",
  },
  {
    number: "03",
    title: "Diseño",
    body: "Adaptamos colores, tipografía, categorías y navegación hasta que el menú se sienta completamente tuyo.",
  },
  {
    number: "04",
    title: "Lanzamiento",
    body: "Publicamos, conectamos tus códigos QR y te entregamos el panel listo para operar y medir resultados.",
  },
];

export function ProcessSteps() {
  const [active, setActive] = useState(0);

  return (
    <div className="process-steps">
      {steps.map((step, index) => {
        const isActive = active === index;
        return (
          <div className={`process-step ${isActive ? "is-active" : ""}`} key={step.number}>
            <button
              type="button"
              aria-expanded={isActive}
              aria-controls={`process-step-${step.number}`}
              onClick={() => setActive(index)}
            >
              <span>Paso {step.number}</span>
              <strong>{step.title}</strong>
              <i aria-hidden="true">{isActive ? "−" : "+"}</i>
            </button>
            <p id={`process-step-${step.number}`}>{step.body}</p>
          </div>
        );
      })}
    </div>
  );
}
