const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Rental Bunny - <span className="text-coral">Your Corporate Rental Partner</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground text-center leading-relaxed">
          <p>
            <strong className="text-foreground">Rental Bunny</strong> is India's leading B2B <strong className="text-foreground">IT rental</strong> products and service provider. We specialise in delivering reliable and efficient rental solutions tailored to the needs of businesses. From iPhones to iMacs, Laptops to MacBooks, we offer a wide range of high-quality products to meet your corporate requirements.
          </p>
          
          <p>
            We are the leading provider of rental services for startups, corporates, conglomerates, and production houses. Renowned for our excellence, we cater to the unique needs of each business sector. Our client-centric approach guarantees that your business receives an exceptional rental experience.
          </p>
          
          <p>
            Rental Bunny serves customers across major Indian cities, including Mumbai, Pune, Bangalore, Hyderabad, and Chennai. Every product is carefully packaged to ensure it arrives in top-notch condition at your doorstep, ready to enhance your business operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
