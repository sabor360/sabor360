"use client";

import Image from "next/image";
import { useRef } from "react";

const features = [
  {
    title: <>34+ idiomas <em>disponibles</em></>,
    description: "Un menú que habla el idioma de cada cliente.",
    image: "/assets/figma/ref-battery-opt.png",
    alt: "Menú Sabor 360 mostrando varios idiomas",
    className: "feature-language",
  },
  {
    title: <>Desliza. Descubre. <em>Antójate.</em></>,
    description: "Cada deslizamiento despierta el apetito.",
    image: "/assets/figma/raw-03.png",
    alt: "Menú en video dentro de un teléfono",
    className: "feature-swipe",
  },
  {
    title: <>Tu menú, <em>a tu manera.</em></>,
    description: "Una interfaz totalmente adaptable a tu marca.",
    image: "/assets/figma/raw-16-opt.png",
    alt: "Dos versiones personalizadas del menú Sabor 360",
    className: "feature-brand",
  },
  {
    title: <>Upsells <em>inteligentes.</em></>,
    description: "Aumenta el valor de cada orden.",
    image: "/assets/figma/raw-05-opt.png",
    alt: "Persona usando sugerencias de venta en el menú",
    className: "feature-upsell",
  },
  {
    title: <>Totalmente <em>personalizable.</em></>,
    description: "Hazlo completamente tuyo.",
    image: "/assets/figma/raw-02.png",
    alt: "Pantalla de plato con nutrición y recomendaciones",
    className: "feature-personal",
  },
];

export function FeatureRail() {
  const railRef = useRef<HTMLDivElement>(null);

  const move = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>(".feature-card");
    rail.scrollBy({ left: direction * ((card?.offsetWidth ?? 320) + 24), behavior: "smooth" });
  };

  return (
    <div className="feature-rail-wrap">
      <div ref={railRef} className="feature-rail" aria-label="Funciones destacadas">
        {features.map((feature) => (
          <article className={`feature-card ${feature.className}`} key={feature.className}>
            <div className="feature-copy">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            <Image
              unoptimized
              className="feature-image"
              src={feature.image}
              alt={feature.alt}
              width={720}
              height={960}
              sizes="(max-width: 720px) 82vw, 420px"
            />
          </article>
        ))}
      </div>
      <div className="rail-controls" aria-label="Controles del carrusel">
        <button type="button" onClick={() => move(-1)} aria-label="Función anterior">
          ←
        </button>
        <button type="button" onClick={() => move(1)} aria-label="Siguiente función">
          →
        </button>
      </div>
    </div>
  );
}
