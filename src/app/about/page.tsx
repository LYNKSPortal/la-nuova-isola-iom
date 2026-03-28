import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About La Nuova Isola - Our Story | Italian Restaurant Isle of Man",
  description: "Learn about La Nuova Isola's story, our passion for authentic Italian cuisine, and our commitment to excellence in the Isle of Man.",
  keywords: ["about La Nuova Isola", "Italian restaurant story", "Isle of Man restaurant", "Italian cuisine", "restaurant history"],
  openGraph: {
    title: "About La Nuova Isola - Our Story",
    description: "Learn about La Nuova Isola's story, our passion for authentic Italian cuisine, and our commitment to excellence.",
    url: "https://lanuovaisola.im/about",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden" aria-labelledby="about-hero-heading">
        <img 
          src="/homepage-slider/Isola_01-scaled.jpg" 
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
            <h1 id="about-hero-heading" className="font-bold text-white mb-4">
              About La Nuova Isola
            </h1>
            <p className="text-xl text-white">
              Our story, our passion, our commitment to excellence
            </p>
          </div>
        </header>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="text-center mb-12">
            <h2 className="font-bold text-gray-900 mb-6">Our Story</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/the-chefs.jpg" 
                alt="La Nuova Isola Restaurant Interior" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-4">
                La Nuova Isola was born from a dream to bring the authentic flavors of Italy to the heart of our city. 
                Founded in 2020 by Chef Marco Rossi, our restaurant represents a culmination of over 20 years of 
                culinary experience and a deep passion for Italian cuisine.
              </p>
              <p className="text-gray-600 mb-4">
                Our name, "The New Island," symbolizes our mission to create an oasis of Italian culture and cuisine 
                - a place where guests can escape the everyday and immerse themselves in the warmth and hospitality 
                that Italy is famous for.
              </p>
              <p className="text-gray-600">
                Every dish we serve tells a story of tradition, innovation, and love for food. We source the finest 
                ingredients, many from local farms, and work closely with Italian producers to ensure authenticity 
                in every bite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="text-center mb-12">
            <h2 className="font-bold text-gray-900 mb-6">Our Chef</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-gray-600 mb-4">
                Chef Marco Rossi brings a wealth of experience from working in some of Italy's most prestigious 
                restaurants. Trained in the classic techniques of Italian cuisine while embracing modern 
                culinary innovations, Chef Marco creates dishes that honor tradition while delighting the modern palate.
              </p>
              <p className="text-gray-600 mb-4">
                His philosophy is simple: let the ingredients speak for themselves. By focusing on quality, 
                seasonality, and respect for traditional methods, he creates menus that are both authentic and 
                exciting.
              </p>
              <p className="text-gray-600">
                "Cooking is not just about feeding people," says Chef Marco. "It's about creating memories, 
                bringing families together, and sharing the joy of Italian hospitality."
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">Chef Portrait</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
