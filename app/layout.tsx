import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sabor 360 | Menús digitales que despiertan el apetito",
    template: "%s | Sabor 360",
  },
  description:
    "Transforma el menú de tu restaurante en una experiencia visual, interactiva y diseñada para vender más.",
  applicationName: "Sabor 360",
  icons: {
    icon: "/assets/figma/logo.png",
    shortcut: "/assets/figma/logo.png",
    apple: "/assets/figma/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "es_PR",
    siteName: "Sabor 360",
    title: "Sabor 360 | Tu menú, convertido en experiencia",
    description:
      "Fotografía, video y tecnología para presentar cada plato como se merece.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ff4c00",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
