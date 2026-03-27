import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Menu - La Nuova Isola | Italian Cuisine Isle of Man",
  description: "Explore La Nuova Isola's authentic Italian menu featuring traditional pasta, pizza, seafood, and desserts in the Isle of Man.",
  keywords: ["Italian menu", "authentic Italian cuisine", "pasta", "pizza", "Italian food", "Isle of Man restaurant"],
  openGraph: {
    title: "Our Menu - La Nuova Isola",
    description: "Explore La Nuova Isola's authentic Italian menu featuring traditional dishes.",
    url: "https://lanuovaisola.im/menu",
  },
};

export default function Menu() {
  const menuCategories = [
    {
      name: "Antipasti",
      description: "Start your meal with our traditional Italian appetizers",
      items: [
        {
          name: "Bruschetta Classica",
          description: "Toasted bread with fresh tomatoes, garlic, basil, and extra virgin olive oil",
          price: "$12"
        },
        {
          name: "Caprese Salad",
          description: "Fresh mozzarella, tomatoes, basil, drizzled with balsamic glaze",
          price: "$14"
        },
        {
          name: "Prosciutto e Melone",
          description: "Cured prosciutto with fresh cantaloupe",
          price: "$16"
        },
        {
          name: "Carpaccio di Manzo",
          description: "Thinly sliced raw beef with arugula, parmesan, and lemon dressing",
          price: "$18"
        }
      ]
    },
    {
      name: "Primi",
      description: "Traditional first courses featuring pasta and risotto",
      items: [
        {
          name: "Spaghetti Carbonara",
          description: "Roman classic with eggs, pecorino cheese, guanciale, and black pepper",
          price: "$22"
        },
        {
          name: "Risotto ai Funghi",
          description: "Creamy arborio rice with wild mushrooms and parmesan",
          price: "$24"
        },
        {
          name: "Linguine alle Vongole",
          description: "Linguine with fresh clams, garlic, white wine, and parsley",
          price: "$26"
        },
        {
          name: "Tortellini in Brodo",
          description: "Hand-made pasta filled with meat in clear broth",
          price: "$20"
        }
      ]
    },
    {
      name: "Secondi",
      description: "Main courses featuring meat, fish, and seafood",
      items: [
        {
          name: "Osso Buco",
          description: "Braised veal shanks with gremolata, served with risotto",
          price: "$38"
        },
        {
          name: "Branzino al Forno",
          description: "Whole baked sea bass with lemon, herbs, and olive oil",
          price: "$32"
        },
        {
          name: "Bistecca alla Fiorentina",
          description: "Grilled T-bone steak with rosemary potatoes",
          price: "$48"
        },
        {
          name: "Pollo alla Cacciatora",
          description: "Chicken braised with tomatoes, onions, and herbs",
          price: "$28"
        }
      ]
    },
    {
      name: "Dolci",
      description: "Traditional Italian desserts to complete your meal",
      items: [
        {
          name: "Tiramisù",
          description: "Coffee-soaked ladyfingers with mascarpone and cocoa",
          price: "$12"
        },
        {
          name: "Panna Cotta",
          description: "Vanilla bean custard with berry compote",
          price: "$10"
        },
        {
          name: "Cannoli Siciliani",
          description: "Crispy shells filled with sweet ricotta and chocolate chips",
          price: "$11"
        },
        {
          name: "Gelato Artigianale",
          description: "House-made gelato - choice of three flavors",
          price: "$9"
        }
      ]
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
            <span className="text-white text-xl">Menu Hero Image</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative h-full flex items-center">
          <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Menu
              </h1>
              <p className="text-xl text-white">
                Authentic Italian cuisine crafted with passion and tradition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 bg-white">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          {menuCategories.map((category, index) => (
            <div key={category.name} className={`${index > 0 ? 'mt-20' : ''}`}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item) => (
                  <div key={item.name} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                      <span className="text-xl font-bold text-red-600">{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wine Menu Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wine Selection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Carefully selected Italian wines to complement your meal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-full h-48 bg-gray-200 mb-4 flex items-center justify-center">
                <span className="text-gray-600">Red Wine</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Red Wines</h3>
              <p className="text-gray-600 mb-4">
                Chianti, Barolo, Brunello di Montalcino, and more
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Chianti Classico</span>
                  <span className="text-gray-900 font-medium">$48</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Barolo</span>
                  <span className="text-gray-900 font-medium">$85</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-full h-48 bg-gray-200 mb-4 flex items-center justify-center">
                <span className="text-gray-600">White Wine</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">White Wines</h3>
              <p className="text-gray-600 mb-4">
                Pinot Grigio, Sauvignon Blanc, and Italian whites
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Pinot Grigio</span>
                  <span className="text-gray-900 font-medium">$38</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Soave Classico</span>
                  <span className="text-gray-900 font-medium">$42</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-full h-48 bg-gray-200 mb-4 flex items-center justify-center">
                <span className="text-gray-600">Sparkling Wine</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sparkling Wines</h3>
              <p className="text-gray-600 mb-4">
                Prosecco, Franciacorta, and other Italian sparkling wines
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Prosecco</span>
                  <span className="text-gray-900 font-medium">$45</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Franciacorta</span>
                  <span className="text-gray-900 font-medium">$65</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Dietary Options */}
      <section className="py-20 bg-white">
        <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dietary Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We accommodate various dietary preferences and restrictions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vegetarian</h3>
              <p className="text-gray-600">
                Extensive vegetarian options available in all categories
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free</h3>
              <p className="text-gray-600">
                Gluten-free pasta and options available upon request
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vegan</h3>
              <p className="text-gray-600">
                Plant-based alternatives for many traditional dishes
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
