import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import heroDevices from '@/assets/hero-devices.jpg';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 min-h-[500px] overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              Your Business,
              <br />
              Our Rentals
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Customized rental solutions to meet your business demands
            </p>
            <Button className="bg-coral hover:bg-coral/90 text-primary-foreground px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-sm">
              Explore Now
            </Button>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <img 
              src={heroDevices}
              alt="Apple devices for rent"
              className="w-full max-w-2xl"
            />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-colors">
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-colors">
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>
    </section>
  );
};

export default HeroSection;
