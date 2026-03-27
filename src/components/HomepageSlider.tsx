'use client';

import { useState, useEffect } from 'react';

export default function HomepageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 5);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 5) % 5);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* All slides rendered simultaneously with opacity control */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        currentSlide === 0 ? 'opacity-100' : 'opacity-0'
      }`}>
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/homepage-slider/Isola_01-scaled.jpg)' }}
        >
          <div className="w-full h-full flex items-center justify-center bg-black/30">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Welcome to La Nuova Isola
              </h1>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                Authentic Italian dining experience in the heart of the city
              </p>
              <button className="bg-[#7A2325] text-white px-8 py-3 hover:bg-[#8B2E35] transition-colors font-medium">
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        currentSlide === 1 ? 'opacity-100' : 'opacity-0'
      }`}>
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/homepage-slider/Isola_11-scaled.jpg)' }}
        >
          <div className="w-full h-full flex items-center justify-center bg-black/30">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Welcome to La Nuova Isola
              </h1>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                Authentic Italian dining experience in the heart of the city
              </p>
              <button className="bg-[#7A2325] text-white px-8 py-3 hover:bg-[#8B2E35] transition-colors font-medium">
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        currentSlide === 2 ? 'opacity-100' : 'opacity-0'
      }`}>
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/homepage-slider/Isola_13-scaled.jpg)' }}
        >
          <div className="w-full h-full flex items-center justify-center bg-black/30">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Welcome to La Nuova Isola
              </h1>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                Authentic Italian dining experience in the heart of the city
              </p>
              <button className="bg-[#7A2325] text-white px-8 py-3 hover:bg-[#8B2E35] transition-colors font-medium">
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        currentSlide === 3 ? 'opacity-100' : 'opacity-0'
      }`}>
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/homepage-slider/Isola_15-scaled.jpg)' }}
        >
          <div className="w-full h-full flex items-center justify-center bg-black/30">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Welcome to La Nuova Isola
              </h1>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                Authentic Italian dining experience in the heart of the city
              </p>
              <button className="bg-[#7A2325] text-white px-8 py-3 hover:bg-[#8B2E35] transition-colors font-medium">
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        currentSlide === 4 ? 'opacity-100' : 'opacity-0'
      }`}>
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/homepage-slider/Isola_16-scaled.jpg)' }}
        >
          <div className="w-full h-full flex items-center justify-center bg-black/30">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Welcome to La Nuova Isola
              </h1>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                Authentic Italian dining experience in the heart of the city
              </p>
              <button className="bg-[#7A2325] text-white px-8 py-3 hover:bg-[#8B2E35] transition-colors font-medium">
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 transition-colors z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 transition-colors z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
