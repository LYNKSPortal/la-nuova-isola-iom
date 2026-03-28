import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service - La Nuova Isola | Italian Restaurant Isle of Man",
  description: "La Nuova Isola's terms of service - rules and guidelines for using our Italian restaurant website and making reservations in the Isle of Man.",
  keywords: ["terms of service", "terms and conditions", "restaurant policies", "Italian restaurant", "Isle of Man"],
  openGraph: {
    title: "Terms of Service - La Nuova Isola",
    description: "Terms and conditions for using our restaurant services and website.",
    url: "https://lanuovaisola.im/terms",
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-64 w-full overflow-hidden">
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
            <h1 className="font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-white">
              Rules and guidelines for our services
            </p>
          </div>
        </header>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px] max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms of Service for La Nuova Isola</h2>
            
            <p className="text-gray-700 mb-6">
              Last updated: March 2026
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Introduction</h3>
            <p className="text-gray-700 mb-6">
              Welcome to La Nuova Isola. These Terms of Service ("Terms") govern your use of our website lanuovaisola.im and our restaurant services. By accessing our website or making a reservation, you agree to be bound by these Terms.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Restaurant Reservations</h3>
            <p className="text-gray-700 mb-4">When making a reservation with La Nuova Isola, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Provide accurate and complete information</li>
              <li>Arrive on time for your reservation</li>
              <li>Notify us at least 24 hours in advance if you need to cancel or modify your reservation</li>
              <li>Adhere to our dress code and restaurant policies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cancellation Policy</h3>
            <p className="text-gray-700 mb-6">
              We understand that plans change. Please cancel your reservation at least 24 hours in advance to avoid any cancellation fees. Late cancellations or no-shows may be subject to a charge.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Terms</h3>
            <p className="text-gray-700 mb-4">Payment for your dining experience is due at the time of service. We accept:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Cash</li>
              <li>Credit and debit cards (Visa, Mastercard, American Express)</li>
              <li>Contactless payments</li>
              <li>Mobile payment methods</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Website Usage</h3>
            <p className="text-gray-700 mb-6">
              You may use our website for lawful purposes only. You agree not to use our site for any illegal activities, to transmit harmful content, or to interfere with the operation of our website.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Intellectual Property</h3>
            <p className="text-gray-700 mb-6">
              All content on our website, including text, images, logos, and design elements, is the property of La Nuova Isola and is protected by copyright and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Restaurant Policies</h3>
            <p className="text-gray-700 mb-4">To ensure an enjoyable dining experience for all guests:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Smart casual dress code is recommended</li>
              <li>Children are welcome and appropriate seating will be provided</li>
              <li>Special dietary requirements should be communicated at the time of reservation</li>
              <li>Large parties (8 or more) may require a deposit</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h3>
            <p className="text-gray-700 mb-6">
              La Nuova Isola shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of our website or services. Our liability is limited to the maximum extent permitted by law.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Changes to Terms</h3>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of any changes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Governing Law</h3>
            <p className="text-gray-700 mb-6">
              These Terms are governed by and construed in accordance with the laws of the Isle of Man. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the Isle of Man courts.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-700 mb-6">
              La Nuova Isola<br />
              Email: bookings@lanuovaisola.com<br />
              Phone: 0044 1624 623764
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
