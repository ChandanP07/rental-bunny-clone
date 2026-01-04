import logo from '@/assets/logo.png';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <img src={logo} alt="Rental Bunny" className="h-14 mb-4 brightness-0 invert" />
            <p className="text-secondary-foreground/80 text-sm mb-4">
              India's leading B2B IT rental products and service provider. We specialise in delivering reliable and efficient rental solutions tailored to the needs of businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-coral transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="hover:text-coral transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="hover:text-coral transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-coral transition-colors">Home</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-coral transition-colors">About Us</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-coral transition-colors">Products</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-coral transition-colors">Blog</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-coral transition-colors">FAQ's</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-coral transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-coral transition-colors">iPhones</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-coral transition-colors">iPads</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-coral transition-colors">MacBooks</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-coral transition-colors">iMacs</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-coral transition-colors">Windows Desktops</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-coral transition-colors">Printers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-coral" />
                <div>
                  <a href="tel:+919819033222" className="text-secondary-foreground/80 hover:text-coral transition-colors">+91 98190 33222</a>
                  <br />
                  <a href="tel:+919819133222" className="text-secondary-foreground/80 hover:text-coral transition-colors">+91 98191 33222</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-coral" />
                <a href="mailto:info@rentalbunny.com" className="text-secondary-foreground/80 hover:text-coral transition-colors">info@rentalbunny.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-coral flex-shrink-0 mt-1" />
                <span className="text-secondary-foreground/80">Mumbai, Pune, Bangalore, Hyderabad, Chennai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-6 text-center text-secondary-foreground/60 text-sm">
          <p>© 2024 Rental Bunny. All rights reserved.</p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919819033222"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </footer>
  );
};

export default Footer;
