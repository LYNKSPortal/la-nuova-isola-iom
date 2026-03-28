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
              Authentic Italian dining experience in the heart of the city
            </p>
            <nav aria-label="Social media links">
              <div className="flex justify-center space-x-4">
                <a 
                  href="#" 
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
                  href="#" 
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Visit La Nuova Isola on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857-.182-.467-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058z"/>
                  </svg>
                </a>
                <a 
                  href="tel:+441624123456" 
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Call La Nuova Isola restaurant"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a 
                  href="mailto:info@lanuovaisola.im" 
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
            <h2 id="quick-links-heading" className="text-lg font-semibold mb-4">Quick Links</h2>
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
            <h2 id="contact-heading" className="text-lg font-semibold mb-4">Contact</h2>
            <address className="space-y-2 text-white not-italic">
              <p>123 Restaurant Street</p>
              <p>City, State 12345</p>
              <p>Downtown District</p>
              <p className="pt-2">
                <a href="tel:5551234567" className="hover:text-gray-300 transition-colors">
                  (555) 123-4567
                </a>
              </p>
              <p>
                <a href="mailto:info@lanuovaisola.com" className="hover:text-gray-300 transition-colors">
                  info@lanuovaisola.com
                </a>
              </p>
            </address>
          </section>
          {/* Hours */}
          <section className="text-center" aria-labelledby="hours-heading">
            <h2 id="hours-heading" className="text-lg font-semibold mb-4">Hours</h2>
            <div className="space-y-2 text-white">
              <div className="flex flex-col items-center">
                <span>Monday - Thursday</span>
                <time>11:00 AM - 10:00 PM</time>
              </div>
              <div className="flex flex-col items-center">
                <span>Friday - Saturday</span>
                <time>11:00 AM - 11:00 PM</time>
              </div>
              <div className="flex flex-col items-center">
                <span>Sunday</span>
                <time>11:00 AM - 9:00 PM</time>
              </div>
            </div>
            <div className="mt-4">
              <a 
                href="/reservations" 
                className="inline-block bg-white text-[#7A2325] px-4 py-2 hover:bg-gray-200 transition-colors text-sm font-medium"
                aria-label="Make a reservation - Navigate to reservations page"
              >
                Make Reservation
              </a>
            </div>
          </section>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">
              &copy; 2024 La Nuova Isola. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-white hover:text-gray-300 text-sm transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
