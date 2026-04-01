import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2DAAEF] rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#2DAAEF] rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-block px-4 py-2 bg-[#2DAAEF]/10 rounded-full">
              <span className="text-[#2DAAEF] font-semibold text-sm">
                Your Trusted IT Partner WTB trading
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Complete IT Solutions for Your Business in Ethiopia
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              From premium IT equipment to comprehensive networking solutions,
              we deliver excellence in technology import, installation, and support.
              any where in addis Ababa Ethiopia
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#2DAAEF] flex-shrink-0" size={24} />
                <span className="text-gray-700">Premium IT Equipment Import & Distribution</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#2DAAEF] flex-shrink-0" size={24} />
                <span className="text-gray-700">Professional Installation & Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#2DAAEF] flex-shrink-0" size={24} />
                <span className="text-gray-700">CCTV & Network Infrastructure</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#2DAAEF] flex-shrink-0" size={24} />
                <span className="text-gray-700">Custom Software Development</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-[#2DAAEF] text-white px-8 py-4 rounded-full hover:bg-[#1e88cc] transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span className="font-semibold">Get Started</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-50 transition-all shadow-md border-2 border-gray-200 font-semibold">
                View Services
              </button>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/img/image.png"
                alt="IT Equipment"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl animate-float">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#2DAAEF] rounded-full flex items-center justify-center">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">10+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl animate-float delay-500">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#2DAAEF] rounded-full flex items-center justify-center">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100+</p>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
