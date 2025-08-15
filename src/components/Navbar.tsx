import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`bg-white border-b border-forest-200 ${className}`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-playfair font-bold text-2xl text-nex-text">
          NEX
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-nex-text hover:text-nex-primary transition-colors font-inter">
            {t('navbar.inicio')}
          </a>
          <a href="#nosotros" className="text-nex-text hover:text-nex-primary transition-colors font-inter">
            {t('navbar.nosotros')}
          </a>
          <a href="#modelos" className="text-nex-text hover:text-nex-primary transition-colors font-inter">
            {t('navbar.modelos')}
          </a>
          <Link to="/configurador" className="text-nex-text hover:text-nex-primary transition-colors font-inter">
            Diseña tu casa
          </Link>
          <a href="#ventajas" className="text-nex-text hover:text-nex-primary transition-colors font-inter">
            {t('navbar.ventajas')}
          </a>
          <a href="#casa-piloto" className="text-nex-text hover:text-nex-primary transition-colors font-inter">
            {t('navbar.casaPiloto')}
          </a>
          <a href="#contacto" className="text-nex-text hover:text-nex-primary transition-colors font-inter">
            {t('navbar.contacto')}
          </a>
        </nav>

        <Button asChild variant="outline" size="sm" className="hidden md:flex">
          <a href="https://wa.me/34644444444" target="_blank" rel="noopener noreferrer">
            {t('navbar.whatsapp')}
          </a>
        </Button>

        {/* Mobile menu button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-nex-text">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a href="#inicio" className="text-nex-text hover:text-nex-primary transition-colors font-inter block">
              {t('navbar.inicio')}
            </a>
            <a href="#nosotros" className="text-nex-text hover:text-nex-primary transition-colors font-inter block">
              {t('navbar.nosotros')}
            </a>
            <a href="#modelos" className="text-nex-text hover:text-nex-primary transition-colors font-inter block">
              {t('navbar.modelos')}
            </a>
             <Link to="/configurador" className="text-nex-text hover:text-nex-primary transition-colors font-inter block">
              Diseña tu casa
            </Link>
            <a href="#ventajas" className="text-nex-text hover:text-nex-primary transition-colors font-inter block">
              {t('navbar.ventajas')}
            </a>
            <a href="#casa-piloto" className="text-nex-text hover:text-nex-primary transition-colors font-inter block">
              {t('navbar.casaPiloto')}
            </a>
            <a href="#contacto" className="text-nex-text hover:text-nex-primary transition-colors font-inter block">
              {t('navbar.contacto')}
            </a>
            <Button variant="outline" size="sm">
              <a href="https://wa.me/34644444444" target="_blank" rel="noopener noreferrer">
                {t('navbar.whatsapp')}
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
