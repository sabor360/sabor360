import Image from "next/image";
import Link from "next/link";
import { DemoForm } from "./DemoForm";

const faqs = [
  {
    question: "¿Qué es Sabor 360?",
    answer:
      "Sabor 360 transforma el menú tradicional de tu restaurante en una experiencia digital premium, con fotografía, video, descripciones claras, precios y una navegación diseñada alrededor de tu marca.",
  },
  {
    question: "¿Cómo funciona el menú digital?",
    answer:
      "Tus clientes escanean un código QR, exploran los platos desde su teléfono y descubren cada opción con imágenes, video, ingredientes y recomendaciones que facilitan la decisión.",
  },
  {
    question: "¿Puedo personalizar el menú con la identidad visual de mi restaurante?",
    answer:
      "Sí. Adaptamos logo, colores, tipografía, categorías, tono y contenido para que cada pantalla se sienta parte natural de tu restaurante.",
  },
  {
    question: "¿Cuánto tiempo toma lanzar el menú?",
    answer:
      "Nuestro proceso está diseñado para llevarte del descubrimiento al lanzamiento en aproximadamente 10 días, sujeto al alcance y la disponibilidad para producir contenido.",
  },
  {
    question: "¿Puedo actualizar los precios, la disponibilidad y los platos?",
    answer:
      "Sí. Desde tu panel puedes editar precios, disponibilidad, categorías y promociones sin reimprimir menús ni esperar cambios técnicos.",
  },
  {
    question: "¿Sabor 360 está disponible en varios idiomas?",
    answer:
      "Sí. La experiencia admite más de 34 idiomas para ayudar a cada visitante a explorar el menú con confianza.",
  },
  {
    question: "¿Qué datos y KPIs ofrece Sabor 360 sobre el comportamiento de mis clientes?",
    answer:
      "Puedes observar visitas, platos vistos, selecciones, promociones consultadas, upsells aceptados y otras señales útiles para tomar mejores decisiones de menú.",
  },
];

export function CaseStudies() {
  const cards = [
    {
      image: "/assets/figma/pricing-case-1.jpg",
      alt: "Clientes disfrutando una experiencia en restaurante",
      eyebrow: "Pedidos más rápidos",
      copy: "Tus clientes encuentran lo que buscan y ordenan con mayor facilidad.",
    },
    {
      image: "/assets/figma/pricing-case-2.jpg",
      alt: "Clientes conversando en un restaurante",
      eyebrow: "Clientes satisfechos",
      copy: "Una experiencia más clara, intuitiva y agradable para cada cliente.",
    },
    {
      image: "/assets/figma/pricing-case-3.jpg",
      alt: "Cliente disfrutando un plato en un restaurante",
      eyebrow: "Más ventas",
      copy: "Una mejor presentación aumenta el interés y el ticket promedio.",
    },
  ];

  return (
    <section className="section case-section" aria-labelledby="case-title">
      <div className="section-heading centered">
        <span className="eyebrow">Lo que hacemos</span>
        <h2 id="case-title">
          Cada plato merece ser <em>protagonista.</em>
        </h2>
        <p>Convertimos cada plato en una experiencia visual que hace que tus clientes quieran ordenar más.</p>
      </div>

      <div className="case-rail">
        {cards.map((card) => (
          <article className="case-card" key={card.eyebrow}>
            <Image unoptimized src={card.image} alt={card.alt} fill sizes="(max-width: 720px) 82vw, 34vw" />
            <div className="case-overlay">
              <span>{card.eyebrow}</span>
              <p>{card.copy}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="case-progress" aria-hidden="true"><span /></div>
    </section>
  );
}

export function DemoSection() {
  return (
    <section id="demo" className="section demo-section" aria-labelledby="demo-title">
      <div className="demo-heading">
        <h2 id="demo-title">Descubre Sabor 360 hoy.<br />Agenda tu demostración personalizada.</h2>
      </div>
      <DemoForm />
    </section>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="section faq-section" aria-labelledby="faq-title">
      <div className="section-heading centered">
        <div className="faq-mark" aria-hidden="true">!</div>
        <span className="eyebrow">Preguntas Frecuentes</span>
        <h2 id="faq-title">¿Tienes preguntas? <em>Tenemos respuestas.</em></h2>
        <p>Todo lo que necesitas saber para llevar tu restaurante al siguiente nivel con Sabor 360.</p>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details key={faq.question} open={index === 0}>
            <summary>
              <span>{faq.question}</span>
              <i aria-hidden="true">⌄</i>
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

const footerColumns = [
  {
    title: "PLATAFORMA",
    links: [
      ["Inicio", "/"],
      ["Funciones", "/#features"],
      ["Analíticas", "/#control"],
      ["Precios", "/pricing"],
      ["Agendar Demo", "/#demo"],
    ],
  },
  {
    title: "EMPRESA",
    links: [
      ["Sobre Nosotros", "/#story"],
      ["Nuestro Proceso", "/#process"],
      ["Casos de Éxito", "/#results"],
      ["Contáctanos", "/#demo"],
    ],
  },
  {
    title: "RECURSOS",
    links: [
      ["Preguntas Frecuentes", "/#faq"],
      ["Centro de Ayuda", "/#faq"],
      ["Blog", "/#story"],
      ["Soporte", "/#demo"],
    ],
  },
  {
    title: "LEGAL",
    links: [
      ["Política de Privacidad", "/privacy"],
      ["Términos de Servicio", "/terms"],
      ["Política de Cookies", "/privacy#cookies"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-links">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3>{column.title}</h3>
              {column.links.map(([label, href]) => (
                <Link href={href} key={label}>{label}</Link>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-statement">
          <p>TÚ CREAS EL SABOR.<br />NOSOTROS <em>LA EXPERIENCIA.</em></p>
          <span className="footer-accent" aria-hidden="true">⌁</span>
        </div>
      </div>
      <div className="footer-meta">
        <span>© 2026 Sabor 360</span>
        <span><i /> Del concepto al lanzamiento en 10 días.</span>
      </div>
      <div className="footer-wordmark" aria-hidden="true">SABOR360</div>
    </footer>
  );
}
