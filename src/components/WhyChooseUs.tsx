import creditCardsImg from '@/assets/why-us/credit-cards.png';
import nationwideImg from '@/assets/why-us/nationwide.png';
import flexibleImg from '@/assets/why-us/flexible-duration.png';
import affordableImg from '@/assets/why-us/affordable.png';
import serviceGuaranteeImg from '@/assets/why-us/service-guarantee.png';
import technicalSupportImg from '@/assets/why-us/technical-support.png';
import productUpgradeImg from '@/assets/why-us/product-upgrade.png';
import securityImg from '@/assets/why-us/security.png';
import enterpriseImg from '@/assets/why-us/enterprise.png';

const whyUsItems = [
  {
    icon: creditCardsImg,
    title: 'Get GST Credit',
    description: 'Buy for your business and get GST invoices and avail GST input on all your purchases',
  },
  {
    icon: nationwideImg,
    title: 'Nationwide presence',
    description: 'With free delivery and return shipping, our services are accessible throughout India.',
  },
  {
    icon: flexibleImg,
    title: 'Flexible Rental Duration',
    description: 'Choose what suits you best with our flexible rental durations.',
  },
  {
    icon: affordableImg,
    title: 'Affordable Prices',
    description: 'Get premium products at a pocket-friendly price.',
  },
  {
    icon: serviceGuaranteeImg,
    title: 'Best Service Guarantee',
    description: 'Our service excellence is your guarantee.',
  },
  {
    icon: technicalSupportImg,
    title: 'Technical Support',
    description: 'Get free technical support throughout your rental period.',
  },
  {
    icon: productUpgradeImg,
    title: 'Easy Product Upgrade',
    description: 'Get the best buyback value for your old device and upgrade to the latest Apple device',
  },
  {
    icon: securityImg,
    title: 'Secure Payments',
    description: '100% Safe and certified checkouts for all your transactions',
  },
  {
    icon: enterpriseImg,
    title: 'Enterprise Discounts',
    description: 'Looking to buy for your organizations? Enjoy additional discounts with bulk orders',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-coral">RentalBunny?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
