
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AIButton } from "@/components/ui/ai-button";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/34635559514?text=Hola,%20quiero%20información%20sobre%20las%20casas%20modulares%20móviles', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { key: 'inicio', href: '/', action: () => window.location.href = '/' },
    { key: 'nosotros', href: '/#nosotros', action: () => scrollToSection('nosotros') },
    { key: 'modelos', href: '/#modelos', action: () => scrollToSection('modelos') },
    { key: 'ventajas', href: '/#ventajas', action: () => scrollToSection('ventajas') },
    { key: 'casaPiloto', href: '/#casa-piloto', action: () => scrollToSection('casa-piloto') },
    { key: 'contacto', href: '/#contacto', action: () => scrollToSection('contacto') },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-forest-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-nex-primary to-forest-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-playfair font-bold text-nex-text">
              Nex Modular Homes
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={item.action}
                className="text-nex-text hover:text-nex-primary transition-colors duration-200 font-medium font-inter story-link"
              >
                {t(`navbar.${item.key}`)}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/configurador">
              <AIButton 
                size="sm"
                variant="default"
                className="font-semibold"
                glowEffect={true}
                showIcon={true}
                iconType="sparkles"
              >
                {t('navbar.configurator')}
              </AIButton>
            </Link>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleWhatsAppClick}
              className="border-nex-primary/30 text-nex-primary hover:bg-nex-primary/5 font-medium"
            >
              {t('navbar.whatsapp')}
            </Button>
            
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSelector />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-nex-text"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={item.action}
                  className="text-nex-text hover:text-nex-primary transition-colors duration-200 font-medium font-inter text-left py-2"
                >
                  {t(`navbar.${item.key}`)}
                </button>
              ))}
              
              <div className="pt-4 space-y-3">
                <Link to="/configurador" className="block">
                  <AIButton 
                    size="sm"
                    variant="default"
                    className="w-full font-semibold"
                    glowEffect={true}
                    showIcon={true}
                    iconType="sparkles"
                  >
                    {t('navbar.configurator')}
                  </AIButton>
                </Link>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleWhatsAppClick}
                  className="w-full border-nex-primary/30 text-nex-primary hover:bg-nex-primary/5 font-medium"
                >
                  {t('navbar.whatsapp')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
