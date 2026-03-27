import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gallery - La Nuova Isola | Restaurant Photos Isle of Man",
  description: "View photos of La Nuova Isola restaurant, our dishes, and events in the Isle of Man. Experience our authentic Italian dining atmosphere.",
  keywords: ["restaurant gallery", "Italian restaurant photos", "Isle of Man dining", "La Nuova Isola images"],
  openGraph: {
    title: "Gallery - La Nuova Isola",
    description: "View photos of La Nuova Isola restaurant and our authentic Italian dishes.",
    url: "https://lanuovaisola.im/gallery",
  },
};

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      category: "interior",
      title: "Dining Area",
      description: "Our main dining room with elegant ambiance"
    },
    {
      id: 2,
      category: "food",
      title: "Signature Dish",
      description: "Chef's special pasta creation"
    },
    {
      id: 3,
      category: "interior",
      title: "Private Dining",
      description: "Intimate space for special occasions"
    },
    {
      id: 4,
      category: "food",
      title: "Antipasti Platter",
      description: "Fresh Italian appetizers"
    },
    {
      id: 5,
      category: "events",
      title: "Wine Tasting",
      description: "Exclusive wine pairing events"
    },
    {
      id: 6,
      category: "interior",
      title: "Bar Area",
      description: "Cozy bar for pre-dinner drinks"
    },
    {
      id: 7,
      category: "food",
      title: "Dessert Selection",
      description: "Traditional Italian sweets"
    },
    {
      id: 8,
      category: "events",
      title: "Private Event",
      description: "Corporate dinner setup"
    },
    {
      id: 9,
      category: "interior",
      title: "Restaurant Exterior",
      description: "Beautiful facade at sunset"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0 bg-gray-900">
          {/* Placeholder for hero image */}
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-white text-xl">Gallery Hero Image</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative h-full flex items-center">
          <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
            <div className="text-center">
              <h1 className="font-bold text-white mb-4">
                Gallery
              </h1>
              <p className="text-xl text-white">
                Experience the ambiance and flavors of La Nuova Isola
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
              All
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors">
              Interior
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors">
              Food
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors">
              Events
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div key={image.id} className="group relative overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-12">
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-600">{image.title}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-white text-sm px-4">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-20 bg-white">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Virtual Tour</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a virtual walkthrough of our restaurant and experience the ambiance before you visit
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">Virtual Tour Embed</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore Our Space</h3>
              <p className="text-gray-600 mb-6">
                Step inside La Nuova Isola through our immersive virtual tour. Experience the warm, 
                inviting atmosphere of our dining rooms, the elegant private event spaces, and the 
                bustling energy of our open kitchen.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">360° Views</h4>
                    <p className="text-gray-600">Navigate through every corner of our restaurant</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Interactive Hotspots</h4>
                    <p className="text-gray-600">Click on areas to learn more about our features</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Mobile Friendly</h4>
                    <p className="text-gray-600">Experience the tour on any device</p>
                  </div>
                </div>
              </div>
              <button className="mt-8 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Start Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what's happening at La Nuova Isola through our social media channels
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Instagram Post {item}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="#" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              Follow us on Instagram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
