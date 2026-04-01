import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Menu - La Nuova Isola | Italian Cuisine Isle of Man",
  description: "Explore La Nuova Isola's authentic Italian menu featuring traditional pasta, pizza, seafood, and desserts in the Isle of Man.",
  keywords: ["Italian menu", "authentic Italian cuisine", "pasta", "pizza", "Italian food", "Isle of Man restaurant"],
  openGraph: {
    title: "Our Menu - La Nuova Isola",
    description: "Explore La Nuova Isola's authentic Italian menu featuring traditional dishes.",
    url: "https://lanuovaisola.im/menu",
  },
};

export default function Menu() {

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
        <img 
          src="/homepage-slider/Isola_13-scaled.jpg" 
          alt="Restaurant background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>
        <header className="relative h-full flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="text-center px-4 sm:px-6 md:px-8">
            <FadeIn>
              <h1 className="font-bold text-white mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl">
                Our Menu
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-white">
                Authentic Italian cuisine crafted with passion and tradition
              </p>
            </FadeIn>
          </div>
        </header>
      </section>

      {/* Menu Images */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Left Column - Lunch Menu */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <FadeIn>
                <div className="text-center">
                  <h2 className="font-bold text-gray-900 mb-4 md:mb-6 text-xl md:text-2xl lg:text-3xl">Lunch Menu</h2>
                </div>
              </FadeIn>
              
              {/* Lunch Menu Image */}
              <FadeIn delay={0.2}>
                <div className="w-full">
                  <Image 
                    src="/menu/Isola Lunch Menu Mar26_page-0001 2.jpg" 
                    alt="La Nuova Isola Lunch Menu"
                    width={800}
                    height={1200}
                    className="w-full h-auto shadow-xl border border-black"
                    priority={false}
                    loading="lazy"
                  />
                </div>
              </FadeIn>

              {/* Lunch Menu Download */}
              <FadeIn delay={0.3}>
                <div className="text-center py-3 md:py-4">
                <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
                  Download or print the Lunch Menu:
                </p>
                <a 
                  href="/menu/lunch-menu.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#7A2325] text-white px-5 md:px-6 py-2 md:py-2.5 hover:bg-[#8B2E35] transition-colors font-medium text-sm md:text-base"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Lunch Menu
                </a>
                <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">
                  Last Updated: 27.03.2026
                </p>
              </div>
              </FadeIn>
            </div>

            {/* Right Column - Evening Menu */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <FadeIn>
                <div className="text-center">
                  <h2 className="font-bold text-gray-900 mb-4 md:mb-6 text-xl md:text-2xl lg:text-3xl">Evening Menu</h2>
                </div>
              </FadeIn>
              
              {/* Menu Page 1 */}
              <FadeIn delay={0.2}>
                <div className="w-full">
                  <Image 
                    src="/menu/Isola-Menu-Feb26_page-0001.jpg" 
                    alt="La Nuova Isola Menu Page 1"
                    width={800}
                    height={1200}
                    className="w-full h-auto shadow-xl border border-black"
                    priority={false}
                    loading="lazy"
                  />
                </div>
              </FadeIn>
              
              {/* Menu Page 2 */}
              <FadeIn delay={0.3}>
                <div className="w-full">
                  <Image 
                    src="/menu/Isola-Menu-Feb26_page-0002.jpg" 
                    alt="La Nuova Isola Menu Page 2"
                    width={800}
                    height={1200}
                    className="w-full h-auto shadow-xl border border-black"
                    priority={false}
                    loading="lazy"
                  />
                </div>
              </FadeIn>

              {/* Evening Menu Download */}
              <FadeIn delay={0.4}>
                <div className="text-center py-3 md:py-4">
                  <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
                    Download or print the Evening Menu:
                  </p>
                  <a 
                    href="/menu/evening-menu.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#7A2325] text-white px-5 md:px-6 py-2 md:py-2.5 hover:bg-[#8B2E35] transition-colors font-medium text-sm md:text-base"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Evening Menu
                  </a>
                  <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">
                    Last Updated: 27.03.2026
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
