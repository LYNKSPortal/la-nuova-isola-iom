import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
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
      <section className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden" aria-labelledby="about-hero-heading">
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
          <div className="text-center px-4 sm:px-6 md:px-8">
            <FadeIn>
              <h1 id="about-hero-heading" className="font-bold text-white mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl">
                About La Nuova Isola
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-white">
                Our story, our passion, our commitment to excellence
              </p>
            </FadeIn>
          </div>
        </header>
      </section>

      {/* Our Story Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <FadeIn delay={0.2} className="order-2 lg:order-1">
              <img 
                src="/outside-restaurant.jpg" 
                alt="La Nuova Isola Restaurant Exterior" 
                className="w-full object-cover rounded-none"
              />
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <h2 className="font-bold text-gray-900 mb-4 md:mb-6 text-xl md:text-2xl lg:text-3xl">Our Story</h2>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                La Nuova Isola was born from a dream to bring the authentic flavors of Italy to the heart of our city. 
                Founded in 2020 by Chef Marco Rossi, our restaurant represents a culmination of over 20 years of 
                culinary experience and a deep passion for Italian cuisine.
              </p>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                Our name, "The New Island," symbolizes our mission to create an oasis of Italian culture and cuisine 
                - a place where guests can escape the everyday and immerse themselves in the warmth and hospitality 
                that Italy is famous for.
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Every dish we serve tells a story of tradition, innovation, and love for food. We source the finest 
                ingredients, many from local farms, and work closely with Italian producers to ensure authenticity 
                in every bite.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <FadeIn className="order-1 lg:order-1">
              <h2 className="font-bold text-gray-900 mb-4 md:mb-6 text-xl md:text-2xl lg:text-3xl">Our Chef</h2>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                Chef Marco Rossi brings a wealth of experience from working in some of Italy's most prestigious 
                restaurants. Trained in the classic techniques of Italian cuisine while embracing modern 
                culinary innovations, Chef Marco creates dishes that honour tradition while delighting the modern palate.
              </p>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                His philosophy is simple: let the ingredients speak for themselves. By focusing on quality, 
                seasonality, and respect for traditional methods, he creates menus that are both authentic and 
                exciting.
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                "Cooking is not just about feeding people," says Chef Marco. "It's about creating memories, 
                bringing families together, and sharing the joy of Italian hospitality."
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="order-2 lg:order-2">
              <img 
                src="/the-chefs.jpg" 
                alt="Chef Marco Rossi" 
                className="w-full object-cover rounded-none"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
