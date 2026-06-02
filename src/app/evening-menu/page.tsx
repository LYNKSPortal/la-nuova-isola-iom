import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Evening Menu - La Nuova Isola | Italian Restaurant Isle of Man",
  description: "Explore La Nuova Isola's exquisite evening menu featuring authentic Italian cuisine, from fresh pasta to premium wines. Perfect for fine dining in the Isle of Man.",
  keywords: ["evening menu", "Italian dinner", "fine dining", "Isle of Man restaurant", "La Nuova Isola", "Italian cuisine", "pasta", "wine list"],
  openGraph: {
    title: "Evening Menu - La Nuova Isola",
    description: "Discover our authentic Italian evening menu with fresh pasta, premium meats, and extensive wine selection.",
    url: "https://lanuovaisola.im/evening-menu",
  },
};

export default function EveningMenu() {
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
                Isola / La Nuova Evening Menu
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-white">
                Authentic Italian cuisine crafted with passion and tradition
              </p>
            </FadeIn>
          </div>
        </header>
      </section>

      {/* Offers Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="font-bold text-gray-900 mb-4 text-xl md:text-2xl lg:text-3xl">Offer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-2">2 Courses</h3>
                <p className="text-2xl font-bold text-[#7A2325]">£35</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-2">3 Courses</h3>
                <p className="text-2xl font-bold text-[#7A2325]">£39</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Starters Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-xl md:text-2xl lg:text-3xl">Starters (First Course Dishes)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Isola Bruschetta Caprese <span className="text-sm text-gray-600">(V)</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Classic tomato</li>
                  <li>• Red onion</li>
                  <li>• Garlic</li>
                  <li>• Basil</li>
                  <li>• Olive oil</li>
                  <li>• Buffalo mozzarella</li>
                  <li>• Rocket</li>
                  <li>• Balsamic pearls</li>
                  <li>• Basil pesto</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Pate Della Casa</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Toasted bread</li>
                  <li>• Chicken liver, mushroom & truffle pâté</li>
                  <li>• Onion and fig chutney</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Garlic King Prawns & Queenies</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• King prawns</li>
                  <li>• Queenies</li>
                  <li>• Spicy 'Nduja tomato sauce</li>
                  <li>• Rocket</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Portobello Milanese <span className="text-sm text-gray-600">(V)</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Breadcrumbed mushroom slices</li>
                  <li>• Creamy cheese sauce</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Meatballs Arrabbiata</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Homemade Roman-style meatballs</li>
                  <li>• Chilli garlic tomato sauce</li>
                  <li>• Rocket leaves</li>
                  <li>• Toasted bread</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Crostino dello Chef</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Toasted bread</li>
                  <li>• Cured ham</li>
                  <li>• Mostarda</li>
                  <li>• Goat cheese stout cream</li>
                  <li>• Agave nectar</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pasta, Gnocchi & Risotto Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-xl md:text-2xl lg:text-3xl">Pasta, Gnocchi & Risotto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Tagliatelle Ai Gamberoni</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ribbon pasta</li>
                  <li>• Zucchini Cacio e Pepe cream</li>
                  <li>• Lime zest</li>
                  <li>• King prawns</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Gnocchi Alfredo <span className="text-sm text-gray-600">(V) (GF)</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Baked gnocchi</li>
                  <li>• Spinach</li>
                  <li>• Italian cheese & butter sauce</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Penne 'Nduja & Gorgonzola</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Spicy Calabrian pork sausage</li>
                  <li>• Gorgonzola sauce</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Spaghetti Carbonara</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Guanciale</li>
                  <li>• Pecorino cream</li>
                  <li>• Egg</li>
                  <li>• Black pepper</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Rigatoni Sugo di Coda <span className="text-xs text-gray-600">(Oxtail Ragù)</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Slow-braised oxtail</li>
                  <li>• Tomato sauce</li>
                  <li>• Vegetables</li>
                  <li>• Wine</li>
                  <li>• Herbs</li>
                  <li>• Hint of cacao</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Mezze Maniche Gricia al Porto</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Short pasta tubes</li>
                  <li>• Crispy guanciale</li>
                  <li>• Port wine reduction</li>
                  <li>• Black pepper</li>
                  <li>• Pecorino cheese</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Black Ravioli Queenies</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Queenie-filled ravioli</li>
                  <li>• Spring onion</li>
                  <li>• Guanciale</li>
                  <li>• Pecorino</li>
                  <li>• Cream</li>
                  <li>• Garlic</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Linguine allo Scoglio</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Mixed seafood</li>
                  <li>• White wine</li>
                  <li>• Garlic</li>
                  <li>• Spicy tomato sauce</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Risotto ai Funghi e Tartufi <span className="text-sm text-gray-600">(V)</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Arborio rice</li>
                  <li>• Wild mushrooms</li>
                  <li>• Truffle cream</li>
                  <li>• Prosecco</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Gluten-Free Option:</strong> Gluten-free pasta and gnocchi available - £1.50 supplement
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Courses Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-xl md:text-2xl lg:text-3xl">Main Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Chicken Milanese Al Valdostana</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Breadcrumbed chicken escalope</li>
                  <li>• Ham</li>
                  <li>• Mozzarella</li>
                  <li>• Garlic butter</li>
                  <li>• Gnocchi Bolognese</li>
                  <li>• Parmesan</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Braised Lamb Spezzatino Abruzzo Style <span className="text-sm text-gray-600">(GF)</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Slow-cooked lamb</li>
                  <li>• Mint</li>
                  <li>• Tomato</li>
                  <li>• Lamb stock</li>
                  <li>• Pecorino</li>
                  <li>• Garlic rosemary potatoes</li>
                  <li>• Salad</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Sicilian Stuffed Peppers <span className="text-sm text-gray-600">(V)</span></h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Roasted red pepper</li>
                  <li>• Sicilian caponata</li>
                  <li>• Breadcrumbs</li>
                  <li>• Italian cheese</li>
                  <li>• Tomato passata</li>
                  <li>• Garlic rosemary potatoes</li>
                  <li>• Salad</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Roman Style Meatballs</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Meatballs</li>
                  <li>• Peppercorn cream sauce</li>
                  <li>• Garlic rosemary potatoes</li>
                  <li>• Salad</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Cioppino</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Seafood & fish stew</li>
                  <li>• Tomato</li>
                  <li>• Garlic</li>
                  <li>• Herbs</li>
                  <li>• White wine</li>
                  <li>• Chilli</li>
                  <li>• Toasted bread</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Spezzatino di Maiale e Salsiccia</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pork stew</li>
                  <li>• Sausage</li>
                  <li>• White wine sauce</li>
                  <li>• Black olives</li>
                  <li>• Herbs</li>
                  <li>• Parmesan mash</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Braised Beef Al Vino Rosso</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Slow-cooked rump steak</li>
                  <li>• Red wine</li>
                  <li>• Onion</li>
                  <li>• Garlic</li>
                  <li>• Root vegetables</li>
                  <li>• Aromatic herbs</li>
                  <li>• Parmesan butter mash</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Desserts Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-xl md:text-2xl lg:text-3xl">Desserts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Mini Liqueur Coffee</h3>
                <p className="text-sm text-gray-700 mb-2">Choose:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Whiskey</li>
                  <li>• Irish cream</li>
                  <li>• Coffee liqueur</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Pannacotta with Forest Fruits <span className="text-sm text-gray-600">(GF)</span></h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Tiramisu</h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Mango & Coconut Semifreddo <span className="text-sm text-gray-600">(GF)</span></h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Lemon Crème Brûlée <span className="text-sm text-gray-600">(GF)</span></h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Ice Cream Affogato</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ice cream</li>
                  <li>• Espresso</li>
                  <li>• Coffee liqueur</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Chocolate Cake & Pistachio Custard <span className="text-sm text-gray-600">(GF)</span></h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Manx Ice Cream Selection</h3>
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
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-xl md:text-2xl lg:text-3xl">Side Orders</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-50 rounded-lg overflow-hidden">
                <thead className="bg-[#7A2325] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Item</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Marinated olives, feta & basil pesto</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Tomato, basil & red onion salad</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Rocket & Pecorino salad</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Rocket, Gorgonzola & grape salad</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£8</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Mixed / green salad</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£4</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Bread basket with olive oil & balsamic</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£3</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Garlic bread & chilli tomato dip</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£7 / £9</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Garlic bread with olive oil & rosemary</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£7 / £9</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Chips</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£4</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Truffle Sicilian sea salt fries</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£4.50</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Spicy chilli tomato sauce</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£1.50</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Fried zucchini</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Peas & pancetta</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Broccoli, garlic & chilli</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm text-gray-900">Sautéed garlic spinach</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">£5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
