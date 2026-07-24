"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
  active?: "home" | "pricing";
};

export function Header({ active = "home" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand-link" href="/" aria-label="Sabor 360, inicio" onClick={closeMenu}>
          <Image
            unoptimized
            src="/assets/figma/logo.png"
            alt="Sabor 360"
            width={153}
            height={48}
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <Link className={active === "home" ? "is-active" : ""} href="/#features">
            Funciones
          </Link>
          <Link href="/#faq">FAQ&apos;s</Link>
          <Link className={active === "pricing" ? "is-active" : ""} href="/pricing">
            Planes y Precios
          </Link>
        </nav>

        <div className="desktop-actions">
          <span className="button button-ghost login-placeholder" title="Portal de clientes">
            Login <span aria-hidden="true">→</span>
          </span>
          <Link className="button button-dark nav-demo-button" href="#demo">
            Solicitar Demo
          </Link>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? "is-open" : ""}`}>
        <nav aria-label="Navegación móvil">
          <Link href="/#features" onClick={closeMenu}>
            Funciones
          </Link>
          <Link href="/#faq" onClick={closeMenu}>
            FAQ&apos;s
          </Link>
          <Link href="/pricing" onClick={closeMenu}>
            Planes y Precios
          </Link>
          <Link className="button button-primary" href="#demo" onClick={closeMenu}>
            Solicitar Demo
          </Link>
        </nav>
      </div>
    </header>
  );
}
