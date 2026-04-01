import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
 

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-[#2DAAEF] transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#2DAAEF] transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('partners')}
              className="text-gray-700 hover:text-[#2DAAEF] transition-colors font-medium"
            >
              Partners
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#2DAAEF] transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#2DAAEF] text-white px-6 py-2 rounded-full hover:bg-[#1e88cc] transition-colors shadow-md"
            >
              Contact Us
            </button>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3 animate-fade-in">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-[#2DAAEF] transition-colors font-medium text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#2DAAEF] transition-colors font-medium text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('partners')}
              className="text-gray-700 hover:text-[#2DAAEF] transition-colors font-medium text-left"
            >
              Partners
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#2DAAEF] transition-colors font-medium text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#2DAAEF] text-white px-6 py-2 rounded-full hover:bg-[#1e88cc] transition-colors shadow-md text-left"
            >
              Contact Us
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
