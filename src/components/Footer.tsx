export default function Footer() {
  return (
    <footer className="bg-[#7A2325] text-white py-12" role="contentinfo">
      <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <section className="text-center" aria-labelledby="brand-heading">
            <h2 id="brand-heading" className="sr-only">La Nuova Isola Brand</h2>
            <div className="flex justify-center mb-4">
              <img 
                src="/white-logo.png" 
                alt="La Nuova Isola Restaurant Logo" 
                className="w-[300px] h-auto"
                width="300"
                height="auto"
              />
            </div>
            <p className="text-white mb-4">
              Experience authentic Italian dining in the heart of Douglas, Isle of Man, where traditional flavors meet warm hospitality
            </p>
            <nav aria-label="Social media links">
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.facebook.com/manxisola" 
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Visit La Nuova Isola on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                                <a 
                  href="https://wa.me/447624482007" 
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Contact La Nuova Isola on WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                </a>
                <a 
                  href="tel:00441624623764" 
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Call La Nuova Isola restaurant"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a 
                  href="mailto:bookings@lanuovaisola.com" 
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Email La Nuova Isola restaurant"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </nav>
          </section>
          {/* Quick Links */}
          <section className="text-center" aria-labelledby="quick-links-heading">
            <h2 id="quick-links-heading" className="font-semibold mb-4">Links</h2>
            <nav aria-label="Quick navigation links">
              <ul className="space-y-2 text-white">
                <li><a href="/" className="hover:text-gray-300 transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-gray-300 transition-colors">About</a></li>
                <li><a href="/menu" className="hover:text-gray-300 transition-colors">Menu</a></li>
                <li><a href="/gallery" className="hover:text-gray-300 transition-colors">Gallery</a></li>
                <li><a href="/reservations" className="hover:text-gray-300 transition-colors">Reservations</a></li>
                <li><a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
              </ul>
            </nav>
          </section>
          {/* Contact */}
          <section className="text-center" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="font-semibold mb-4">Contact</h2>
            <address className="space-y-2 text-white not-italic">
              <p>10–12 Prospect Hill</p>
              <p>Douglas, Isle of Man, IM1 1EJ</p>
              <p>(accessible via the steps)</p>
              <p className="pt-2">
                <a href="tel:00441624623764" className="hover:text-gray-300 transition-colors">
                  0044 1624 623764
                </a>
              </p>
              <p>
                <a href="mailto:bookings@lanuovaisola.com" className="hover:text-gray-300 transition-colors">
                  bookings@lanuovaisola.com
                </a>
              </p>
            </address>
          </section>
          {/* Hours */}
          <section className="text-center" aria-labelledby="hours-heading">
            <h2 id="hours-heading" className="font-semibold mb-4">Hours</h2>
            <div className="text-white space-y-1">
              <div className="flex justify-between items-center">
                <span className="flex-1 text-left">Sun, Mon & Tue:</span>
                <span className="flex-1 text-right font-medium">Closed</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex-1 text-left">Wednesday:</span>
                <span className="flex-1 text-right">12:00-14:00, 17:00-21:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex-1 text-left">Thursday:</span>
                <span className="flex-1 text-right">12:00-14:00, 17:00-21:30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex-1 text-left">Friday:</span>
                <span className="flex-1 text-right">12:00-14:00, 17:00-21:30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex-1 text-left">Saturday:</span>
                <span className="flex-1 text-right">18:00-21:30</span>
              </div>
            </div>
                      </section>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">
              &copy; 2026 La Nuova Isola. All rights reserved.
            </p>
            <div className="flex items-center justify-center my-4 md:my-0">
              <img 
                src="/powered-by-lynks.png" 
                alt="Powered by LYNKS" 
                className="w-[300px] h-auto opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-white hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-white hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
              <a href="/accessibility" className="text-white hover:text-gray-300 text-sm transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
