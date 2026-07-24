import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { CaseStudies, DemoSection, FAQSection, Footer } from "../components/SharedSections";

export const metadata: Metadata = {
  title: "Planes y precios | Sabor 360",
  description:
    "Conoce los planes de Sabor 360 para transformar el menú de tu restaurante en una experiencia digital premium.",
};

const plans = [
  {
    name: "Esencial",
    summary: "Para menús compactos que quieren dar el salto a una experiencia visual premium.",
    price: "$997",
    monthly: "$179 / mes",
    note: "Hasta 40 platos",
    badge: "Food trucks y conceptos pequeños",
    featured: false,
  },
  {
    name: "Completo",
    summary: "La experiencia completa para restaurantes que quieren presentar y vender mejor.",
    price: "$1,797",
    monthly: "$279 / mes",
    note: "De 40 a 80 platos",
    badge: "Más popular",
    featured: true,
  },
  {
    name: "Enterprise",
    summary: "Una solución a la medida para operaciones amplias, grupos y menús de alto volumen.",
    price: "Custom",
    monthly: "$379 / mes",
    note: "80–100+ platos",
    badge: "Restaurantes y grupos grandes",
    featured: false,
  },
];

const features = [
  "Código QR para tus mesas",
  "Cambios ilimitados",
  "Hosting incluido",
  "Modo claro y oscuro",
  "Menú multilenguaje",
  "Panel analítico",
  "Soporte directo",
  "Video cinematográfico y fotografía de cada plato",
];

export default function PricingPage() {
  return (
    <>
      <Header active="pricing" />
      <main>
        <section className="pricing-hero" aria-labelledby="pricing-title">
          <span className="eyebrow">Planes y precios</span>
          <h1 id="pricing-title">
            Elige la experiencia que tu restaurante <em>se merece.</em>
          </h1>
          <p>
            Producción visual, tecnología y acompañamiento en un plan alineado con el tamaño de tu
            menú.
          </p>
        </section>

        <section className="pricing-section" aria-label="Planes disponibles">
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article className={`plan-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
                <div className="plan-top">
                  <span className="plan-badge">{plan.badge}</span>
                  <h2>{plan.name}</h2>
                  <p>{plan.summary}</p>
                </div>
                <div className="plan-price">
                  <strong>{plan.price}</strong>
                  <span>inversión inicial</span>
                </div>
                <div className="plan-monthly">
                  <strong>{plan.monthly}</strong>
                  <span>{plan.note}</span>
                </div>
                <Link className={`button ${plan.featured ? "button-dark" : "button-primary"}`} href="#demo">
                  Solicitar Demo <span aria-hidden="true">↗</span>
                </Link>
                <div className="plan-divider" />
                <h3>Todo lo que incluye</h3>
                <ul>
                  {features.map((feature) => (
                    <li key={feature}>
                      <span aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="pricing-footnote">
            El alcance final se confirma luego de conocer tu menú. Impuestos y servicios de terceros,
            si aplican, se presentan claramente antes de comenzar.
          </p>
        </section>

        <CaseStudies />
        <DemoSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
