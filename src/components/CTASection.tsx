import { Button } from './ui/button';

const CTASection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">
          For any inquiries, please don't hesitate to get in touch with us.
        </h2>
        <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
          Don't delay any longer. Choose RentalBunny and experience the Next Level of Rental Services in India.
        </p>
        <Button className="bg-coral hover:bg-coral/90 text-primary-foreground px-8 py-4 rounded-full font-semibold uppercase tracking-wider">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
