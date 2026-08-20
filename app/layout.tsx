import "./globals.css";

import type { Metadata } from "next";
import { themeEffect } from "@/app/helpers/theme-effect";
import { Analytics } from "@/app/components/analytics";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Hammed Arowosegbe — Senior 3D / XR Engineer",
    template: "%s — Hammed Arowosegbe",
  },
  description:
    "Senior 3D and XR engineer building Web3D, CAD, AR, VR and AI-powered spatial products.",
  keywords: ["3D engineer", "XR engineer", "WebXR", "Web3D", "CAD", "AR", "VR"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hammed Arowosegbe — Senior 3D / XR Engineer",
    description:
      "Web3D, CAD, AR, VR and AI products, from browser-based design tools to immersive installations.",
    url: "https://hammedarowosegbe.com",
    siteName: "Hammed Arowosegbe",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@HammedArrow",
    creator: "@HammedArrow",
  },
  metadataBase: new URL("https://hammedarowosegbe.com"),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`,
          }}
        />
      </head>

      <body className="bg-[#fcfcfc] text-zinc-950 dark:bg-[#111] dark:text-zinc-100">
        <Header />
        <main className="min-h-screen">{children}</main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
