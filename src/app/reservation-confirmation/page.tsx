import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reservation Request Received - La Nuova Isola",
  description: "Your reservation request has been received. We will contact you shortly to confirm your booking.",
  openGraph: {
    title: "Reservation Request Received - La Nuova Isola",
    description: "Your reservation request has been received. We will contact you shortly to confirm your booking.",
    url: "https://lanuovaisola.im/reservation-confirmation",
  },
};

export default function ReservationConfirmation() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Confirmation Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Main Message */}
            <h1 className="font-bold text-gray-900 mb-4 md:mb-6 text-xl sm:text-2xl md:text-3xl">
              Reservation Request Received
            </h1>
            
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 md:p-8 mb-6 md:mb-8 text-left">
              <h2 className="font-semibold text-gray-900 mb-3 md:mb-4 text-lg md:text-xl">What Happens Next?</h2>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#7A2325] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h3 className="font-medium text-gray-900 text-sm md:text-base">We've Received Your Request</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Your reservation request has been successfully submitted and received by our team.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#7A2325] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h3 className="font-medium text-gray-900 text-sm md:text-base">Peter Will Contact You</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Peter will be in touch with you via WhatsApp to confirm your booking details and availability.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#7A2325] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h3 className="font-medium text-gray-900 text-sm md:text-base">Booking Confirmation</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Once confirmed, you'll receive a final confirmation with all your booking details.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-yellow-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div className="text-left">
                  <h3 className="font-semibold text-yellow-800 mb-1">Important</h3>
                  <p className="text-yellow-700">
                    <strong>Your reservation has been received but is NOT yet confirmed.</strong> We will be in touch with you to confirm the booking.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Need to Make Changes?</h3>
              <p className="text-gray-600 mb-4">
                If you need to modify your reservation request or have any questions, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:00441624623764" 
                  className="inline-flex items-center justify-center bg-[#7A2325] text-white px-6 py-3 hover:bg-[#8B2E35] transition-colors font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
                <a 
                  href="https://wa.me/447624482007" 
                  className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 hover:bg-green-700 transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="inline-flex items-center justify-center bg-gray-200 text-gray-800 px-8 py-3 hover:bg-gray-300 transition-colors font-medium"
              >
                Back to Home
              </Link>
              <Link 
                href="/menu"
                className="inline-flex items-center justify-center bg-[#7A2325] text-white px-8 py-3 hover:bg-[#8B2E35] transition-colors font-medium"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
