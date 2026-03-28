'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
      <section className="relative h-96 w-full overflow-hidden">
        <img 
          src="/homepage-slider/Isola_13-scaled.jpg" 
          alt="Restaurant background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>
        <header className="relative h-full flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="text-center px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
            <h1 className="font-bold text-white mb-4">
              Make a Reservation
            </h1>
            <p className="text-xl text-white">
              Book your table for an unforgettable dining experience
            </p>
          </div>
        </header>
      </section>

      {/* Reservation Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-gray-900 mb-8 text-center">Reservation Details</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name For The Table */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Name For The Table?</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A2325] focus:border-transparent transition-all placeholder:text-gray-500" 
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
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A2325] focus:border-transparent transition-all text-gray-500"
                >
                  <option value="" className="text-gray-500">Select number</option>
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
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A2325] focus:border-transparent transition-all placeholder:text-gray-500" 
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
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A2325] focus:border-transparent transition-all text-gray-500"
                >
                  <option value="" className="text-gray-500">Select time</option>
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
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A2325] focus:border-transparent transition-all text-gray-500"
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
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A2325] focus:border-transparent transition-all placeholder:text-gray-500" 
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
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A2325] focus:border-transparent transition-all placeholder:text-gray-500" 
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
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A2325] focus:border-transparent transition-all resize-none placeholder:text-gray-500" 
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
        </div>
      </section>
    </>
  );
}
