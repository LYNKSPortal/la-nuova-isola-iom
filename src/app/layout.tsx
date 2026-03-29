import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Nuova Isola - Authentic Italian Dining | Restaurant in Isle of Man",
  description: "Experience authentic Italian dining at La Nuova Isola in the Isle of Man. Traditional recipes, fresh ingredients, and warm hospitality. Book your table today!",
  keywords: ["Italian restaurant", "authentic Italian food", "Isle of Man restaurant", "La Nuova Isola", "Italian dining", "restaurant", "book table", "Italian cuisine"],
  authors: [{ name: "La Nuova Isola" }],
  creator: "La Nuova Isola",
  publisher: "La Nuova Isola",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lanuovaisola.im"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicons/favicon.ico", sizes: "any" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/favicons/site.webmanifest" },
      { rel: "apple-touch-icon", sizes: "192x192", url: "/favicons/web-app-manifest-192x192.png" },
      { rel: "apple-touch-icon", sizes: "512x512", url: "/favicons/web-app-manifest-512x512.png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://lanuovaisola.im",
    title: "La Nuova Isola - Authentic Italian Dining",
    description: "Experience authentic Italian dining at La Nuova Isola in the Isle of Man. Traditional recipes, fresh ingredients, and warm hospitality.",
    siteName: "La Nuova Isola",
    images: [
      {
        url: "/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "La Nuova Isola Restaurant - Authentic Italian Dining",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Nuova Isola - Authentic Italian Dining",
    description: "Experience authentic Italian dining at La Nuova Isola in the Isle of Man. Traditional recipes, fresh ingredients, and warm hospitality.",
    images: ["/meta-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      itemScope
      itemType="https://schema.org/Restaurant"
    >
      <body className="min-h-full flex flex-col font-poppins">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#7A2325] text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        <div id="main-content">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
