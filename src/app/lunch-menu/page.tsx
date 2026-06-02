import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lunch Menu | Italian Midday Dining | La Nuova Isola | Restaurant Isle of Man",
  description: "Enjoy authentic Italian lunch at La Nuova Isola, Isle of Man. Fresh pasta, light starters, main courses, and desserts perfect for business lunches or casual midday dining. Great value set menus available.",
  keywords: [
    "lunch menu Isle of Man", 
    "Italian lunch Douglas", 
    "business lunch restaurant", 
    "midday dining Isle of Man", 
    "pasta lunch special", 
    "Italian restaurant lunch", 
    "La Nuova Isola lunch",
    "casual dining Isle of Man",
    "set menu lunch",
    "affordable Italian lunch"
  ],
  authors: [{ name: "La Nuova Isola Restaurant" }],
  creator: "La Nuova Isola",
  publisher: "La Nuova Isola",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lanuovaisola.im'),
  alternates: {
    canonical: 'https://lanuovaisola.im/lunch-menu',
  },
  openGraph: {
    title: "Lunch Menu | Italian Midday Dining | La Nuova Isola",
    description: "Discover our authentic Italian lunch menu with fresh pasta, light starters, and delicious mains perfect for business lunches or casual dining in Isle of Man.",
    url: 'https://lanuovaisola.im/lunch-menu',
    sitesiteName: 'La Nuova Isola',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/og-image-lunch-menu.jpg',
        width: 1200,
        height: 630,
        alt: 'La Nuova Isola Lunch Menu - Authentic Italian Midday Dining',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lunch Menu | La Nuova Isola | Italian Restaurant Isle of Man",
    description: "Authentic Italian lunch menu with fresh pasta, light starters and delicious mains. Perfect for business lunches and casual dining.",
    images: ['/og-image-lunch-menu.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function LunchMenu() {
  return (
    <>
      <StructuredData type="Restaurant" />
      <div className="min-h-screen bg-white">
        <Header />

      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
        <Image 
          src="/homepage-slider/Isola_13-scaled.jpg" 
          alt="Restaurant background"
          fill
          style={{
            objectFit: 'cover',
            zIndex: 0
          }}
          priority={false}
          loading="lazy"
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>
        <header className="relative h-full flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="text-center px-4 sm:px-6 md:px-8">
            <FadeIn>
              <h1 className="font-bold text-white mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl">
                Lunch Menu
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-white">
                Authentic Italian cuisine perfect for your midday dining experience
              </p>
            </FadeIn>
          </div>
        </header>
      </section>

      {/* Starters Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-lg md:text-xl lg:text-2xl">Starters (First Course Dishes)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Classic Bruschetta <span className="text-gray-600" style={{fontSize: '24px'}}>(V)</span> — <span style={{fontSize: '26px', color: '#7A2325'}}>£8</span></h3>
                <p className="text-sm text-gray-700">Toasted bread topped with fresh tomatoes, red onion, garlic, basil and drizzled with olive oil</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Aubergine alla Parmigiana <span className="text-gray-600" style={{fontSize: '24px'}}>(V)</span> — <span style={{fontSize: '26px', color: '#7A2325'}}>£10</span></h3>
                <p className="text-sm text-gray-700">Layers of baked aubergine with tomato, basil and melted mozzarella cheese</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Garlic King Prawns <span className="text-gray-600" style={{fontSize: '24px'}}>(GF)</span> — <span style={{fontSize: '26px', color: '#7A2325'}}>£10</span></h3>
                <p className="text-sm text-gray-700">Succulent king prawns in a spicy tomato sauce with rocket leaves and toasted bread</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Meatballs Arrabbiata — <span style={{fontSize: '26px', color: '#7A2325'}}>£9</span></h3>
                <p className="text-sm text-gray-700">Homemade Roman-style meatballs in a chilli garlic tomato sauce with rocket leaves and toasted bread</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Minestrone Soup <span className="text-gray-600" style={{fontSize: '24px'}}>(V)</span> — <span style={{fontSize: '26px', color: '#7A2325'}}>£8</span></h3>
                <p className="text-sm text-gray-700">Traditional Italian vegetable soup with seasonal vegetables and herbs</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Cozze Alla Romana — <span style={{fontSize: '26px', color: '#7A2325'}}>£10</span></h3>
                <p className="text-sm text-gray-700">Fresh mussels cooked in white wine with garlic, chilli, parsley and pecorino sauce, served with toasted bread</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pasta & Gnocchi Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-lg md:text-xl lg:text-2xl">Pasta & Gnocchi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Penne all'Amatriciana — <span style={{fontSize: '26px', color: '#7A2325'}}>£16</span></h3>
                <p className="text-sm text-gray-700">Penne pasta with guanciale (cured pork cheek), tomato sauce, pecorino romano and chilli</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Rigatoni Carbonara — <span style={{fontSize: '26px', color: '#7A2325'}}>£16</span></h3>
                <p className="text-sm text-gray-700">Classic Roman carbonara with rigatoni, guanciale, pecorino cheese, egg and black pepper</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Tagliatelle Bolognese — <span style={{fontSize: '26px', color: '#7A2325'}}>£16</span></h3>
                <p className="text-sm text-gray-700">Fresh tagliatelle with rich meat ragù, tomato, herbs and garlic</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Lasagne al Forno — <span style={{fontSize: '26px', color: '#7A2325'}}>£16</span></h3>
                <p className="text-sm text-gray-700">Traditional oven-baked lasagne with beef & tomato ragù, béchamel sauce and cheese</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Tortellini alla Panna <span className="text-gray-600" style={{fontSize: '24px'}}>(V)</span> — <span style={{fontSize: '26px', color: '#7A2325'}}>£16</span></h3>
                <p className="text-sm text-gray-700">Ricotta & spinach tortellini in a creamy sauce with sage and pecorino cheese</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Gnocchi Isola <span className="text-gray-600" style={{fontSize: '24px'}}>(Vegan)</span> — <span style={{fontSize: '26px', color: '#7A2325'}}>£16</span></h3>
                <p className="text-sm text-gray-700">Homemade gnocchi with tomato & basil sauce and fried aubergine</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Spaghetti alla Puttanesca — <span style={{fontSize: '26px', color: '#7A2325'}}>£16</span></h3>
                <p className="text-sm text-gray-700">Spaghetti with tomato passata, olives, anchovy, chilli and capers</p>
              </div>
            </div>
            
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Gluten-Free Option:</strong> Gluten-free pasta available - £1.50 supplement
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Courses Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-lg md:text-xl lg:text-2xl">Main Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Chicken alla Milanese — <span style={{fontSize: '26px', color: '#7A2325'}}>£16</span></h3>
                <p className="text-sm text-gray-700">Breadcrumbed chicken escalope, pan fried and served with chips and salad</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Mixed Vegetable Omelette — <span style={{fontSize: '26px', color: '#7A2325'}}>£16</span></h3>
                <p className="text-sm text-gray-700">Fresh vegetable omelette served with chips and salad</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Deep Fried Calamari — <span style={{fontSize: '26px', color: '#7A2325'}}>£16</span></h3>
                <p className="text-sm text-gray-700">Crispy deep fried calamari served with chips and salad</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Swordfish alla Milanese — <span style={{fontSize: '26px', color: '#7A2325'}}>£25</span></h3>
                <p className="text-sm text-gray-700">Fresh swordfish with lemon caper butter sauce, garlic rosemary potatoes and salad</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Sirloin Steak alla Toscana <span className="text-gray-600" style={{fontSize: '24px'}}>(GF)</span> — <span style={{fontSize: '26px', color: '#7A2325'}}>£30</span></h3>
                <p className="text-sm text-gray-700">Sliced sirloin steak with rocket salad, sautéed baby tomatoes, garlic, chilli, rosemary, pecorino cheese and fries</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Desserts Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-lg md:text-xl lg:text-2xl">Desserts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Pannacotta Chocolate & Amaretto — <span style={{fontSize: '26px', color: '#7A2325'}}>£8</span></h3>
                <p className="text-sm text-gray-700">Creamy pannacotta infused with rich chocolate and amaretto flavors</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Tiramisu — <span style={{fontSize: '26px', color: '#7A2325'}}>£8</span></h3>
                <p className="text-sm text-gray-700">Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Mango & Coconut Semifreddo — <span style={{fontSize: '26px', color: '#7A2325'}}>£8</span></h3>
                <p className="text-sm text-gray-700">Light and refreshing frozen dessert with tropical mango and coconut</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Lemon Crème Brûlée — <span style={{fontSize: '26px', color: '#7A2325'}}>£8</span></h3>
                <p className="text-sm text-gray-700">Silky custard with caramelized sugar topping and fresh lemon flavor</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Ice Cream Affogato — <span style={{fontSize: '26px', color: '#7A2325'}}>£8</span></h3>
                <p className="text-sm text-gray-700">Vanilla ice cream drowned in hot espresso with a splash of coffee liqueur</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Manx Ice Cream Selection — <span style={{fontSize: '26px', color: '#7A2325'}}>£5</span></h3>
                <p className="text-sm text-gray-700 mb-2">Choose 3 scoops of our local Manx ice cream: vanilla, strawberry, chocolate, or salted caramel</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Side Orders Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-lg md:text-xl lg:text-2xl">Side Orders</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-[#7A2325] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Item</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Marinated olives, feta & basil pesto</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Tomato, basil & red onion salad</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Rocket & Pecorino salad</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Rocket, Gorgonzola & grape salad</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£8</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Mixed / green salad</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Homemade bread with olive oil & balsamic dip</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£4</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Small garlic bread & chilli tomato dip</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£7</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Small garlic bread with olive oil & rosemary</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£7</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Chips</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£4</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Truffle Sicilian sea salt fries</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Pecorino black pepper fries</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Spicy chilli tomato sauce</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£1.50</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Fried zucchini</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Peas & pancetta</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Broccoli, garlic & chilli</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Sautéed garlic spinach</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Drinks Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-lg md:text-xl lg:text-2xl">Drinks</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-50 rounded-lg overflow-hidden">
                <thead className="bg-[#7A2325] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Drink</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Small Prosecco (200ml)</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£8.50</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Fruit juices</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">From £3.75</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Tonic water</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">From £1.50</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Mixers / cordials</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£1</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Mineral water (small)</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£3</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Mineral water (large)</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">House bottled lager</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£4.50</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Italian bottled lager</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£4.50</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Other beers / ales / cider</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">From £6</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Spirits / liqueurs / vermouths</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">From £4.50</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Port</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">From £5</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Dessert wine (175ml)</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£7</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Zero % lager</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£4.50</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Zero % IPA</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5.50</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Zero % wine (175ml)</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£6.50</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Zero % sparkling wine (175ml)</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£7</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Liqueur coffees</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">From £7</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Coffee & tea selection</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">From £3.75</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Notes Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-lg md:text-xl lg:text-2xl">Notes</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Specials</h3>
                <p className="text-gray-700">Please ask your server for daily specials.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Service Charge</h3>
                <p className="text-gray-700">A discretionary service charge will be added to your bill.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Allergies</h3>
                <p className="text-gray-700 mb-2">Please inform your server of any allergies or intolerances before ordering.</p>
                <p className="text-gray-700 mb-2">Not all ingredients are listed.</p>
                <p className="text-gray-700">The restaurant cannot guarantee the complete absence of allergens.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PDF Download Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-bold text-gray-900 mb-6 text-xl md:text-2xl lg:text-3xl">Download Our Menu</h2>
              <p className="text-gray-600 mb-8 text-base md:text-lg">Take our lunch menu with you or view it offline</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/menu/Isola Lunch Menu.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#7A2325] hover:bg-[#5a1a1c] text-white font-medium rounded-lg transition-colors shadow-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Menu PDF
                </a>
                <a 
                  href="/menu/Isola Lunch Menu.pdf" 
                  download="Isola Lunch Menu.pdf"
                  className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-[#7A2325] font-medium rounded-lg transition-colors border border-[#7A2325] shadow-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Menu
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
