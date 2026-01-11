import iphoneImg from '@/assets/products/iphone.png';
import ipadImg from '@/assets/products/ipad.png';
import imacImg from '@/assets/products/imac.png';
import macStudioImg from '@/assets/products/mac-studio.png';
import displayImg from '@/assets/products/display.png';
import laptopImg from '@/assets/products/laptop.png';
import windowsImg from '@/assets/products/windows-desktop.png';
import printerImg from '@/assets/products/printer.png';
import storageImg from '@/assets/products/storage.png';
import editSuiteImg from '@/assets/products/edit-suite.png';

const products = [
  { name: 'iPhones', image: iphoneImg },
  { name: 'iPads', image: ipadImg },
  { name: 'iMac', image: imacImg },
  { name: 'Mac Studio & Mac Mini', image: macStudioImg },
  { name: 'Displays & Monitor', image: displayImg },
  { name: 'Laptops', image: laptopImg },
  { name: 'Windows Desktop', image: windowsImg },
  { name: 'Printers', image: printerImg },
  { name: 'Storage Solutions', image: storageImg },
  { name: 'Edit Suite', image: editSuiteImg },
];

const ProductCard = ({ product }: { product: { name: string; image: string } }) => {
  return (
    <article className="text-center cursor-pointer">
      <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-semibold text-secondary hover:text-coral transition-colors">
        {product.name}
      </h3>
    </article>
  );
};

const ProductList = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-2 text-secondary">
          Our Product List
        </h2>
        <p className="text-left text-muted-foreground mb-12">
          The latest. Take a look at what's new right now.
        </p>

        {/* Product Grid - 5 columns, 2 rows */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
