import "./globals.css";

import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hammed Arowosegbe",
  description:
    "Hammed Arowosegbe is a Senior Software Engineer and creator of SwiftXR, specializing in CAD, WebXR, AR/VR, and 3D modeling technologies.",
  openGraph: {
    title: "Hammed Arowosegbe",
    description:
      "Hammed Arowosegbe is a Senior Software Engineer and creator of SwiftXR, specializing in CAD, WebXR, AR/VR, and 3D modeling technologies.",
    url: "https://hammedarowosegbe.com",
    siteName: "Hammed Arowosegbe",
  },
  twitter: {
    card: "summary_large_image",
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
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
