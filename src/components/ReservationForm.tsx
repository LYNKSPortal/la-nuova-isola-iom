'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import FadeIn from './FadeIn';

export default function ReservationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    date: '',
    time: '',
    flexible: 'no',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to confirmation page
        router.push('/reservation-confirmation');
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to send reservation request. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
                Make a Reservation
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-white">
                Book your table for an unforgettable dining experience
              </p>
            </FadeIn>
          </div>
        </header>
      </section>

      {/* Reservation Form */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-bold text-gray-900 mb-6 md:mb-8 text-center text-xl md:text-2xl lg:text-3xl">Reservation Details</h2>
          </FadeIn>
          
          {/* Booking Disclaimer */}
          <FadeIn delay={0.1}>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 md:p-8 mb-6 md:mb-8">
              {/* Icon and Title - Left aligned */}
              <div className="flex items-center mb-3">
                <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="font-semibold text-sm text-yellow-800">Important Notice for Short Notice Bookings</p>
              </div>
              
              {/* Main Text - Left aligned */}
              <div className="text-sm text-yellow-800">
                <p>If you're looking to make a booking within the next 24-48 hours, please contact us via WhatsApp. For short notice bookings, we can respond quickly and let you know straight away whether availability remains. For bookings more than 24-48 hours in advance, simply complete the form below and we'll get back to you as soon as possible.</p>
                <a 
                  href="https://wa.me/447624482007" 
                  className="inline-flex items-center mt-4 bg-[#7A2325] hover:bg-[#5a1a1c] text-white py-2 px-4 rounded-lg transition-colors font-medium shadow-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                  Message Peter on WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Name For The Table */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Name For The Table?</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full px-5 py-3 text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A2325] focus:border-transparent transition-all placeholder:text-gray-700" 
                  placeholder="Joe Smith"
                />
              </div>

              {/* How Many People */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">How Many People? (8 or more please call)</label>
                <select 
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required 
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A2325] focus:border-transparent transition-all text-black"
                >
                  <option value="" className="text-black">Select number</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>
              </div>

              {/* What Date */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">What Date?</label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required 
                  className="w-full px-5 py-3 text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A2325] focus:border-transparent transition-all placeholder:text-gray-700" 
                />
              </div>

              {/* Preferred Sitting Time */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Preferred Sitting Time?</label>
                <select 
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required 
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A2325] focus:border-transparent transition-all text-black"
                >
                  <option value="" className="text-black">Select time</option>
                  <option value="11:30">11:30</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                  <option value="14:00">14:00</option>
                  <option value="14:30">14:30</option>
                  <option value="17:30">17:30</option>
                  <option value="18:00">18:00</option>
                  <option value="18:30">18:30</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                </select>
              </div>

              {/* Flexible Booking */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Is this a flexible booking? (If preferred time is unavailable)</label>
                <select 
                  name="flexible"
                  value={formData.flexible}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A2325] focus:border-transparent transition-all text-black"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">What's Your Email?</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full px-5 py-3 text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A2325] focus:border-transparent transition-all placeholder:text-gray-700" 
                  placeholder="joesmith@example.com"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">What's Your Number?</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  autoComplete="off"
                  className="w-full px-5 py-3 text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A2325] focus:border-transparent transition-all placeholder:text-gray-700" 
                  placeholder="07624 000000"
                />
              </div>

              {/* Extra Details */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Extra Details?</label>
                <textarea 
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4} 
                  spellCheck="false"
                  autoComplete="off"
                  className="w-full px-5 py-3 text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A2325] focus:border-transparent transition-all resize-none placeholder:text-gray-700" 
                  placeholder="Any special requests or dietary requirements..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#7A2325] 600 text-white py-4 px-6 rounded-lg hover:bg-[#7A2325] 700 transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                {isSubmitting ? 'Submitting...' : 'Confirm Reservation'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="font-medium">Reservation request sent successfully! We'll confirm your booking shortly.</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-6 bg-[#7A2325] 50 border border-[#7A2325] 200 rounded-lg text-gray-800">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-[#7A2325]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="font-medium">{errorMessage}</p>
                  </div>
                </div>
              )}
            </form>
          </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
