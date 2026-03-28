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
      
      {/* Reservation Info */}
      <section className="py-20 bg-gray-50">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact</h3>
              <div className="text-red-600 space-y-1">
                <p>(555) 123-4567</p>
                <p>info@lanuovaisola.im</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
              <div className="text-red-600 space-y-1">
                <p>123 Restaurant Street</p>
                <p>City, State 12345</p>
                <p>United States</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-20 bg-white">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="text-center mb-12">
            <h2 className="font-bold text-gray-900 mb-4">Private Events & Large Parties</h2>
            <p className="text-red-600 max-w-2xl mx-auto">
              For parties of 8 or more, or for private events, please contact us directly for personalized service
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-gray-900">Private Dining Room</h3>
              </div>
              <p className="text-red-600 mb-6">
                Our elegant private dining room accommodates up to 50 guests and is perfect for:
              </p>
              <ul className="text-red-600 space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Corporate events and business dinners
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Wedding receptions and rehearsal dinners
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Birthday celebrations and anniversaries
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Holiday parties and family gatherings
                </li>
              </ul>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
                Inquire About Private Events
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-gray-900">Large Party Reservations</h3>
              </div>
              <p className="text-red-600 mb-6">
                For groups of 8 or more, we offer special services and menu options:
              </p>
              <ul className="text-red-600 space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Customized set menus
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dedicated service staff
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advance menu planning
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Flexible seating arrangements
                </li>
              </ul>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
                Call for Large Party Booking
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
