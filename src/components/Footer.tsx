import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2DAAEF] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2DAAEF] to-[#1e88cc] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">WT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Wondmneh Tsegaye</h3>
                <p className="text-sm text-gray-400">Import & IT Solution</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner for premium IT equipment, networking solutions,
              and professional technology services. Excellence delivered since 2014.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2DAAEF] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2DAAEF] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2DAAEF] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2DAAEF] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#2DAAEF] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#2DAAEF] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#partners" className="text-gray-400 hover:text-[#2DAAEF] transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#2DAAEF] transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="text-[#2DAAEF] flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">+251-XXX-XXX-XXX</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-[#2DAAEF] flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">info@wondmnehit.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-[#2DAAEF] flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Wondmneh Tsegaye Import & IT Solution. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#2DAAEF] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2DAAEF] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
