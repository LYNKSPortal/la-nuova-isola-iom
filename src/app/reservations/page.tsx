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
      <section className="py-20 bg-white">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="text-center mb-12">
            <h2 className="font-bold text-gray-900 mb-4">Private Events & Large Parties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              For parties of 8 or more, or for private events, please contact us directly for personalized service
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-gray-900">Private Dining Room</h3>
              </div>
              <p className="text-gray-600 mb-6">
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
                WhatsApp Private Events
              </a>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-gray-900">Large Party Reservations</h3>
              </div>
              <p className="text-gray-600 mb-6">
                For groups of 8 or more, we offer special services and menu options:
              </p>
              <ul className="text-gray-600 space-y-3 mb-6">
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
                WhatsApp Large Party Booking
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
