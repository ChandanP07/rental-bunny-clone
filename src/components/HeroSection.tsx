import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import heroDevices from '@/assets/hero-devices.jpg';

const heroSlides = [
  {
    title: "Your Business,",
    subtitle: "Our Rentals",
    description: "Customized rental solutions to meet your business demands",
    cta: "Explore Now",
    image: heroDevices,
  },
  {
    title: "Premium Tech,",
    subtitle: "Zero Hassle",
    description: "Get the latest devices without the upfront investment",
    cta: "Get Started",
    image: heroDevices,
  },
  {
    title: "Scale Up,",
    subtitle: "Stay Flexible",
    description: "Expand your fleet as your business grows",
    cta: "Learn More",
    image: heroDevices,
  },
  {
    title: "Enterprise Ready,",
    subtitle: "Always Supported",
    description: "24/7 technical support for all your rental needs",
    cta: "Contact Us",
    image: heroDevices,
  },
  {
    title: "Rent Smart,",
    subtitle: "Save Big",
    description: "Affordable plans tailored for every business size",
    cta: "View Plans",
    image: heroDevices,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 min-h-[500px] overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              {slide.title}
              <br />
              {slide.subtitle}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              {slide.description}
            </p>
            <Button className="bg-coral hover:bg-coral/90 text-primary-foreground px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-sm">
              {slide.cta}
            </Button>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <img 
              src={slide.image}
              alt="Apple devices for rent"
              className="w-full max-w-2xl"
            />
          </div>
        </div>

        {/* Pagination Bullets */}
        <div className="flex justify-center gap-2 mt-8">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-primary scale-110'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>
    </section>
  );
};

export default HeroSection;
