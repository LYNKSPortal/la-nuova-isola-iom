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

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50" aria-labelledby="services-heading">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <header className="text-center mb-16">
            <h2 id="services-heading" className="font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From intimate dinners to large celebrations, we offer exceptional dining experiences for every occasion
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">Service Image 1</span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Fine Dining</h3>
                <p className="text-gray-600">
                  Experience our signature tasting menu featuring seasonal ingredients and innovative preparations
                </p>
              </div>
            </div>
            
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">Service Image 2</span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Private Events</h3>
                <p className="text-gray-600">
                  Host your special occasions in our private dining room with customized menus and service
                </p>
              </div>
            </div>
            
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">Service Image 3</span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Catering</h3>
                <p className="text-gray-600">
                  Bring the taste of La Nuova Isola to your event with our professional catering services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white" aria-labelledby="contact-heading">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 id="contact-heading" className="font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#7A2325] rounded-full flex items-center justify-center" aria-hidden="true">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Address</h3>
                    <address className="text-gray-600 not-italic">
                      123 Restaurant Street<br />
                      City, State 12345<br />
                      Downtown District
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#7A2325] rounded-full flex items-center justify-center" aria-hidden="true">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:5551234567" className="hover:text-[#7A2325] transition-colors">
                        (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#7A2325] rounded-full flex items-center justify-center" aria-hidden="true">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@lanuovaisola.com" className="hover:text-[#7A2325] transition-colors">
                        info@lanuovaisola.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p><time>Monday - Thursday: 11:00 AM - 10:00 PM</time></p>
                  <p><time>Friday - Saturday: 11:00 AM - 11:00 PM</time></p>
                  <p><time>Sunday: 12:00 PM - 9:00 PM</time></p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="font-bold text-gray-900 mb-6">Reserve a Table</h2>
              <form className="space-y-4" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7A2325]" 
                      required
                      aria-required="true"
                      aria-describedby="name-error"
                    />
                    <span id="name-error" className="sr-only"></span>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7A2325]" 
                      required
                      aria-required="true"
                      aria-describedby="email-error"
                    />
                    <span id="email-error" className="sr-only"></span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7A2325]" 
                      required
                      aria-required="true"
                      aria-describedby="phone-error"
                    />
                    <span id="phone-error" className="sr-only"></span>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                    <input 
                      type="date" 
                      id="date"
                      name="date"
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7A2325]" 
                      required
                      aria-required="true"
                      aria-describedby="date-error"
                    />
                    <span id="date-error" className="sr-only"></span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
                    <select 
                      id="time"
                      name="time"
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7A2325]"
                      required
                      aria-required="true"
                      aria-describedby="time-error"
                    >
                      <option value="">Select a time</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="8:30 PM">8:30 PM</option>
                    </select>
                    <span id="time-error" className="sr-only"></span>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Guests *</label>
                    <select 
                      id="guests"
                      name="guests"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A2325]"
                      required
                      aria-required="true"
                      aria-describedby="guests-error"
                    >
                      <option value="">Number of guests</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7+">7+</option>
                    </select>
                    <span id="guests-error" className="sr-only"></span>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="requests" className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                  <textarea 
                    id="requests"
                    name="requests"
                    rows={4} 
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7A2325]"
                    placeholder="Any dietary restrictions or special occasions?"
                    aria-describedby="requests-help"
                  ></textarea>
                  <span id="requests-help" className="sr-only">Optional field for special requests</span>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#7A2325] text-white py-3 hover:bg-[#8B2E35] transition-colors font-medium"
                  aria-label="Submit reservation request"
                >
                  Make Reservation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
