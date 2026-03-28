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

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Restaurant Location & Access</h3>
            <p className="text-gray-700 mb-6">
              La Nuova Isola is located in the heart of Douglas town centre. Please note that our restaurant is situated in a historic building with some physical limitations:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Access via stairs from Marks & Spencer (upstairs) or Isle of Man Bank (downstairs)</li>
              <li>Due to our central location and historic setting, wheelchair access is limited</li>
              <li>Our restaurant is intimate in size, focusing on quality over quantity</li>
              <li>Space is somewhat limited due to our commitment to an authentic, cozy Italian atmosphere</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment to Accommodation</h3>
            <p className="text-gray-700 mb-6">
              While our physical space has limitations, we are absolutely committed to doing everything possible to accommodate guests with disabilities. We believe everyone deserves to experience authentic Italian dining, and we will work with you to make your visit as comfortable as possible.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Staff trained to assist guests with mobility challenges</li>
              <li>Priority seating arrangements available when possible</li>
              <li>Assistance with navigation within the restaurant</li>
              <li>Menu reading and ordering assistance</li>
              <li>Flexible seating arrangements to accommodate specific needs</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pre-Visit Communication</h3>
            <p className="text-gray-700 mb-6">
              We strongly recommend contacting us in advance to discuss your specific accessibility needs. This allows us to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Arrange the most suitable seating for your requirements</li>
              <li>Prepare staff to provide appropriate assistance</li>
              <li>Discuss alternative arrangements if needed</li>
              <li>Ensure we can provide the best possible experience within our physical constraints</li>
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
              When making a reservation, please let us know about any accessibility requirements. This helps us prepare and ensure we can provide the best possible experience:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Mobility assistance needs</li>
              <li>Seating preferences and requirements</li>
              <li>Menu reading or ordering assistance</li>
              <li>Any other accommodations that would enhance your visit</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Parking and Location</h3>
            <p className="text-gray-700 mb-6">
              Our central Douglas location means parking is available in nearby public car parks. Due to our town centre location and the need to navigate stairs from either Marks & Spencer or Isle of Man Bank, we recommend:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Calling ahead to discuss the best approach for your specific needs</li>
              <li>Planning extra time for navigation to our restaurant</li>
              <li>Considering having a companion assist if mobility is a concern</li>
              <li>Contacting us to explore the most suitable options for your visit</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Animals</h3>
            <p className="text-gray-700 mb-6">
              Service animals are welcome at La Nuova Isola. We comply with all applicable laws regarding service animals and will make reasonable accommodations to ensure they can assist their handlers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Staff Training</h3>
            <p className="text-gray-700 mb-6">
              Our staff receives regular training on disability awareness and accessibility best practices. They are prepared to assist guests with various needs and are committed to providing respectful and helpful service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Honest Feedback and Limitations</h3>
            <p className="text-gray-700 mb-6">
              We believe in being transparent about our limitations while maintaining our commitment to excellent service. Our historic town centre location presents physical challenges that we cannot always overcome, but we promise to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Be honest about what we can and cannot accommodate</li>
              <li>Suggest alternatives when our physical space presents barriers</li>
              <li>Provide exceptional service within our constraints</li>
              <li>Listen to feedback and improve where possible</li>
              <li>Treat every guest with dignity and respect</li>
            </ul>

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
