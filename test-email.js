// Test script for email functionality
// Run with: node test-email.js

const testContactForm = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        phone: '555-123-4567',
        subject: 'general',
        message: 'This is a test message from the contact form.',
        newsletter: false
      }),
    });

    const result = await response.json();
    console.log('Contact Form Test Result:', result);
  } catch (error) {
    console.error('Contact Form Test Error:', error);
  }
};

const testReservationForm = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        phone: '555-123-4567',
        date: '2026-03-29',
        time: '19:00',
        guests: '2',
        occasion: 'birthday',
        specialRequests: 'Test reservation request',
        terms: true
      }),
    });

    const result = await response.json();
    console.log('Reservation Form Test Result:', result);
  } catch (error) {
    console.error('Reservation Form Test Error:', error);
  }
};

// Run tests
console.log('Testing email functionality...');
testContactForm();
testReservationForm();
