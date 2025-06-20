
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/34611486694', '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/18ebb9ab-42b6-4096-8212-c5a33d88126e.png" 
              alt="Nex Modular Homes" 
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-nex-text hover:text-nex-primary transition-colors font-inter font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-nex-text hover:text-nex-primary transition-colors font-inter font-medium"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('modelos')}
              className="text-nex-text hover:text-nex-primary transition-colors font-inter font-medium"
            >
              Modelos
            </button>
            <button 
              onClick={() => scrollToSection('ventajas')}
              className="text-nex-text hover:text-nex-primary transition-colors font-inter font-medium"
            >
              Ventajas
            </button>
            <button 
              onClick={() => scrollToSection('casa-piloto')}
              className="text-nex-text hover:text-nex-primary transition-colors font-inter font-medium"
            >
              Casa Piloto
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-nex-text hover:text-nex-primary transition-colors font-inter font-medium"
            >
              Contacto
            </button>
          </div>

          {/* WhatsApp Button */}
          <Button 
            onClick={handleWhatsApp}
            className="bg-nex-primary hover:bg-nex-primary/90 text-white px-4 py-2 rounded-xl font-inter font-semibold"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
