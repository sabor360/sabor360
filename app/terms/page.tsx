import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/SharedSections";

export const metadata: Metadata = {
  title: "Términos de Servicio | Sabor 360",
  description:
    "Consulta las condiciones generales aplicables al uso del sitio web de Sabor 360.",
};

export default function TermsPage() {
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
            <h1>Términos de Servicio</h1>
            <p className="legal-updated">Última actualización: 22 de julio de 2026</p>
            <p>
              Estos términos regulan el acceso y uso del sitio web de Sabor 360.
              Al utilizarlo, aceptas estas condiciones. Los servicios contratados
              por cada cliente pueden estar sujetos además a una propuesta,
              orden de servicio o acuerdo independiente.
            </p>
          </header>

          <div className="legal-content">
            <section>
              <h2>1. Propósito del sitio</h2>
              <p>
                Este sitio presenta información general sobre Sabor 360 y permite
                solicitar una demostración. El contenido público no constituye por
                sí solo una oferta vinculante ni garantiza disponibilidad,
                alcance, precio o fecha de entrega específicos.
              </p>
            </section>

            <section>
              <h2>2. Solicitudes y contratación</h2>
              <p>
                Enviar un formulario no crea automáticamente una relación
                contractual. Cualquier servicio, precio, calendario, entregable,
                renovación o condición de pago deberá confirmarse en la propuesta
                o acuerdo aceptado por las partes.
              </p>
            </section>

            <section>
              <h2>3. Uso permitido</h2>
              <p>Al usar este sitio, te comprometes a no:</p>
              <ul>
                <li>Interferir con su funcionamiento o intentar eludir sus medidas de seguridad.</li>
                <li>Introducir código malicioso, automatizar solicitudes abusivas o saturar el servicio.</li>
                <li>Utilizar el contenido de forma engañosa, ilegal o que infrinja derechos de terceros.</li>
                <li>Suplantar a otra persona o enviar información deliberadamente falsa.</li>
              </ul>
            </section>

            <section>
              <h2>4. Contenido y propiedad intelectual</h2>
              <p>
                El diseño, la marca, los textos, las fotografías, los videos, el
                software y demás materiales del sitio pertenecen a sus respectivos
                titulares y están protegidos por las normas aplicables. El acceso
                al sitio no transfiere derechos de propiedad ni concede permiso
                para copiar, redistribuir o explotar esos materiales, salvo
                autorización expresa o uso permitido por ley.
              </p>
            </section>

            <section>
              <h2>5. Materiales aportados por clientes</h2>
              <p>
                Si contratas servicios y proporcionas nombres, logotipos,
                fotografías, menús, precios u otros materiales, declaras que tienes
                autorización suficiente para utilizarlos y permitir su uso dentro
                del alcance acordado. Las responsabilidades, licencias y entregas
                concretas se definirán en el acuerdo correspondiente.
              </p>
            </section>

            <section>
              <h2>6. Información y resultados</h2>
              <p>
                Procuramos mantener la información del sitio clara y actualizada,
                pero puede contener errores o cambiar sin previo aviso. Las
                referencias a plazos, ventas, eficiencia u otros resultados son
                ilustrativas y pueden variar según el alcance, el restaurante, la
                operación y otros factores.
              </p>
            </section>

            <section>
              <h2>7. Disponibilidad</h2>
              <p>
                Podemos modificar, suspender o retirar partes del sitio para
                mantenimiento, seguridad o mejoras. No garantizamos que el acceso
                sea continuo ni esté libre de errores, aunque procuramos mantener
                una operación confiable.
              </p>
            </section>

            <section>
              <h2>8. Enlaces de terceros</h2>
              <p>
                Los enlaces a sitios o herramientas de terceros se ofrecen por
                conveniencia. Sabor 360 no controla sus contenidos, disponibilidad
                o prácticas, y su uso se rige por las condiciones del tercero.
              </p>
            </section>

            <section>
              <h2>9. Responsabilidad</h2>
              <p>
                En la medida permitida por la ley, Sabor 360 no será responsable
                por pérdidas indirectas derivadas únicamente del uso o la
                imposibilidad de uso de este sitio informativo. Nada en estos
                términos limita derechos o responsabilidades que legalmente no
                puedan excluirse.
              </p>
            </section>

            <section>
              <h2>10. Privacidad</h2>
              <p>
                El tratamiento de la información enviada a través del sitio se
                describe en nuestra{" "}
                <Link href="/privacy">Política de Privacidad</Link>.
              </p>
            </section>

            <section>
              <h2>11. Cambios y ley aplicable</h2>
              <p>
                Podemos actualizar estos términos cuando cambien el sitio o los
                requisitos aplicables. La versión vigente mostrará su fecha de
                actualización. La ley y el mecanismo de resolución de disputas
                aplicables a servicios contratados serán los establecidos en el
                acuerdo correspondiente y en las normas obligatorias que resulten
                aplicables.
              </p>
            </section>
          </div>

          <aside className="legal-cta" aria-label="Contacto">
            <p>¿Quieres conocer el alcance de una solución para tu restaurante?</p>
            <Link className="button button-primary" href="/#demo">
              Solicitar Demo
            </Link>
          </aside>
        </article>
      </main>

      <Footer />
    </>
  );
}
