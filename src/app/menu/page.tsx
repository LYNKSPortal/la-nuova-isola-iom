import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
      <section className="relative h-96 w-full overflow-hidden">
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
          <div className="text-center px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
            <h1 className="font-bold text-white mb-4">
              Our Menu
            </h1>
            <p className="text-xl text-white">
              Authentic Italian cuisine crafted with passion and tradition
            </p>
          </div>
        </header>
      </section>

      {/* Menu Images */}
      <section className="py-20 bg-white">
        <div className="px-[20px] md:px-[50px] lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Lunch Menu */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="font-bold text-gray-900 mb-6">Lunch Menu</h2>
              </div>
              
              {/* Lunch Menu Image */}
              <div className="w-full">
                <img 
                  src="/menu/Isola Lunch Menu Mar26_page-0001 2.jpg" 
                  alt="La Nuova Isola Lunch Menu"
                  className="w-full h-auto shadow-xl border border-black"
                />
              </div>

              {/* Lunch Menu Download */}
              <div className="text-center py-4">
                <p className="text-gray-700 mb-4">
                  Download or print the Lunch Menu:
                </p>
                <a 
                  href="/menu/Isola Lunch Menu Mar26_page-0001 2.jpg" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#7A2325] text-white px-6 py-2 hover:bg-[#8B2E35] transition-colors font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Lunch Menu
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  Last Updated: 27.03.2026
                </p>
              </div>
            </div>

            {/* Right Column - Evening Menu */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="font-bold text-gray-900 mb-6">Evening Menu</h2>
              </div>
              
              {/* Menu Page 1 */}
              <div className="w-full">
                <img 
                  src="/menu/Isola-Menu-Feb26_page-0001.jpg" 
                  alt="La Nuova Isola Menu Page 1"
                  className="w-full h-auto shadow-xl border border-black"
                />
              </div>
              
              {/* Menu Page 2 */}
              <div className="w-full">
                <img 
                  src="/menu/Isola-Menu-Feb26_page-0002.jpg" 
                  alt="La Nuova Isola Menu Page 2"
                  className="w-full h-auto shadow-xl border border-black"
                />
              </div>

              {/* Evening Menu Download */}
              <div className="text-center py-4">
                <p className="text-gray-700 mb-4">
                  Download or print the Evening Menu:
                </p>
                <a 
                  href="/menu/Isola-Menu-Feb26.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#7A2325] text-white px-6 py-2 hover:bg-[#8B2E35] transition-colors font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Evening Menu
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  Last Updated: 27.03.2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
