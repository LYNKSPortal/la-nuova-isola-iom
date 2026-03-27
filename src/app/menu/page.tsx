import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
      <section className="relative h-96">
        <div className="absolute inset-0 bg-gray-900">
          {/* Placeholder for hero image */}
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-white text-xl">Menu Hero Image</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative h-full flex items-center">
          <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
            <div className="text-center">
              <h1 className="font-bold text-white mb-4">
                Our Menu
              </h1>
              <p className="text-xl text-white">
                Authentic Italian cuisine crafted with passion and tradition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Images */}
      <section className="py-20 bg-white">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Menu Page 1 */}
            <div className="text-center">
              <div className="w-full max-w-4xl mx-auto">
                <img 
                  src="/menu/Isola-Menu-Feb26_page-0001.jpg" 
                  alt="La Nuova Isola Menu Page 1"
                  className="w-full h-auto shadow-xl rounded-lg"
                />
              </div>
            </div>
            
            {/* Menu Page 2 */}
            <div className="text-center">
              <div className="w-full max-w-4xl mx-auto">
                <img 
                  src="/menu/Isola-Menu-Feb26_page-0002.jpg" 
                  alt="La Nuova Isola Menu Page 2"
                  className="w-full h-auto shadow-xl rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
