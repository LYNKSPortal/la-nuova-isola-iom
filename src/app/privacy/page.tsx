import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy - La Nuova Isola | Italian Restaurant Isle of Man",
  description: "La Nuova Isola's privacy policy - how we collect, use, and protect your personal information when you visit our Italian restaurant in the Isle of Man.",
  keywords: ["privacy policy", "data protection", "personal information", "Italian restaurant", "Isle of Man"],
  openGraph: {
    title: "Privacy Policy - La Nuova Isola",
    description: "Our commitment to protecting your privacy and personal information.",
    url: "https://lanuovaisola.im/privacy",
  },
};

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-white">
              Your privacy is important to us
            </p>
          </div>
        </header>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px] max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy for La Nuova Isola</h2>
            
            <p className="text-gray-700 mb-6">
              Last updated: March 2026
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Introduction</h3>
            <p className="text-gray-700 mb-6">
              La Nuova Isola ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website lanuovaisola.im and use our services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect</h3>
            <p className="text-gray-700 mb-4">We may collect information about you in a variety of ways, including:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Personal data such as name, email address, phone number, and payment information</li>
              <li>Reservation details including date, time, and party size</li>
              <li>Website usage data and browsing behaviour</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Information</h3>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Process and confirm your reservations</li>
              <li>Provide customer service and support</li>
              <li>Send you important updates about your reservations</li>
              <li>Improve our website and services</li>
              <li>Respond to your inquiries and requests</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Protection</h3>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and only accessible to authorized personnel.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookies</h3>
            <p className="text-gray-700 mb-6">
              Our website uses cookies to enhance your experience. Cookies are small files stored on your device that help us analyse website traffic and improve our services. You can choose to reject cookies via your browser settings.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Services</h3>
            <p className="text-gray-700 mb-6">
              We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing customers, such as payment processors and reservation systems.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h3>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-gray-700 mb-6">
              La Nuova Isola<br />
              Email: bookings@lanuovaisola.com<br />
              Phone: 0044 1624 623764
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Changes to This Policy</h3>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
