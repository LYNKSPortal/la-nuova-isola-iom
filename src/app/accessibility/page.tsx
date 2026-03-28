import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Accessibility - La Nuova Isola | Italian Restaurant Isle of Man",
  description: "La Nuova Isola's accessibility statement - our commitment to making our Italian restaurant and website accessible to everyone in the Isle of Man.",
  keywords: ["accessibility", "disabled access", "wheelchair access", "inclusive dining", "Italian restaurant", "Isle of Man"],
  openGraph: {
    title: "Accessibility - La Nuova Isola",
    description: "Our commitment to accessibility for all guests.",
    url: "https://lanuovaisola.im/accessibility",
  },
};

export default function Accessibility() {
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
              Accessibility
            </h1>
            <p className="text-xl text-white">
              Welcome to everyone at La Nuova Isola
            </p>
          </div>
        </header>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px] max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Accessibility Statement</h2>
            
            <p className="text-gray-700 mb-6">
              Last updated: March 2026
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment</h3>
            <p className="text-gray-700 mb-6">
              At La Nuova Isola, we are committed to ensuring that our restaurant and website are accessible to everyone, including people with disabilities. We believe in providing an inclusive dining experience where all guests feel welcome and comfortable.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Restaurant Accessibility</h3>
            <p className="text-gray-700 mb-4">Our restaurant features include:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Step-free entrance and wheelchair access</li>
              <li>Accessible restroom facilities</li>
              <li>Spacious dining areas for easy navigation</li>
              <li>Accessible seating options available</li>
              <li>Staff trained to assist guests with disabilities</li>
              <li>Assistance available for menu reading</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Website Accessibility</h3>
            <p className="text-gray-700 mb-4">We strive to make our website accessible by:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Following WCAG 2.1 accessibility guidelines</li>
              <li>Providing alternative text for images</li>
              <li>Ensuring keyboard navigation support</li>
              <li>Maintaining clear color contrast ratios</li>
              <li>Using semantic HTML for screen readers</li>
              <li>Providing resizable text</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Reservations and Assistance</h3>
            <p className="text-gray-700 mb-6">
              When making a reservation, please let us know if you have any specific accessibility requirements. We are happy to accommodate:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Wheelchair-accessible table placement</li>
              <li>Assistance with seating</li>
              <li>Menu modifications for dietary restrictions</li>
              <li>Special parking arrangements if needed</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Parking</h3>
            <p className="text-gray-700 mb-6">
              We provide accessible parking spaces near the restaurant entrance. Please contact us in advance if you require specific parking arrangements or assistance from your vehicle to the restaurant.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Animals</h3>
            <p className="text-gray-700 mb-6">
              Service animals are welcome at La Nuova Isola. We comply with all applicable laws regarding service animals and will make reasonable accommodations to ensure they can assist their handlers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Staff Training</h3>
            <p className="text-gray-700 mb-6">
              Our staff receives regular training on disability awareness and accessibility best practices. They are prepared to assist guests with various needs and are committed to providing respectful and helpful service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feedback and Continuous Improvement</h3>
            <p className="text-gray-700 mb-6">
              We are continuously working to improve our accessibility. If you encounter any barriers or have suggestions for improvement, please let us know. Your feedback helps us enhance our accessibility for all guests.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-6">
              For accessibility inquiries or to request specific accommodations, please contact us:
            </p>
            <p className="text-gray-700 mb-6">
              La Nuova Isola<br />
              Email: bookings@lanuovaisola.com<br />
              Phone: 0044 1624 623764
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Alternative Formats</h3>
            <p className="text-gray-700 mb-6">
              If you require information in alternative formats (large print, braille, or audio), please contact us and we will be happy to provide it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Services</h3>
            <p className="text-gray-700 mb-6">
              While we strive to ensure all aspects of our service are accessible, some third-party services (such as payment processors) may have different accessibility standards. We work with partners who share our commitment to accessibility.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
