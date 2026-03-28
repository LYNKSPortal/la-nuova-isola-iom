'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

export default function HomepageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % 5);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + 5) % 5);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'ArrowRight':
          nextSlide();
          break;
        case ' ':
        case 'Enter':
          event.preventDefault();
          togglePause();
          break;
        case 'Home':
          event.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          event.preventDefault();
          goToSlide(4);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, togglePause]);

  const slides = [
    {
      id: 0,
      image: '/homepage-slider/Isola_01-scaled.jpg',
      title: 'Welcome to La Nuova Isola',
      description: 'Authentic Italian dining experience in the heart of the city',
      buttonText: 'Reserve a Table'
    },
    {
      id: 1,
      image: '/homepage-slider/Isola_11-scaled.jpg',
      title: 'Welcome to La Nuova Isola',
      description: 'Authentic Italian dining experience in the heart of the city',
      buttonText: 'Reserve a Table'
    },
    {
      id: 2,
      image: '/homepage-slider/Isola_13-scaled.jpg',
      title: 'Welcome to La Nuova Isola',
      description: 'Authentic Italian dining experience in the heart of the city',
      buttonText: 'Reserve a Table'
    },
    {
      id: 3,
      image: '/homepage-slider/Isola_15-scaled.jpg',
      title: 'Welcome to La Nuova Isola',
      description: 'Authentic Italian dining experience in the heart of the city',
      buttonText: 'Reserve a Table'
    },
    {
      id: 4,
      image: '/homepage-slider/Isola_16-scaled.jpg',
      title: 'Welcome to La Nuova Isola',
      description: 'Authentic Italian dining experience in the heart of the city',
      buttonText: 'Reserve a Table'
    }
  ];

  return (
    <section 
      className="relative w-full h-screen overflow-hidden"
      role="region"
      aria-label="Restaurant image carousel"
      aria-roledescription="carousel"
    >
      {/* All slides rendered simultaneously with opacity control */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}
          aria-hidden={currentSlide !== index}
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={`Restaurant image ${index + 1}: ${slide.title}`}
          >
            <div className="w-full h-full flex items-center justify-center bg-black/30">
              <div className="text-center text-white px-4">
                <h1 className="font-bold text-white mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                  {slide.description}
                </p>
                <Link 
                  href="/reservations"
                  className="inline-block bg-[#7A2325] text-white px-8 py-3 hover:bg-[#8B2E35] transition-colors font-medium"
                  aria-label={`${slide.buttonText} - Navigate to reservations page`}
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      
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
    </section>
  );
}
