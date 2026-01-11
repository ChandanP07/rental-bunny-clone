import { useState } from 'react';
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

const BRANDS_PER_PAGE = 3;

const BrandsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(brands.length / BRANDS_PER_PAGE);
  
  const currentBrands = brands.slice(
    currentPage * BRANDS_PER_PAGE,
    (currentPage + 1) * BRANDS_PER_PAGE
  );

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Brands we Offer
        </h2>

        {/* Brands Grid */}
        <div className="flex justify-center gap-12 mb-8">
          {currentBrands.map((brand, index) => (
            <div
              key={index}
              className="w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Pagination Bullets */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? 'bg-primary scale-110'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
