import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import appleStudioImg from '@/assets/trending/apple-studio.jpg';
import iphone14Img from '@/assets/trending/iphone14-pro.jpg';
import ipadProImg from '@/assets/trending/ipad-pro.jpg';
import iphone15Img from '@/assets/trending/iphone15.jpg';
import m1UltraImg from '@/assets/trending/m1-ultra.jpg';
import imacProImg from '@/assets/trending/imac-pro.jpg';
import macbookProImg from '@/assets/trending/macbook-pro.jpg';

const trendingProducts = [
  {
    name: 'Apple Studio Display',
    price: '₹9,000*',
    image: appleStudioImg,
    specs: [
      '5K Retina display',
      '12MP Ultra Wide camera with 122° field of view',
      'One Thunderbolt 3 (USB-C) port, three USB-C ports',
      '68.29 cm / 27-inch 5K Retina display',
      '5120×2880 resolution at 218 pixels per inch',
    ],
  },
  {
    name: 'iPhone 14 Pro & Pro Max',
    price: '₹7,500*',
    image: iphone14Img,
    specs: [
      'Display Size: (6.1") Super Retina XDR display',
      'Capacity: 128GB/256GB/512GB',
      'Processor: A15 Bionic chip',
      'Camera: 12MP Main Ultra Wide',
      'Colour: Blue, Purple, Yellow, Midnight',
    ],
  },
  {
    name: '12.9-inch iPad Pro',
    price: '₹7,200*',
    image: ipadProImg,
    specs: [
      'Display: (12.9‑inch) Liquid Retina XDR display',
      'Capacity: 128GB/256GB/512GB/1TB/2TB',
      'Processor: M2 Chip',
      'Camera: 12MP Wide camera',
      'Colour: Space Grey, Silver',
    ],
  },
  {
    name: 'iPhone 15 & 15 Plus',
    price: '₹7,500*',
    image: iphone15Img,
    specs: [
      'Display Size: (6.1") Super Retina XDR display',
      'Capacity: 128GB/256GB/512GB',
      'Processor: A16 Bionic chip',
      'Camera: 12MP Main Ultra Wide',
      'Colour: Black, Blue, Green, Yellow, Pink',
    ],
  },
  {
    name: 'Apple Mac Studio M1 Ultra',
    price: '₹24,000*',
    image: m1UltraImg,
    specs: [
      'Processor: M1 ULTRA',
      'Cores: 20-core CPU, 48-core GPU',
      'Storage: 1TB, 2TB, 4TB or 8TB',
      'RAM: 64GB unified memory',
    ],
  },
  {
    name: 'iMac Pro (2017)',
    price: '₹18,000*',
    image: imacProImg,
    specs: [
      'Display Size: 27-inch Retina 5K display',
      'Processor: Intel Xeon W',
      'Cores: 3.2GHz 8-core',
      'Storage: 1TB/2TB/4TB',
      'RAM: 32GB unified memory',
    ],
  },
  {
    name: 'Macbook Pro 16" M2/M1/Intel',
    price: '₹16,000*',
    image: macbookProImg,
    specs: [
      'Display: (16.2″) Liquid Retina XDR display',
      'Processor: (Intel, M1 & M2)',
      'Cores: 12-Core CPU 38-Core GPU',
      'Storage: 512GB/1TB/2TB/4TB/8TB',
    ],
  },
];

const TrendingProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % trendingProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + trendingProducts.length) % trendingProducts.length);
  };

  const visibleProducts = [
    trendingProducts[currentIndex],
    trendingProducts[(currentIndex + 1) % trendingProducts.length],
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-coral">Trending</span>Rental Products
        </h2>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 gap-8 px-8">
            {visibleProducts.map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="bg-gray-50 p-8 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full max-w-[200px] h-48 object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary mb-2">{product.name}</h3>
                    <p className="text-coral font-semibold mb-4">Starts from {product.price}</p>
                    
                    <Button className="bg-coral hover:bg-coral/90 text-primary-foreground rounded-full px-6 py-2 text-sm mb-4">
                      Enquire now
                    </Button>

                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant="outline"
                      className="mt-4 border-coral text-coral hover:bg-coral hover:text-primary-foreground rounded-full px-6 py-2 text-sm"
                    >
                      Enquire now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
