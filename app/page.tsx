import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeatureRail } from "./components/FeatureRail";
import { Header } from "./components/Header";
import { ProcessSteps } from "./components/ProcessSteps";
import { CaseStudies, DemoSection, FAQSection, Footer } from "./components/SharedSections";

export const metadata: Metadata = {
  title: "Sabor 360 | Menús digitales que despiertan el apetito",
  description:
    "Transforma el menú de tu restaurante en una experiencia visual, interactiva y diseñada para vender más.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow">La nueva forma de presentar tu menú</span>
            <h1 id="hero-title">
              Presenta tu menú como tus platos <em>se merecen.</em>
            </h1>
            <p>
              Convierte cada plato en una experiencia visual que invita a tus clientes a descubrir,
              decidir y ordenar más.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#demo">
                Solicitar Demo <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-secondary" href="#features">
                Explorar funciones <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              unoptimized
              src="/assets/figma/ref-hero.jpg"
              alt="Amigos compartiendo una experiencia en un restaurante"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className="hero-badge" aria-hidden="true">
              <span>360°</span>
              <small>EXPERIENCIA</small>
            </div>
          </div>
        </section>

        <section id="features" className="section feature-section" aria-labelledby="features-title">
          <div className="section-heading wide">
            <span className="eyebrow">Funciones</span>
            <h2 id="features-title">
              La misma comida. Los mismos precios. Una experiencia completamente <em>diferente.</em>
            </h2>
            <p>
              Una plataforma diseñada para hacer que cada plato se vea irresistible y cada decisión
              se sienta sencilla.
            </p>
          </div>
          <FeatureRail />
        </section>

        <section id="control" className="section control-section" aria-labelledby="control-title">
          <div className="section-heading centered light">
            <span className="eyebrow">¿Por qué Sabor 360?</span>
            <h2 id="control-title">
              Todo. <em>Bajo tu control.</em>
            </h2>
            <p>
              Administra tu menú en tiempo real, mantén tu marca consistente y entiende qué mueve a
              tus clientes.
            </p>
          </div>

          <div className="control-grid">
            <article className="control-card control-instant">
              <div>
                <span className="card-index">01</span>
                <h3>Actualiza al instante.</h3>
                <p>Cambia precios, disponibilidad, categorías y promociones sin volver a imprimir.</p>
              </div>
              <div className="status-stack" aria-label="Ejemplo de actualización de disponibilidad">
                <span><i className="dot live" />Disponible</span>
                <span><i className="dot paused" />Agotado por hoy</span>
                <span><i className="dot promo" />Promoción activa</span>
              </div>
            </article>

            <article className="control-card control-brand">
              <div>
                <span className="card-index">02</span>
                <h3>Hecho para tu marca.</h3>
                <p>Colores, tipografía, tono y navegación diseñados alrededor de tu restaurante.</p>
              </div>
              <Image
                unoptimized
                src="/assets/figma/raw-16-opt.png"
                alt="Dos menús digitales adaptados a marcas distintas"
                width={520}
                height={780}
                sizes="(max-width: 720px) 80vw, 36vw"
              />
            </article>

            <article className="control-card control-insight">
              <div className="insight-copy">
                <span className="card-index">03</span>
                <h3>Conoce lo que más vende.</h3>
                <p>
                  Convierte cada visita en señales claras para destacar tus platos más fuertes y
                  mejorar el menú.
                </p>
              </div>
              <div className="metric-panel" aria-label="Ejemplo de analíticas del menú">
                <div className="metric-head">
                  <span>Interacciones esta semana</span>
                  <strong>+24.8%</strong>
                </div>
                <div className="metric-value">12,483</div>
                <div className="chart" aria-hidden="true">
                  {[38, 52, 46, 72, 63, 84, 76, 96, 88, 108, 101, 128].map((height, index) => (
                    <i key={index} style={{ height }} />
                  ))}
                </div>
                <div className="metric-foot">
                  <span>Plato más visto</span>
                  <strong>Burger Sabor 360</strong>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="process" className="section process-section" aria-labelledby="process-title">
          <div className="process-layout">
            <div className="process-copy">
              <span className="eyebrow">Nuestro proceso</span>
              <h2 id="process-title">
                Tu camino <em>comienza aquí.</em>
              </h2>
              <p className="process-lead">
                Un proceso claro, ágil y acompañado. Del primer encuentro al código QR en tus mesas.
              </p>
              <ProcessSteps />
            </div>

            <figure className="process-visual">
              <Image
                unoptimized
                src="/assets/figma/ref-process.jpg"
                alt="Producción visual de un plato para el menú digital"
                fill
                sizes="(max-width: 900px) 100vw, 47vw"
              />
              <figcaption>
                <span>10</span>
                <small>DÍAS DEL CONCEPTO<br />AL LANZAMIENTO</small>
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="story" className="section journey-section" aria-labelledby="journey-title">
          <div className="journey-heading">
            <span className="eyebrow">Tu camino</span>
            <h2 id="journey-title">
              De la idea al lanzamiento <em>en 10 días.</em>
            </h2>
          </div>

          <div id="results" className="journey-grid">
            <article className="journey-card journey-create">
              <div className="journey-copy">
                <span>01 / PRODUCCIÓN</span>
                <h3>Creamos la experiencia.</h3>
                <p>
                  Fotografía, video, diseño y una navegación creada para convertir curiosidad en
                  apetito.
                </p>
              </div>
              <Image
                unoptimized
                src="/assets/figma/raw-19.jpeg"
                alt="Fotografiando un plato para crear su experiencia digital"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </article>
            <article className="journey-card journey-results">
              <div className="journey-copy">
                <span>02 / RESULTADOS</span>
                <h3>Tú ves los resultados.</h3>
                <p>Más descubrimiento, decisiones más rápidas y una presentación que eleva tu marca.</p>
              </div>
              <div className="result-stats">
                <div><strong>34+</strong><span>idiomas disponibles</span></div>
                <div><strong>24/7</strong><span>menú siempre actualizado</span></div>
                <div><strong>360°</strong><span>visión de tus datos</span></div>
              </div>
            </article>
          </div>
        </section>

        <CaseStudies />
        <DemoSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
