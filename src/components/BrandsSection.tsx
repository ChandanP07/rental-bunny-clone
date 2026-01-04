import appleImg from '@/assets/brands/apple.png';
import dellImg from '@/assets/brands/dell.png';
import hpImg from '@/assets/brands/hp.png';
import lenovoImg from '@/assets/brands/lenovo.png';
import lgImg from '@/assets/brands/lg.png';
import asusImg from '@/assets/brands/asus.png';

const brands = [
  { name: 'Apple', image: appleImg },
  { name: 'Dell', image: dellImg },
  { name: 'HP', image: hpImg },
  { name: 'Lenovo', image: lenovoImg },
  { name: 'LG', image: lgImg },
  { name: 'Asus', image: asusImg },
];

const BrandsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Brands we Offer
        </h2>

        {/* Marquee Container */}
        <div className="overflow-hidden">
          <div className="flex gap-12 marquee">
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {brands.map((brand, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
