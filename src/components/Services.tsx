import { Monitor, Truck, Camera, Code } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'IT Equipment Import',
    description: 'Premium IT hardware from world-leading brands. Laptops, desktops, servers, and peripherals.',
    image: 'img/equipement.jpg',
  },
  {
    icon: Truck,
    title: 'Delivery & Installation ',
    description: 'Professional installation and delivery services ensuring your equipment is ready to use.',
    image: 'img/instal_deliver.png',
  },
  {
    icon: Camera,
    title: 'CCTV & Networking',
    description: 'Complete network infrastructure and security camera installation for your business.',
    image: 'img/network_installationcamera.png',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs and requirements.',
    image: 'img/software.png',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2DAAEF] to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-[#2DAAEF] font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions designed to power your business forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-[#2DAAEF] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={28} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2DAAEF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-[#2DAAEF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
