import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
      <section className="relative h-96" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0 bg-gray-900">
          {/* Placeholder for hero image */}
          <div className="w-full h-full bg-gray-800 flex items-center justify-center" role="img" aria-label="La Nuova Isola Restaurant Interior">
            <span className="text-white text-xl">About Hero Image</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <header className="relative h-full flex items-center">
          <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
            <div className="text-center">
              <h1 id="about-hero-heading" className="font-bold text-white mb-4">
                About La Nuova Isola
              </h1>
              <p className="text-xl text-white">
                Our story, our passion, our commitment to excellence
              </p>
            </div>
          </div>
        </header>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">Restaurant Interior</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Chef</h2>
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

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Ingredients</h3>
              <p className="text-gray-600">
                We source only the finest ingredients, working directly with local farmers and Italian producers
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion & Tradition</h3>
              <p className="text-gray-600">
                Every dish is prepared with love and respect for Italian culinary traditions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hospitality</h3>
              <p className="text-gray-600">
                We treat every guest like family, creating a warm and welcoming atmosphere
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Honored for our commitment to culinary excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Michelin Recommended</h3>
              <p className="text-gray-600">2023</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-2a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Italian Restaurant</h3>
              <p className="text-gray-600">City Awards 2022</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Top Local Restaurant</h3>
              <p className="text-gray-600">Dining Guide 2023</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence in Service</h3>
              <p className="text-gray-600">Hospitality Awards 2023</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
