import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0 bg-gray-900">
          {/* Placeholder for hero image */}
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-white text-xl">Services Hero Image</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative h-full flex items-center">
          <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Services
              </h1>
              <p className="text-xl text-white">
                Exceptional dining experiences for every occasion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fine Dining Service */}
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">Fine Dining Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fine Dining</h3>
                <p className="text-gray-600 mb-4">
                  Experience our signature tasting menu featuring seasonal ingredients and innovative preparations. 
                  Our fine dining service offers an intimate atmosphere with impeccable attention to detail.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Seasonal tasting menus
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Wine pairings available
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Chef's table experiences
                  </li>
                </ul>
                <button className="w-full bg-[#7A2325] text-white py-3 hover:bg-[#8B2E35] transition-colors font-medium">
                  Book Fine Dining
                </button>
              </div>
            </div>

            {/* Private Events */}
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">Private Events Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Private Events</h3>
                <p className="text-gray-600 mb-4">
                  Host your special occasions in our elegant private dining room. Perfect for corporate events, 
                  weddings, birthday celebrations, and intimate gatherings.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Customized menus
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Up to 50 guests
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Dedicated service staff
                  </li>
                </ul>
                <button className="w-full bg-[#7A2325] text-white py-3 hover:bg-[#8B2E35] transition-colors font-medium">
                  Plan Your Event
                </button>
              </div>
            </div>

            {/* Catering */}
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">Catering Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Catering</h3>
                <p className="text-gray-600 mb-4">
                  Bring the authentic taste of La Nuova Isola to your venue. Our professional catering team 
                  ensures the same quality and service you'd expect in our restaurant.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Off-premise catering
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Full-service options
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom menu design
                  </li>
                </ul>
                <button className="w-full bg-[#7A2325] text-white py-3 hover:bg-[#8B2E35] transition-colors font-medium">
                  Get Catering Quote
                </button>
              </div>
            </div>

            {/* Wine Tasting */}
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">Wine Tasting Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wine Tasting</h3>
                <p className="text-gray-600 mb-4">
                  Explore our curated selection of Italian wines with expert guidance from our sommelier. 
                  Perfect for wine enthusiasts and corporate team building.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Guided tastings
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Wine education
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Food pairings
                  </li>
                </ul>
                <button className="w-full bg-[#7A2325] text-white py-3 hover:bg-[#8B2E35] transition-colors font-medium">
                  Book Tasting
                </button>
              </div>
            </div>

            {/* Cooking Classes */}
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">Cooking Classes Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cooking Classes</h3>
                <p className="text-gray-600 mb-4">
                  Learn the secrets of Italian cuisine from our expert chefs. Hands-on classes covering 
                  pasta making, traditional techniques, and regional specialties.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Hands-on instruction
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Take-home recipes
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Small group sizes
                  </li>
                </ul>
                <button className="w-full bg-[#7A2325] text-white py-3 hover:bg-[#8B2E35] transition-colors font-medium">
                  Join a Class
                </button>
              </div>
            </div>

            {/* Takeout & Delivery */}
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">Takeout Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Takeout & Delivery</h3>
                <p className="text-gray-600 mb-4">
                  Enjoy La Nuova Isola at home with our takeout and delivery services. Same quality, 
                  same flavors, delivered to your door or ready for pickup.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Online ordering
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Contactless delivery
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-[#7A2325] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Family meal packages
                  </li>
                </ul>
                <button className="w-full bg-[#7A2325] text-white py-3 hover:bg-[#8B2E35] transition-colors font-medium">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gray-50">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service and unforgettable experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#7A2325]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Only the finest ingredients and highest standards in everything we do
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#7A2325]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Passionate Service</h3>
              <p className="text-gray-600">
                Our team is dedicated to creating memorable experiences for every guest
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#7A2325]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Options</h3>
              <p className="text-gray-600">
                Customizable services tailored to meet your specific needs and preferences
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
