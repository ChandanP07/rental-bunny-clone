import handshakeIcon from '@/assets/icons/handshake.png';
import reputationIcon from '@/assets/icons/reputation.png';
import experienceIcon from '@/assets/icons/experience.png';
import laptopIcon from '@/assets/icons/laptop.png';

const stats = [
  {
    icon: handshakeIcon,
    number: '130',
    label: 'Businesses Supported',
  },
  {
    icon: reputationIcon,
    number: '99%',
    label: 'Customer Satisfaction Rate',
  },
  {
    icon: experienceIcon,
    number: '15',
    label: 'Years of Experience',
  },
  {
    icon: laptopIcon,
    number: '10987+',
    label: 'Products Rented so far',
  },
];

const StatsBar = () => {
  return (
    <section className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-secondary-foreground/20">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4 justify-center px-4">
              <img src={stat.icon} alt="" className="w-12 h-12 object-contain" />
              <div>
                <div className="text-2xl md:text-3xl font-bold text-coral">{stat.number}</div>
                <div className="text-sm text-secondary-foreground/90">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
