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
      <section className="relative h-96 w-full">
        <div className="absolute inset-0">
          <Image 
            src="/homepage-slider/Isola_01-scaled.jpg" 
            alt="La Nuova Isola Restaurant Menu" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <header className="relative h-full flex items-center justify-center">
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
          <div className="space-y-12">
            {/* Lunch Menu */}
            <div className="w-full">
              <img 
                src="/menu/Isola Lunch Menu Mar26_page-0001 2.jpg" 
                alt="La Nuova Isola Lunch Menu"
                className="w-full h-auto shadow-xl border border-black"
              />
            </div>

            {/* Lunch Menu Download */}
            <div className="text-center py-8">
              <p className="text-gray-700 mb-6">
                If you would like to download or print the Lunch Menu, please click on the button below:
              </p>
              <a 
                href="/menu/Isola Lunch Menu Mar26_page-0001 2.jpg" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#7A2325] text-white px-8 py-3 hover:bg-[#8B2E35] transition-colors font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View PDF Menu
              </a>
              <p className="text-sm text-gray-500 mt-6">
                Last Updated: 27.03.2026
              </p>
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

            {/* General Download Section */}
            <div className="text-center py-8">
              <p className="text-gray-700 mb-6">
                If you would like to download or print the Evening Menu, please click on the button below:
              </p>
              <a 
                href="/menu/Isola-Menu-Feb26.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#7A2325] text-white px-8 py-3 hover:bg-[#8B2E35] transition-colors font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View PDF Menu
              </a>
              <p className="text-sm text-gray-500 mt-6">
                Last Updated: 27.03.2026
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
