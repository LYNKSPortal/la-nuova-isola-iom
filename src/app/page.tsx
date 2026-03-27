import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomepageSlider from '@/components/HomepageSlider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "La Nuova Isola - Authentic Italian Restaurant | Isle of Man",
  description: "Experience authentic Italian dining at La Nuova Isola in the Isle of Man. Traditional recipes, fresh ingredients, warm hospitality, and unforgettable dining experiences.",
  keywords: ["Italian restaurant", "authentic Italian food", "Isle of Man", "La Nuova Isola", "Italian dining", "restaurant reservations", "Italian cuisine", "family dining"],
  openGraph: {
    title: "La Nuova Isola - Authentic Italian Restaurant",
    description: "Experience authentic Italian dining at La Nuova Isola in the Isle of Man. Traditional recipes, fresh ingredients, and warm hospitality.",
    url: "https://lanuovaisola.im",
    images: [
      {
        url: "/homepage-slider/Isola_01-scaled.jpg",
        width: 1200,
        height: 800,
        alt: "La Nuova Isola Restaurant - Authentic Italian Dining",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Slider Section */}
      <HomepageSlider />

      {/* About Section */}
      <section id="about" className="py-20 bg-white" aria-labelledby="about-heading">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <h2 id="about-heading" className="font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  La Nuova Isola brings the authentic taste of Italy to your table. Founded in 2020, 
                  our restaurant is a celebration of traditional Italian cuisine with a modern twist.
                </p>
                <p className="text-gray-600">
                  Our chef, with over 20 years of experience, creates dishes that honor the rich 
                  culinary heritage of Italy while incorporating fresh, locally sourced ingredients.
                </p>
                <p className="text-gray-600">
                  Whether you're joining us for a romantic dinner, family gathering, or business lunch, 
                  we promise an unforgettable dining experience.
                </p>
              </div>
              <div className="mt-6">
                <a 
                  href="/about" 
                  className="inline-block bg-[#7A2325] text-white px-6 py-3 hover:bg-[#8B2E35] transition-colors font-medium"
                  aria-label="Learn more about our story - Navigate to About page"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}
