import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReservationForm from '@/components/ReservationForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reservations - La Nuova Isola | Book Table Isle of Man",
  description: "Make a reservation at La Nuova Isola Italian restaurant in the Isle of Man. Book your table online for authentic Italian dining.",
  keywords: ["restaurant reservations", "book table", "Italian dining", "Isle of Man restaurant", "La Nuova Isola booking"],
  openGraph: {
    title: "Reservations - La Nuova Isola",
    description: "Make a reservation at La Nuova Isola Italian restaurant in the Isle of Man.",
    url: "https://lanuovaisola.im/reservations",
  },
};

export default function Reservations() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ReservationForm />
      
      
      {/* Private Events */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <h2 className="font-bold text-gray-900 mb-3 md:mb-4 text-xl md:text-2xl lg:text-3xl">Private Events & Large Parties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              For parties of 8 or more, or for private events, please contact us directly for personalized service
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8">
              <div className="text-center mb-4 md:mb-6">
                <h3 className="font-semibold text-gray-900 text-lg md:text-xl">Private Dining Room</h3>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                Our elegant private dining room accommodates up to 50 guests and is perfect for:
              </p>
              <ul className="text-gray-600 space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7A2325] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Corporate events and business dinners
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7A2325] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Wedding receptions and rehearsal dinners
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7A2325] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Birthday celebrations and anniversaries
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7A2325] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Holiday parties and family gatherings
                </li>
              </ul>
              <a 
                href="https://wa.me/447624482007" 
                className="block w-full bg-[#7A2325] 600 text-white py-3 rounded-lg hover:bg-[#7A2325] 700 transition-colors text-center font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                  Contact via WhatsApp
                </span>
              </a>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8">
              <div className="text-center mb-4 md:mb-6">
                <h3 className="font-semibold text-gray-900 text-lg md:text-xl">Large Party Reservations</h3>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                For groups of 8 or more, we offer special services and menu options:
              </p>
              <ul className="text-gray-600 space-y-2 md:space-y-3 mb-4 md:mb-6 text-sm md:text-base">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7A2325] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Customized set menus
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7A2325] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dedicated service staff
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7A2325] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advance menu planning
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#7A2325] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Flexible seating arrangements
                </li>
              </ul>
              <a 
                href="https://wa.me/447624482007" 
                className="block w-full bg-[#7A2325] 600 text-white py-3 rounded-lg hover:bg-[#7A2325] 700 transition-colors text-center font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                  Contact via WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <h2 className="font-bold text-gray-900 mb-3 md:mb-4 text-xl md:text-2xl lg:text-3xl">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Conveniently located in the heart of downtown with easy access to parking and public transportation
            </p>
          </div>
          
          <div className="bg-gray-200 h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps?q=54.149906,-4.480396&z=16&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="La Nuova Isola Restaurant Location - 10-12 Prospect Hill, Douglas, Isle of Man, IM1 1EJ"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
