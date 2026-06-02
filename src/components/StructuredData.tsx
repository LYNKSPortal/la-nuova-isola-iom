interface StructuredDataProps {
  type: 'Restaurant' | 'Menu';
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const restaurantData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "La Nuova Isola",
    "description": "Authentic Italian restaurant in the Isle of Man offering fine dining, lunch, and extensive drinks menu",
    "url": "https://lanuovaisola.im",
    "telephone": "+44 1624 678900",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2 North Quay",
      "addressLocality": "Douglas",
      "addressRegion": "Isle of Man",
      "postalCode": "IM1 4LE",
      "addressCountry": "IM"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "54.1516",
      "longitude": "-4.4821"
    },
    "openingHours": [
      "Mo-Su 12:00-14:30",
      "Mo-Su 18:00-22:00"
    ],
    "servesCuisine": "Italian",
    "priceRange": "£££",
    "acceptsReservations": "true",
    "menu": "https://lanuovaisola.im/lunch-menu",
    "hasMenu": [
      {
        "@type": "Menu",
        "name": "Lunch Menu",
        "url": "https://lanuovaisola.im/lunch-menu"
      },
      {
        "@type": "Menu", 
        "name": "Evening Menu",
        "url": "https://lanuovaisola.im/evening-menu"
      },
      {
        "@type": "Menu",
        "name": "Drinks Menu", 
        "url": "https://lanuovaisola.im/drinks-menu"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "150"
    },
    "sameAs": [
      "https://www.facebook.com/LaNuovaIsola",
      "https://www.instagram.com/lanuvaisola"
    ]
  };

  const menuData = data || {};

  const structuredData = type === 'Restaurant' ? restaurantData : menuData;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}
