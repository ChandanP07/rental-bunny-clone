import itSoftwareIcon from '@/assets/industries/it-software.png';
import manufacturingIcon from '@/assets/industries/manufacturing.png';
import mediaProductionIcon from '@/assets/industries/media-production.png';
import educationIcon from '@/assets/industries/education.png';
import healthcareIcon from '@/assets/industries/healthcare.png';
import financeIcon from '@/assets/industries/finance.png';

const industries = [
  { name: 'IT & Software', icon: itSoftwareIcon },
  { name: 'Manufacturing', icon: manufacturingIcon },
  { name: 'Media & Production', icon: mediaProductionIcon },
  { name: 'Education', icon: educationIcon },
  { name: 'Healthcare', icon: healthcareIcon },
  { name: 'Finance', icon: financeIcon },
];

const IndustriesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-coral">Industries</span>We Serve
        </h2>

        {/* Marquee Container */}
        <div className="overflow-hidden">
          <div className="flex gap-12 justify-center flex-wrap md:flex-nowrap">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="w-20 h-20 flex items-center justify-center">
                  <img
                    src={industry.icon}
                    alt={industry.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-medium text-secondary text-center">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
