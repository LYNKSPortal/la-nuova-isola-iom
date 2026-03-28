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
      <section className="relative h-96 w-full">
        <div className="absolute inset-0 bg-gray-900">
          {/* Placeholder for hero image */}
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-white text-xl">Gallery Hero Image</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <header className="relative h-full flex items-center justify-center">
          <div className="text-center px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
            <h1 className="font-bold text-white mb-4">
              Gallery
            </h1>
            <p className="text-xl text-white">
              Experience the ambiance and flavors of La Nuova Isola
            </p>
          </div>
        </header>
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

      
      <Footer />
    </div>
  );
}
