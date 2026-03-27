import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://lanuovaisola.im",
    title: "La Nuova Isola - Authentic Italian Dining",
    description: "Experience authentic Italian dining at La Nuova Isola in the Isle of Man. Traditional recipes, fresh ingredients, and warm hospitality.",
    siteName: "La Nuova Isola",
    images: [
      {
        url: "/homepage-slider/Isola_01-scaled.jpg",
        width: 1200,
        height: 800,
        alt: "La Nuova Isola Restaurant - Authentic Italian Dining",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Nuova Isola - Authentic Italian Dining",
    description: "Experience authentic Italian dining at La Nuova Isola in the Isle of Man. Traditional recipes, fresh ingredients, and warm hospitality.",
    images: ["/homepage-slider/Isola_01-scaled.jpg"],
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
      </body>
    </html>
  );
}
