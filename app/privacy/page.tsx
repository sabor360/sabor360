import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/SharedSections";

export const metadata: Metadata = {
  title: "Política de Privacidad | Sabor 360",
  description:
    "Conoce cómo Sabor 360 recopila, utiliza y protege la información enviada a través de este sitio web.",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="legal-header">
        <div className="nav-shell">
          <Link className="brand-link" href="/" aria-label="Sabor 360, inicio">
            <Image
              unoptimized
              src="/assets/figma/logo.png"
              alt="Sabor 360"
              width={153}
              height={48}
              priority
            />
          </Link>
          <Link className="button button-ghost" href="/">
            Volver al inicio <span aria-hidden="true">→</span>
          </Link>
        </div>
      </header>

      <main className="legal-page">
        <article className="legal-shell">
          <header className="legal-intro">
            <span className="eyebrow">Legal</span>
            <h1>Política de Privacidad</h1>
            <p className="legal-updated">Última actualización: 22 de julio de 2026</p>
            <p>
              Esta política explica, en términos claros, qué información puede
              recopilar Sabor 360 a través de este sitio, para qué se utiliza y
              qué opciones tienes sobre ella.
            </p>
          </header>

          <div className="legal-content">
            <section>
              <h2>1. Información que recopilamos</h2>
              <p>
                Cuando solicitas una demostración, podemos recibir los datos que
                introduces en el formulario, como tu nombre, correo electrónico,
                teléfono, nombre del restaurante y municipio.
              </p>
              <p>
                El sitio también puede registrar información técnica básica
                necesaria para funcionar y mantenerse seguro, como el tipo de
                navegador, el dispositivo, la dirección IP, la fecha de acceso y
                las páginas visitadas. La disponibilidad de estos registros
                depende de los servicios de infraestructura utilizados.
              </p>
            </section>

            <section>
              <h2>2. Cómo utilizamos la información</h2>
              <p>Podemos utilizar la información para:</p>
              <ul>
                <li>Responder a solicitudes de demostración o información.</li>
                <li>Preparar una conversación comercial relevante para tu restaurante.</li>
                <li>Operar, proteger y mejorar el sitio y sus formularios.</li>
                <li>Cumplir obligaciones legales aplicables.</li>
              </ul>
              <p>
                No utilizaremos los datos enviados en el formulario para fines
                incompatibles con estas finalidades sin informar primero cuando
                corresponda.
              </p>
            </section>

            <section>
              <h2>3. Base para el tratamiento</h2>
              <p>
                Tratamos la información cuando es necesario para responder a tu
                solicitud, tomar medidas previas a una posible relación
                contractual, operar el sitio de forma legítima o cumplir una
                obligación legal. Cuando la ley lo requiera, solicitaremos tu
                consentimiento.
              </p>
            </section>

            <section>
              <h2>4. Proveedores y divulgación</h2>
              <p>
                Podemos utilizar proveedores de alojamiento, seguridad,
                almacenamiento y comunicaciones que procesen información
                únicamente para prestar sus servicios. También podremos divulgar
                datos si una obligación legal válida lo exige o si es necesario
                para proteger derechos, seguridad e integridad del servicio.
              </p>
              <p>No vendemos la información enviada mediante el formulario.</p>
            </section>

            <section>
              <h2>5. Conservación y seguridad</h2>
              <p>
                Conservamos la información durante el tiempo razonablemente
                necesario para atender la solicitud, mantener registros
                comerciales legítimos y cumplir obligaciones aplicables. Después,
                procuramos eliminarla o anonimizarla de forma segura.
              </p>
              <p>
                Aplicamos medidas razonables para proteger los datos. Sin embargo,
                ningún sistema conectado a internet puede garantizar seguridad
                absoluta.
              </p>
            </section>

            <section>
              <h2>6. Tus opciones y derechos</h2>
              <p>
                Según la ley aplicable, puedes solicitar acceso, corrección,
                eliminación o limitación del uso de tus datos, así como retirar un
                consentimiento previamente otorgado. Algunas solicitudes pueden
                estar sujetas a verificaciones o excepciones legales.
              </p>
              <p>
                Para hacer una solicitud, utiliza el formulario de contacto de
                este sitio e indica que tu mensaje se relaciona con privacidad.
              </p>
            </section>

            <section id="cookies">
              <h2>7. Cookies y tecnologías similares</h2>
              <p>
                El sitio puede utilizar cookies estrictamente necesarias para su
                funcionamiento, seguridad y preferencias básicas. Si en el futuro
                se activan herramientas de medición o publicidad que requieran
                consentimiento, se ofrecerán los controles correspondientes antes
                de usarlas cuando así lo exija la ley.
              </p>
              <p>
                También puedes administrar cookies desde la configuración de tu
                navegador; deshabilitar algunas puede afectar ciertas funciones.
              </p>
            </section>

            <section>
              <h2>8. Enlaces y servicios externos</h2>
              <p>
                Este sitio puede enlazar a servicios de terceros. Sus prácticas de
                privacidad se rigen por sus propias políticas, por lo que
                recomendamos revisarlas antes de compartir información.
              </p>
            </section>

            <section>
              <h2>9. Cambios a esta política</h2>
              <p>
                Podemos actualizar esta política para reflejar cambios en el
                sitio, en nuestras prácticas o en requisitos aplicables. La fecha
                indicada al inicio mostrará la versión vigente.
              </p>
            </section>
          </div>

          <aside className="legal-cta" aria-label="Contacto">
            <p>¿Necesitas aclarar cómo tratamos tu información?</p>
            <Link className="button button-primary" href="/#demo">
              Contáctanos
            </Link>
          </aside>
        </article>
      </main>

      <Footer />
    </>
  );
}
