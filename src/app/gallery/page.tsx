import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
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
      src: "/gallery/Isola_06-scaled.jpg.jpeg",
      category: "interior",
      title: "Restaurant Interior",
      description: "Elegant dining atmosphere"
    },
    {
      id: 2,
      src: "/gallery/Isola_01-scaled.jpg.jpeg",
      category: "interior",
      title: "Main Dining Area",
      description: "Spacious and welcoming"
    },
    {
      id: 3,
      src: "/gallery/Isola_02-scaled.jpg.jpeg",
      category: "interior",
      title: "Restaurant View",
      description: "Modern Italian decor"
    },
    {
      id: 4,
      src: "/gallery/Isola_03-scaled.jpg.jpeg",
      category: "interior",
      title: "Dining Room",
      description: "Comfortable seating area"
    },
    {
      id: 5,
      src: "/gallery/Isola_04-scaled.jpg.jpeg",
      category: "interior",
      title: "Restaurant Space",
      description: "Warm and inviting"
    },
    {
      id: 6,
      src: "/gallery/Isola_05-scaled.jpg.jpeg",
      category: "interior",
      title: "Interior Design",
      description: "Contemporary Italian style"
    },
    {
      id: 7,
      src: "/gallery/Isola_07-scaled.jpg.jpeg",
      category: "interior",
      title: "Dining Area",
      description: "Elegant table setting"
    },
    {
      id: 8,
      src: "/gallery/Isola_08-scaled.jpg.jpeg",
      category: "interior",
      title: "Restaurant Ambiance",
      description: "Sophisticated atmosphere"
    },
    {
      id: 9,
      src: "/gallery/Isola_09-scaled.jpg.jpeg",
      category: "interior",
      title: "Main Room",
      description: "Spacious dining hall"
    },
    {
      id: 10,
      src: "/gallery/Isola_11-scaled.jpg.jpeg",
      category: "interior",
      title: "Restaurant View",
      description: "Modern Italian restaurant"
    },
    {
      id: 11,
      src: "/gallery/Isola_12-scaled.jpg.jpeg",
      category: "interior",
      title: "Dining Space",
      description: "Comfortable and stylish"
    },
    {
      id: 12,
      src: "/gallery/Isola_13-scaled.jpg.jpeg",
      category: "interior",
      title: "Interior",
      description: "Warm lighting and decor"
    },
    {
      id: 13,
      src: "/gallery/Isola_14-scaled.jpg.jpeg",
      category: "interior",
      title: "Restaurant",
      description: "Authentic Italian setting"
    },
    {
      id: 14,
      src: "/gallery/Isola_15-scaled.jpg.jpeg",
      category: "interior",
      title: "Dining Area",
      description: "Elegant restaurant space"
    },
    {
      id: 15,
      src: "/gallery/Isola_16-scaled.jpg.jpeg",
      category: "interior",
      title: "Restaurant Interior",
      description: "Modern Italian design"
    },
    {
      id: 16,
      src: "/gallery/Isola_17-scaled.jpg.jpeg",
      category: "interior",
      title: "Dining Room",
      description: "Sophisticated atmosphere"
    },
    {
      id: 17,
      src: "/gallery/Isola_18-scaled.jpg.jpeg",
      category: "interior",
      title: "Restaurant Space",
      description: "Comfortable dining"
    },
    {
      id: 18,
      src: "/gallery/Isola_19-scaled.jpg.jpeg",
      category: "interior",
      title: "Interior Design",
      description: "Contemporary style"
    },
    {
      id: 19,
      src: "/gallery/Isola_20-scaled.jpg.jpeg",
      category: "interior",
      title: "Dining Area",
      description: "Modern Italian restaurant"
    },
    {
      id: 20,
      src: "/gallery/Isola_21-scaled.jpg.jpeg",
      category: "interior",
      title: "Restaurant",
      description: "Elegant and welcoming"
    },
    {
      id: 21,
      src: "/gallery/Isola_22-scaled.jpg.jpeg",
      category: "interior",
      title: "Main Dining",
      description: "Spacious and comfortable"
    },
    {
      id: 22,
      src: "/gallery/Isola_23-scaled.jpg.jpeg",
      category: "interior",
      title: "Restaurant View",
      description: "Modern Italian decor"
    },
    {
      id: 23,
      src: "/gallery/Isola_24-scaled.jpg.jpeg",
      category: "interior",
      title: "Dining Space",
      description: "Warm and inviting"
    },
    {
      id: 24,
      src: "/gallery/Isola_25-scaled.jpg.jpeg",
      category: "interior",
      title: "Interior",
      description: "Sophisticated dining"
    },
    {
      id: 25,
      src: "/gallery/Isola_26-scaled.jpg.jpeg",
      category: "interior",
      title: "Restaurant Area",
      description: "Modern Italian style"
    },
    {
      id: 26,
      src: "/gallery/Isola_27-scaled.jpg.jpeg",
      category: "interior",
      title: "Dining Room",
      description: "Comfortable and elegant"
    },
    {
      id: 27,
      src: "/gallery/Isola_28-scaled.jpg.jpeg",
      category: "interior",
      title: "Restaurant Interior",
      description: "Contemporary design"
    },
    {
      id: 28,
      src: "/gallery/Isola_29-scaled.jpg.jpeg",
      category: "interior",
      title: "Dining Area",
      description: "Modern and stylish"
    },
    {
      id: 29,
      src: "/gallery/Isola_30-scaled.jpg.jpeg",
      category: "interior",
      title: "Restaurant Space",
      description: "Elegant atmosphere"
    },
    {
      id: 30,
      src: "/gallery/Isola_31-scaled.jpg.jpeg",
      category: "interior",
      title: "Interior Design",
      description: "Contemporary Italian"
    },
    {
      id: 31,
      src: "/gallery/Isola_32-scaled.jpg.jpeg",
      category: "interior",
      title: "Dining Room",
      description: "Modern and comfortable"
    },
    {
      id: 32,
      src: "/gallery/Isola_33-scaled.jpg.jpeg",
      category: "interior",
      title: "Restaurant",
      description: "Sophisticated dining"
    },
    {
      id: 33,
      src: "/gallery/Isola_34-scaled.jpg.jpeg",
      category: "interior",
      title: "Dining Area",
      description: "Elegant and modern"
    },
    {
      id: 34,
      src: "/gallery/Isola_35-scaled.jpg.jpeg",
      category: "interior",
      title: "Interior",
      description: "Contemporary Italian style"
    },
    {
      id: 35,
      src: "/gallery/Isola_36-scaled.jpg.jpeg",
      category: "interior",
      title: "Restaurant Space",
      description: "Modern and inviting"
    },
    {
      id: 36,
      src: "/gallery/Isola_37-scaled.jpg.jpeg",
      category: "interior",
      title: "Dining Room",
      description: "Comfortable and stylish"
    },
    {
      id: 37,
      src: "/gallery/Isola_38-scaled.jpg.jpeg",
      category: "interior",
      title: "Restaurant Interior",
      description: "Elegant atmosphere"
    },
    {
      id: 38,
      src: "/gallery/Isola_39-scaled.jpg.jpeg",
      category: "interior",
      title: "Dining Area",
      description: "Modern Italian design"
    },
    {
      id: 39,
      src: "/gallery/Isola_40-scaled.jpg.jpeg",
      category: "interior",
      title: "Restaurant",
      description: "Sophisticated and welcoming"
    },
    {
      id: 40,
      src: "/gallery/Isola_41-scaled.jpg.jpeg",
      category: "interior",
      title: "Interior Space",
      description: "Contemporary dining"
    },
    {
      id: 41,
      src: "/gallery/WhatsApp-Image-2025-03-25-at-16.17.33_0f04fbac.jpg.jpeg",
      category: "events",
      title: "Restaurant Event",
      description: "Special occasion setup"
    },
    {
      id: 42,
      src: "/gallery/WhatsApp-Image-2025-03-25-at-16.17.33_7e3cb458.jpg.jpeg",
      category: "events",
      title: "Event Space",
      description: "Private dining event"
    },
    {
      id: 43,
      src: "/gallery/WhatsApp-Image-2025-03-25-at-16.17.33_92d37b01.jpg.jpeg",
      category: "events",
      title: "Celebration",
      description: "Special event setup"
    },
    {
      id: 44,
      src: "/gallery/WhatsApp-Image-2025-03-25-at-16.17.33_b8afc200.jpg.jpeg",
      category: "events",
      title: "Gathering",
      description: "Group dining event"
    },
    {
      id: 45,
      src: "/gallery/WhatsApp-Image-2025-03-25-at-16.17.33_d7830242.jpg.jpeg",
      category: "events",
      title: "Restaurant Function",
      description: "Event setup"
    },
    {
      id: 46,
      src: "/gallery/WhatsApp-Image-2025-03-25-at-16.17.33_e7d097ce.jpg.jpeg",
      category: "events",
      title: "Private Event",
      description: "Exclusive dining"
    },
    {
      id: 47,
      src: "/gallery/WhatsApp-Image-2025-03-25-at-16.17.33_e22fbc5c.jpg.jpeg",
      category: "events",
      title: "Special Event",
      description: "Event arrangement"
    },
    {
      id: 48,
      src: "/gallery/WhatsApp-Image-2025-03-25-at-16.17.33_e44a8a8c.jpg.jpeg",
      category: "events",
      title: "Restaurant Party",
      description: "Celebration setup"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden">
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

      
      
      
      
      <Footer />
    </div>
  );
}
