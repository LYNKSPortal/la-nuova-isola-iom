'use client';

export default function ImageTest() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="font-bold mb-4">Image Loading Test</h1>
      
      {/* Test 1: White logo (we know this works) */}
      <div className="mb-8">
        <h2 className="font-semibold mb-2">Test 1: White Logo</h2>
        <img 
          src="/white-logo.png" 
          alt="White Logo Test"
          className="w-32 h-auto border-2 border-gray-300"
          onLoad={(e) => console.log('White logo loaded:', e.currentTarget.naturalWidth, 'x', e.currentTarget.naturalHeight)}
          onError={(e) => console.log('White logo failed:', e.currentTarget.src)}
        />
      </div>

      {/* Test 2: Direct slider image */}
      <div className="mb-8">
        <h2 className="font-semibold mb-2">Test 2: Slider Image 1</h2>
        <img 
          src="/homepage-slider/Isola_01-scaled.jpg" 
          alt="Slider Image Test"
          className="w-64 h-auto border-2 border-gray-300"
          onLoad={(e) => console.log('Slider image loaded:', e.currentTarget.naturalWidth, 'x', e.currentTarget.naturalHeight)}
          onError={(e) => console.log('Slider image failed:', e.currentTarget.src)}
        />
      </div>

      {/* Test 3: Background image */}
      <div className="mb-8">
        <h2 className="font-semibold mb-2">Test 3: Background Image</h2>
        <div 
          className="w-64 h-48 border-2 border-gray-300 bg-cover bg-center"
          style={{ backgroundImage: 'url(/homepage-slider/Isola_01-scaled.jpg)' }}
        >
          <div className="w-full h-full flex items-center justify-center bg-black/50 text-white">
            Background Test
          </div>
        </div>
      </div>

      {/* Test 4: CSS background with fallback */}
      <div className="mb-8">
        <h2 className="font-semibold mb-2">Test 4: CSS Background</h2>
        <div 
          className="w-64 h-48 border-2 border-gray-300 bg-red-500 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/homepage-slider/Isola_01-scaled.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="w-full h-full flex items-center justify-center bg-black/30 text-white">
            CSS Background Test
          </div>
        </div>
      </div>
    </div>
  );
}
