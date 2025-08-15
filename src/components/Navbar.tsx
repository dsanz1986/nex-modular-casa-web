
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./LanguageSelector";
import { AIButton } from "@/components/ui/ai-button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { key: 'inicio', href: '/', section: 'hero' },
    { key: 'nosotros', href: '/', section: 'nosotros' },
    { key: 'modelos', href: '/', section: 'modelos' },
    { key: 'ventajas', href: '/', section: 'ventajas' },
    { key: 'casaPiloto', href: '/', section: 'casa-piloto' },
    { key: 'contacto', href: '/', section: 'contacto' }
  ];

  const handleNavClick = (section: string) => {
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${section}`;
      return;
    }
    
    // If on home page, scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-forest-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-nex-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-playfair font-bold text-xl text-nex-text">
              Nex Modular Homes
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.section)}
                className="text-nex-text hover:text-nex-primary transition-colors duration-200 font-medium"
              >
                {t(`navbar.${item.key}`)}
              </button>
            ))}
            
            <Link to="/configurador">
              <AIButton className="px-6 py-2 text-sm">
                Diseña tu casa
              </AIButton>
            </Link>
            
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-nex-text hover:text-nex-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-forest-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.section)}
                  className="text-left text-nex-text hover:text-nex-primary transition-colors duration-200 font-medium py-2"
                >
                  {t(`navbar.${item.key}`)}
                </button>
              ))}
              
              <Link to="/configurador" onClick={() => setIsOpen(false)}>
                <AIButton className="w-full mt-4">
                  Diseña tu casa
                </AIButton>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
