import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lunch Menu - La Nuova Isola | Italian Restaurant Isle of Man",
  description: "Explore La Nuova Isola's delicious lunch menu featuring authentic Italian starters, pasta, main courses, and desserts. Perfect for midday dining in the Isle of Man.",
  keywords: ["lunch menu", "Italian lunch", "midday dining", "Isle of Man restaurant", "La Nuova Isola", "pasta lunch", "Italian cuisine"],
  openGraph: {
    title: "Lunch Menu - La Nuova Isola",
    description: "Discover our authentic Italian lunch menu with fresh pasta, delicious mains, and tempting desserts.",
    url: "https://lanuovaisola.im/lunch-menu",
  },
};

export default function LunchMenu() {
  return (
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
                Isola Lunch Menu
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
            <h2 className="font-bold text-gray-900 mb-8 text-center text-xl md:text-2xl lg:text-3xl">Starters (First Course Dishes)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Classic Bruschetta <span className="text-sm text-gray-600">(V)</span> — <span className="text-[#7A2325]">£8</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Tomato</li>
                  <li>• Red onion</li>
                  <li>• Garlic</li>
                  <li>• Basil</li>
                  <li>• Olive oil</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Aubergine alla Parmigiana <span className="text-sm text-gray-600">(V)</span> — <span className="text-[#7A2325]">£10</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Baked aubergine</li>
                  <li>• Tomato</li>
                  <li>• Basil</li>
                  <li>• Mozzarella</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Garlic King Prawns <span className="text-sm text-gray-600">(GF)</span> — <span className="text-[#7A2325]">£10</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• King prawns</li>
                  <li>• Spicy tomato sauce</li>
                  <li>• Rocket leaves</li>
                  <li>• Toasted bread</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Meatballs Arrabbiata — <span className="text-[#7A2325]">£9</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Homemade Roman-style meatballs</li>
                  <li>• Chilli garlic tomato sauce</li>
                  <li>• Rocket leaves</li>
                  <li>• Toasted bread</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Minestrone Soup <span className="text-sm text-gray-600">(V)</span> — <span className="text-[#7A2325]">£8</span></h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Cozze Alla Romana — <span className="text-[#7A2325]">£10</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Mussels</li>
                  <li>• White wine</li>
                  <li>• Garlic</li>
                  <li>• Chilli</li>
                  <li>• Parsley</li>
                  <li>• Pecorino sauce</li>
                  <li>• Toasted bread</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pasta & Gnocchi Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-xl md:text-2xl lg:text-3xl">Pasta & Gnocchi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Penne all'Amatriciana — <span className="text-[#7A2325]">£16</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Guanciale (cured pork cheek)</li>
                  <li>• Tomato sauce</li>
                  <li>• Pecorino Romano</li>
                  <li>• Chilli</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Rigatoni Carbonara — <span className="text-[#7A2325]">£16</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Guanciale</li>
                  <li>• Pecorino cheese</li>
                  <li>• Egg</li>
                  <li>• Black pepper</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Tagliatelle Bolognese — <span className="text-[#7A2325]">£16</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Meat ragù</li>
                  <li>• Tomato</li>
                  <li>• Herbs</li>
                  <li>• Garlic</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Lasagne al Forno — <span className="text-[#7A2325]">£16</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Beef & tomato ragù</li>
                  <li>• Béchamel sauce</li>
                  <li>• Cheese</li>
                  <li>• Oven baked</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Tortellini alla Panna <span className="text-sm text-gray-600">(V)</span> — <span className="text-[#7A2325]">£16</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ricotta & spinach tortellini</li>
                  <li>• Cream sauce</li>
                  <li>• Sage</li>
                  <li>• Pecorino cheese</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Gnocchi Isola <span className="text-sm text-gray-600">(Vegan)</span> — <span className="text-[#7A2325]">£16</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Homemade gnocchi</li>
                  <li>• Tomato & basil sauce</li>
                  <li>• Fried aubergine</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Spaghetti alla Puttanesca — <span className="text-[#7A2325]">£16</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Tomato passata</li>
                  <li>• Olives</li>
                  <li>• Anchovy</li>
                  <li>• Chilli</li>
                  <li>• Capers</li>
                </ul>
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
            <h2 className="font-bold text-gray-900 mb-8 text-center text-xl md:text-2xl lg:text-3xl">Main Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Chicken alla Milanese — <span className="text-[#7A2325]">£16</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Breadcrumbed chicken escalope</li>
                  <li>• Pan fried</li>
                  <li>• Chips</li>
                  <li>• Salad</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Mixed Vegetable Omelette — <span className="text-[#7A2325]">£16</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Chips</li>
                  <li>• Salad</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Deep Fried Calamari — <span className="text-[#7A2325]">£16</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Chips</li>
                  <li>• Salad</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Swordfish alla Milanese — <span className="text-[#7A2325]">£25</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Swordfish</li>
                  <li>• Lemon caper butter sauce</li>
                  <li>• Garlic rosemary potatoes</li>
                  <li>• Salad</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Sirloin Steak alla Toscana <span className="text-sm text-gray-600">(GF)</span> — <span className="text-[#7A2325]">£30</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Sliced sirloin steak</li>
                  <li>• Rocket salad</li>
                  <li>• Sautéed baby tomatoes</li>
                  <li>• Garlic</li>
                  <li>• Chilli</li>
                  <li>• Rosemary</li>
                  <li>• Pecorino cheese</li>
                  <li>• Fries</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Desserts Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-xl md:text-2xl lg:text-3xl">Desserts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Pannacotta Chocolate & Amaretto — <span className="text-[#7A2325]">£8</span></h3>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Tiramisu — <span className="text-[#7A2325]">£8</span></h3>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Mango & Coconut Semifreddo — <span className="text-[#7A2325]">£8</span></h3>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Lemon Crème Brûlée — <span className="text-[#7A2325]">£8</span></h3>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Ice Cream Affogato — <span className="text-[#7A2325]">£8</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Espresso</li>
                  <li>• Coffee liqueur</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Manx Ice Cream Selection — <span className="text-[#7A2325]">£5</span></h3>
                <p className="text-sm text-gray-700 mb-2">Choose 3 scoops:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Vanilla</li>
                  <li>• Strawberry</li>
                  <li>• Chocolate</li>
                  <li>• Salted caramel</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Side Orders Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-xl md:text-2xl lg:text-3xl">Side Orders</h2>
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
            <h2 className="font-bold text-gray-900 mb-8 text-center text-xl md:text-2xl lg:text-3xl">Drinks</h2>
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
            <h2 className="font-bold text-gray-900 mb-8 text-center text-xl md:text-2xl lg:text-3xl">Notes</h2>
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

      <Footer />
    </div>
  );
}
