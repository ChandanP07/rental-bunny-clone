import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from '@/assets/logo.png';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { 
    label: 'Products', 
    href: '/products',
    hasDropdown: true 
  },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Blog', href: '/blog' },
  { label: "FAQ's", href: '/faq' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span>Rent Now:</span>
            <a href="tel:+919819033222" className="hover:text-coral transition-colors">+91 98190 33222</a>
            <span>|</span>
            <a href="tel:+919819133222" className="hover:text-coral transition-colors">+91 98191 33222</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="hover:text-coral transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="hover:text-coral transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="#" className="hover:text-coral transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
            </a>
            <a href="#" className="hover:text-coral transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13.538 6.011l.355-.36c1.259-1.276 3.3-1.296 4.58-.04.313.307.558.669.723 1.066.181.434.27.898.261 1.365.01.593-.12 1.181-.38 1.716-.216.451-.521.854-.895 1.185-.067.058-.133.116-.203.17l-.025.019-.024.018-.024.017-.024.016-.024.015-.024.014-.024.013-.024.012-.024.011-.024.01-.024.009-.024.008-.024.007-.024.006-.024.005-.024.004-.024.003-.024.002-.024.001h-.048l-.024-.001-.024-.002-.024-.003-.024-.004-.024-.005-.024-.006-.024-.007-.024-.008-.024-.009-.024-.01-.024-.011-.024-.012-.024-.013-.024-.014-.024-.015-.024-.016-.024-.017-.024-.018-.025-.019c-.07-.054-.136-.112-.203-.17-.374-.331-.679-.734-.895-1.185-.26-.535-.39-1.123-.38-1.716-.009-.467.08-.931.261-1.365.165-.397.41-.759.723-1.066l.355-.36-4.06-4.116a1.034 1.034 0 0 0-1.48 0L6.56 6.011l.355.36c1.259 1.276 1.239 3.337-.04 4.59-.313.307-.669.557-1.066.723-.434.18-.898.27-1.365.261-.593.01-1.181-.12-1.716-.38-.451-.216-.854-.521-1.185-.895-.058-.067-.116-.133-.17-.203l-.019-.025-.018-.024-.017-.024-.016-.024-.015-.024-.014-.024-.013-.024-.012-.024-.011-.024-.01-.024-.009-.024-.008-.024-.007-.024-.006-.024-.005-.024-.004-.024-.003-.024-.002-.024-.001-.024v-.048l.001-.024.002-.024.003-.024.004-.024.005-.024.006-.024.007-.024.008-.024.009-.024.01-.024.011-.024.012-.024.013-.024.014-.024.015-.024.016-.024.017-.024.018-.024.019-.025c.054-.07.112-.136.17-.203.331-.374.734-.679 1.185-.895.535-.26 1.123-.39 1.716-.38.467-.009.931.081 1.365.261.397.166.753.416 1.066.723l.355.36-4.116 4.06a1.034 1.034 0 0 0 0 1.48l4.116 4.06-.355.36c-1.279 1.253-1.299 3.314-.04 4.59.307.307.669.557 1.066.723.434.18.898.27 1.365.261.593.01 1.181-.12 1.716-.38.451-.216.854-.521 1.185-.895.058-.067.116-.133.17-.203l.019-.025.018-.024.017-.024.016-.024.015-.024.014-.024.013-.024.012-.024.011-.024.01-.024.009-.024.008-.024.007-.024.006-.024.005-.024.004-.024.003-.024.002-.024.001-.024v-.048l-.001-.024-.002-.024-.003-.024-.004-.024-.005-.024-.006-.024-.007-.024-.008-.024-.009-.024-.01-.024-.011-.024-.012-.024-.013-.024-.014-.024-.015-.024-.016-.024-.017-.024-.018-.024-.019-.025c-.054-.07-.112-.136-.17-.203-.331-.374-.734-.679-1.185-.895-.535-.26-1.123-.39-1.716-.38-.467-.009-.931.081-1.365.261-.397.166-.753.416-1.066.723l-.355.36 4.06 4.116a1.034 1.034 0 0 0 1.48 0l4.06-4.116-.355-.36c-1.279-1.253-1.259-3.337.04-4.59.307-.307.669-.557 1.066-.723.434-.18.898-.27 1.365-.261.593-.01 1.181.12 1.716.38.451.216.854.521 1.185.895.058.067.116.133.17.203l.019.025.018.024.017.024.016.024.015.024.014.024.013.024.012.024.011.024.01.024.009.024.008.024.007.024.006.024.005.024.004.024.003.024.002.024.001.024v.048l-.001.024-.002.024-.003.024-.004.024-.005.024-.006.024-.007.024-.008.024-.009.024-.01.024-.011.024-.012.024-.013.024-.014.024-.015.024-.016.024-.017.024-.018.024-.019.025c-.054.07-.112.136-.17.203-.331.374-.734.679-1.185.895-.535.26-1.123.39-1.716.38-.467.009-.931-.081-1.365-.261-.397-.166-.753-.416-1.066-.723z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background py-4 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Rental Bunny" className="h-14" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-foreground hover:text-coral transition-colors font-medium"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </div>

          <Button className="hidden lg:flex bg-coral hover:bg-coral/90 text-primary-foreground px-6 py-2 rounded-full font-semibold">
            Enquire Now
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1 text-foreground hover:text-coral transition-colors font-medium px-4"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
              <Button className="mx-4 bg-coral hover:bg-coral/90 text-primary-foreground rounded-full font-semibold">
                Enquire Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
