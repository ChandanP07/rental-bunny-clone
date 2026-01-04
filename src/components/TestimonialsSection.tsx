import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Renting from Rental Bunny was a breeze from start to finish. Their extensive selection of Apple and Windows products catered perfectly to our needs, and the equipment was in excellent condition. The team was professional, responsive, and made sure our rental experience was smooth and hassle-free. Highly recommended!",
    author: 'Aparna Sharan',
    company: 'Social Pipal',
  },
  {
    text: "Rental Bunny exceeded my expectations with their impeccable service and top-notch equipment. The seamless rental experience and prompt customer support truly made them my go-to choice for all my computer rental needs.",
    author: 'Saurabh Mishra',
    company: 'Eiosys Pvt Ltd',
  },
  {
    text: "Renting from Rental Bunny was a game-changer for our production. Their top-notch equipment and exceptional customer service ensured a smooth and successful project. I can't imagine working without them now!",
    author: 'Deepak Suvarna',
    company: 'On Demand App',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          People praise about <span className="text-coral">Rental Bunny</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Even more, reasons to Join us.
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 rounded-full bg-coral text-primary-foreground flex items-center justify-center hover:bg-coral/90 transition-colors hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 rounded-full bg-coral text-primary-foreground flex items-center justify-center hover:bg-coral/90 transition-colors hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <Quote className="w-12 h-12 text-coral mb-6" />
            <p className="text-lg text-foreground leading-relaxed mb-8">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center">
                <span className="text-coral font-bold text-lg">
                  {testimonials[currentIndex].author.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-secondary">{testimonials[currentIndex].author}</h4>
                <p className="text-muted-foreground text-sm">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-coral' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
