import { Award, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2DAAEF] to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <span className="text-[#2DAAEF] font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Leading IT Solutions Provider
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Wondmneh Tsegaye Import and IT Solution has been at the forefront
              of delivering cutting-edge technology solutions for over a decade.
              We specialize in importing premium IT equipment from world-renowned
              brands and providing comprehensive technology services.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our commitment to excellence, combined with our technical expertise,
              makes us the preferred partner for businesses seeking reliable IT
              solutions and support.
            </p>

            <div className="grid grid-cols-1 gap-6 pt-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2DAAEF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="text-[#2DAAEF]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Quality Assurance</h3>
                  <p className="text-gray-600">Only premium, certified IT equipment from trusted global brands</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2DAAEF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="text-[#2DAAEF]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Customer-Focused</h3>
                  <p className="text-gray-600">Tailored solutions that meet your specific business needs</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2DAAEF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="text-[#2DAAEF]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Fast & Reliable</h3>
                  <p className="text-gray-600">Quick turnaround times with professional installation and support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="img/q1.jpg"
                  alt="Office"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Technology"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Networking"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="img/q2.jpg"
                  alt="Computers"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
