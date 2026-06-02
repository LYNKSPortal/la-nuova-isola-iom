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
                Evening Menu
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
                <p className="text-2xl font-bold text-[#7A2325]">£35.00 - Per Person</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-2">3 Courses</h3>
                <p className="text-2xl font-bold text-[#7A2325]">£39.00 - Per Person</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Starters Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-lg md:text-xl lg:text-2xl">Starters (First Course Dishes)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Isola Bruschetta Caprese <span className="text-gray-600" style={{fontSize: '24px'}}>(V)</span></h3>
                <p className="text-sm text-gray-700">Classic tomato, red onion, garlic, basil, olive oil, buffalo mozzarella, rocket, balsamic pearls and basil pesto on toasted bread</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Pate Della Casa</h3>
                <p className="text-sm text-gray-700">Toasted bread served with chicken liver, mushroom & truffle pâté and onion and fig chutney</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Garlic King Prawns & Queenies</h3>
                <p className="text-sm text-gray-700">King prawns and queenies in a spicy 'Nduja tomato sauce with fresh rocket</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Portobello Milanese <span className="text-gray-600" style={{fontSize: '24px'}}>(V)</span></h3>
                <p className="text-sm text-gray-700">Breadcrumbed mushroom slices served with a creamy cheese sauce</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Meatballs Arrabbiata</h3>
                <p className="text-sm text-gray-700">Homemade Roman-style meatballs in a chilli garlic tomato sauce with rocket leaves and toasted bread</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Crostino dello Chef</h3>
                <p className="text-sm text-gray-700">Toasted bread topped with cured ham, mostarda, goat cheese stout cream and agave nectar</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pasta, Gnocchi & Risotto Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-lg md:text-xl lg:text-2xl">Pasta, Gnocchi & Risotto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Tagliatelle Ai Gamberoni</h3>
                <p className="text-sm text-gray-700">Ribbon pasta with zucchini cacio e pepe cream, lime zest and king prawns</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Gnocchi Alfredo <span className="text-gray-600" style={{fontSize: '24px'}}>(V) (GF)</span></h3>
                <p className="text-sm text-gray-700">Baked gnocchi with spinach and Italian cheese & butter sauce</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Penne 'Nduja & Gorgonzola</h3>
                <p className="text-sm text-gray-700">Penne pasta with spicy Calabrian pork sausage and gorgonzola sauce</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Spaghetti Carbonara</h3>
                <p className="text-sm text-gray-700">Classic carbonara with guanciale, pecorino cream, egg and black pepper</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Rigatoni Sugo di Coda <span className="text-gray-600" style={{fontSize: '24px'}}>(Oxtail Ragù)</span></h3>
                <p className="text-sm text-gray-700">Slow-braised oxtail with tomato sauce, vegetables, wine, herbs and a hint of cacao</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Mezze Maniche Gricia al Porto</h3>
                <p className="text-sm text-gray-700">Short pasta tubes with crispy guanciale, port wine reduction, black pepper and pecorino cheese</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Black Ravioli Queenies</h3>
                <p className="text-sm text-gray-700">Queenie-filled ravioli with spring onion, guanciale, pecorino, cream and garlic</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Linguine allo Scoglio</h3>
                <p className="text-sm text-gray-700">Linguine with mixed seafood, white wine, garlic and spicy tomato sauce</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Risotto ai Funghi e Tartufi <span className="text-gray-600" style={{fontSize: '24px'}}>(V)</span></h3>
                <p className="text-sm text-gray-700">Arborio rice with wild mushrooms, truffle cream and prosecco</p>
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
            <h2 className="font-bold text-gray-900 mb-8 text-center text-lg md:text-xl lg:text-2xl">Main Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Chicken Milanese Al Valdostana</h3>
                <p className="text-sm text-gray-700">Breadcrumbed chicken escalope with ham, mozzarella, garlic butter, gnocchi bolognese and parmesan</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Braised Lamb Spezzatino Abruzzo Style <span className="text-gray-600" style={{fontSize: '24px'}}>(GF)</span></h3>
                <p className="text-sm text-gray-700">Slow-cooked lamb with mint, tomato, lamb stock, pecorino, garlic rosemary potatoes and salad</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Sicilian Stuffed Peppers <span className="text-gray-600" style={{fontSize: '24px'}}>(V)</span></h3>
                <p className="text-sm text-gray-700">Roasted red pepper with Sicilian caponata, breadcrumbs, Italian cheese, tomato passata, garlic rosemary potatoes and salad</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Roman Style Meatballs</h3>
                <p className="text-sm text-gray-700">Meatballs with peppercorn cream sauce, garlic rosemary potatoes and salad</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Cioppino</h3>
                <p className="text-sm text-gray-700">Seafood & fish stew with tomato, garlic, herbs, white wine, chilli and toasted bread</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Spezzatino di Maiale e Salsiccia</h3>
                <p className="text-sm text-gray-700">Pork stew with sausage, white wine sauce, black olives, herbs and parmesan mash</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Braised Beef Al Vino Rosso</h3>
                <p className="text-sm text-gray-700">Slow-cooked rump steak with red wine, onion, garlic, root vegetables, aromatic herbs and parmesan butter mash</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Desserts Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-lg md:text-xl lg:text-2xl">Desserts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Mini Liqueur Coffee</h3>
                <p className="text-sm text-gray-700">Choose from whiskey, Irish cream, or coffee liqueur</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Pannacotta with Forest Fruits <span className="text-gray-600" style={{fontSize: '24px'}}>(GF)</span></h3>
                <p className="text-sm text-gray-700">Silky pannacotta topped with fresh forest fruits</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Tiramisu</h3>
                <p className="text-sm text-gray-700">Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Mango & Coconut Semifreddo <span className="text-gray-600" style={{fontSize: '24px'}}>(GF)</span></h3>
                <p className="text-sm text-gray-700">Light frozen dessert with tropical mango and coconut flavors</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Lemon Crème Brûlée <span className="text-gray-600" style={{fontSize: '24px'}}>(GF)</span></h3>
                <p className="text-sm text-gray-700">Silky custard with caramelized sugar topping and fresh lemon flavor</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Ice Cream Affogato</h3>
                <p className="text-sm text-gray-700">Vanilla ice cream drowned in hot espresso with a splash of coffee liqueur</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Chocolate Cake & Pistachio Custard <span className="text-gray-600" style={{fontSize: '24px'}}>(GF)</span></h3>
                <p className="text-sm text-gray-700">Rich chocolate cake served with creamy pistachio custard</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2" style={{fontSize: '26px'}}>Manx Ice Cream Selection</h3>
                <p className="text-sm text-gray-700">Choose 3 scoops of our local Manx ice cream: vanilla, strawberry, chocolate, or salted caramel</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Side Orders Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-8 text-center text-lg md:text-xl lg:text-2xl">Side Orders</h2>
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
