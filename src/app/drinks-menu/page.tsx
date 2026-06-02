import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Drinks Menu | Wines, Cocktails & Beverages | La Nuova Isola | Italian Restaurant Isle of Man",
  description: "Complete drinks menu at La Nuova Isola Italian restaurant, Isle of Man. Premium wine selection, classic cocktails, spirits, beers, and non-alcoholic beverages. Perfect pairings for authentic Italian cuisine.",
  keywords: [
    "drinks menu Isle of Man", 
    "Italian restaurant drinks", 
    "wine list Douglas Isle of Man", 
    "cocktails Italian restaurant", 
    "premium wines", 
    "beverages menu", 
    "La Nuova Isola bar", 
    "Italian dining drinks",
    "restaurant bar Isle of Man",
    "wine pairing Italian food"
  ],
  authors: [{ name: "La Nuova Isola Restaurant" }],
  creator: "La Nuova Isola",
  publisher: "La Nuova Isola",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lanuovaisola.im'),
  alternates: {
    canonical: 'https://lanuovaisola.im/drinks-menu',
  },
  openGraph: {
    title: "Drinks Menu | Premium Wines & Cocktails | La Nuova Isola",
    description: "Explore our comprehensive drinks menu featuring premium wines, handcrafted cocktails, fine spirits, and beverages at La Nuova Isola Italian restaurant in Isle of Man.",
    url: 'https://lanuovaisola.im/drinks-menu',
    sitesiteName: 'La Nuova Isola',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/og-image-drinks-menu.jpg',
        width: 1200,
        height: 630,
        alt: 'La Nuova Isola Drinks Menu - Premium Wines and Cocktails',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Drinks Menu | La Nuova Isola | Italian Restaurant Isle of Man",
    description: "Premium wines, cocktails, and beverages at La Nuova Isola Italian restaurant. Perfect complement to authentic Italian cuisine.",
    images: ['/og-image-drinks-menu.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function DrinksMenu() {
  return (
    <>
      <StructuredData type="Restaurant" />
      <div className="min-h-screen bg-white">
        <Header />

      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
        <Image 
          src="/homepage-slider/Isola_13-scaled.jpg" 
          alt="Restaurant background"
          fill
          style={{
            objectFit: 'cover',
            zIndex: 0
          }}
          priority={false}
          loading="lazy"
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>
        <header className="relative h-full flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="text-center px-4 sm:px-6 md:px-8">
            <FadeIn>
              <h1 className="font-bold text-white mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl">
                Drinks Menu
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-white">
                Premium wines, cocktails, and beverages to complement your dining experience
              </p>
            </FadeIn>
          </div>
        </header>
      </section>

      {/* Drinks Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-lg md:text-xl lg:text-2xl">Drinks</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-[#7A2325] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Drink</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Small Prosecco (200ml)</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£8.50</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Fruit juices</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">From £4.50</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Tonic water</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">From £2.50</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Mixers / cordials</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£1.50</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Mineral water (small)</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£3.50</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Mineral water (large)</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£6</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">House bottled lager</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5.50</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Italian bottled lager</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5.50</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Other beers / ales / cider</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">From £6.50</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Spirits / liqueurs / vermouths</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">From £5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Port</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">From £6</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Dessert wine (175ml)</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£7</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Liqueur coffee</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">From £7</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Coffee & tea selection</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">From £3.75</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Aperol Spritz</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£14</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Espresso Martini</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Wine List Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-lg md:text-xl lg:text-2xl">Wine List</h2>
            
            {/* House Wines */}
            <div className="mb-12">
              <h3 className="font-bold text-gray-900 mb-6 text-base md:text-lg">House Wines</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-gray-50 rounded-lg overflow-hidden">
                  <thead className="bg-[#7A2325] text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Wine</th>
                      <th className="px-6 py-3 text-center text-sm font-semibold">175ml</th>
                      <th className="px-6 py-3 text-center text-sm font-semibold"><span className="md:hidden">500ml</span><span className="hidden md:inline">500ml Carafe</span></th>
                      <th className="px-6 py-3 text-right text-sm font-semibold">Bottle</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">White</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-center">£7.50</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-center">£17.00</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£24.00</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">Red</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-center">£7.50</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-center">£17.00</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£24.00</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">Rosé</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-center">£7.50</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-center">£17.00</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£24.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Premium House Whites */}
            <div className="mb-12">
              <h3 className="font-bold text-gray-900 mb-6 text-base md:text-lg">Premium House Whites (£29)</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-left md:text-center">
                  <p className="text-sm text-gray-900">Viognier</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-left md:text-center">
                  <p className="text-sm text-gray-900">Grillo</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-left md:text-center">
                  <p className="text-sm text-gray-900">Riesling</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-left md:text-center">
                  <p className="text-sm text-gray-900">Pinot Grigio</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-left md:text-center">
                  <p className="text-sm text-gray-900">Chenin Blanc</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-left md:text-center">
                  <p className="text-sm text-gray-900">Chardonnay</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-left md:text-center">
                  <p className="text-sm text-gray-900">Sauvignon Blanc</p>
                </div>
              </div>
            </div>

            {/* Premium House Reds */}
            <div className="mb-12">
              <h3 className="font-bold text-gray-900 mb-6 text-base md:text-lg">Premium House Reds (£29)</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-left md:text-center">
                  <p className="text-sm text-gray-900">Pinot Noir</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-left md:text-center">
                  <p className="text-sm text-gray-900">Malbec</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-left md:text-center">
                  <p className="text-sm text-gray-900">Garnacha</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-left md:text-center">
                  <p className="text-sm text-gray-900">Shiraz</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-left md:text-center">
                  <p className="text-sm text-gray-900">Tempranillo</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-left md:text-center">
                  <p className="text-sm text-gray-900">Cabernet Sauvignon</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-left md:text-center">
                  <p className="text-sm text-gray-900">Merlot</p>
                </div>
              </div>
            </div>

            {/* White Wines */}
            <div className="mb-12">
              <h3 className="font-bold text-gray-900 mb-6 text-base md:text-lg">White Wines</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-gray-50 rounded-lg overflow-hidden">
                  <thead className="bg-[#7A2325] text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Wine</th>
                      <th className="px-6 py-3 text-right text-sm font-semibold">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Chablis (France)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£45</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Vernaccia di San Gimignano (Italy)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£45</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Gavi di Gavi (Italy)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£45</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Verdicchio dei Castelli di Jesi DOC (Italy)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£35</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Alice Verdeca Salento IGT (Italy)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£45</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Vermentino (Italy)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£40</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Sauvignon Blanc Marlborough (NZ)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£40</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Albariño Rias Baixas (Spain)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£45</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Rosé Wines */}
            <div className="mb-12">
              <h3 className="font-bold text-gray-900 mb-6 text-base md:text-lg">Rosé Wines</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-gray-50 rounded-lg overflow-hidden">
                  <thead className="bg-[#7A2325] text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Wine</th>
                      <th className="px-6 py-3 text-right text-sm font-semibold">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Malbec Rosé (Argentina)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£35</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">White Zinfandel (USA)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Red Wines */}
            <div className="mb-12">
              <h3 className="font-bold text-gray-900 mb-6 text-base md:text-lg">Red Wines</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-gray-50 rounded-lg overflow-hidden">
                  <thead className="bg-[#7A2325] text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Wine</th>
                      <th className="px-6 py-3 text-right text-sm font-semibold">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Malbec Reserve (Argentina)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£40</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Valpolicella Ripasso (Italy)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£45</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Cannonau Riserva (Italy)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£45</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Pinot Noir Marlborough (NZ)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£40</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Barbaresco DOCG (Italy)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£65</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Côtes du Rhône Villages (France)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£40</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Passimiento Baglio Gibellina (Italy)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£40</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Primitivo di Manduria (Italy)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£45</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Barbera d'Asti (Italy)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£35</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Amarone della Valpolicella (Italy)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£75</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Douro Tinto (Portugal)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£40</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Passo Antico (Sardinia)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£40</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Etna Rosso (Italy)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£55</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Rioja Reserva (Spain)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£40</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Riserva Montepulciano (Italy)</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£55</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sparkling & Champagne */}
            <div>
              <h3 className="font-bold text-gray-900 mb-6 text-base md:text-lg">Sparkling & Champagne</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-gray-50 rounded-lg overflow-hidden">
                  <thead className="bg-[#7A2325] text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Wine</th>
                      <th className="px-6 py-3 text-right text-sm font-semibold">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">House Champagne Brut NV</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£50</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">House Prosecco</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£35</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Taittinger Brut NV</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£80</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-900">Taittinger Rosé NV</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£90</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PDF Download Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-bold text-gray-900 mb-6 text-xl md:text-2xl lg:text-3xl">Download Our Menu</h2>
              <p className="text-gray-600 mb-8 text-base md:text-lg">Take our drinks menu with you or view it offline</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/menu/Isola Drink Menu.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#7A2325] hover:bg-[#5a1a1c] text-white font-medium rounded-lg transition-colors shadow-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Menu PDF
                </a>
                <a 
                  href="/menu/Isola Drink Menu.pdf" 
                  download="Isola Drink Menu.pdf"
                  className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-[#7A2325] font-medium rounded-lg transition-colors border border-[#7A2325] shadow-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Menu
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
