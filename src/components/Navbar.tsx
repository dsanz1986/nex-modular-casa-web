
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

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
    { key: 'configurador', href: '/configurador', section: null },
    { key: 'contacto', href: '/', section: 'contacto' }
  ];

  const handleNavClick = (item: { href: string; section: string | null }) => {
    setIsOpen(false);
    
    if (item.section === null) {
      // For configurator, just navigate
      return;
    }
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${item.section}`;
      return;
    }
    
    // If on home page, scroll to section
    const element = document.getElementById(item.section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-gradient-to-br from-forest-50 via-white to-forest-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/28645916-5ddd-46fe-946b-0e532ba73e44.png" 
              alt="Nex Modular Homes" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.section === null ? (
                <Link
                  key={item.key}
                  to={item.href}
                  className="text-nex-text hover:text-nex-primary transition-colors duration-200 font-medium"
                >
                  {t(`navbar.${item.key}`)}
                </Link>
              ) : (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item)}
                  className="text-nex-text hover:text-nex-primary transition-colors duration-200 font-medium"
                >
                  {t(`navbar.${item.key}`)}
                </button>
              )
            ))}
            
            {/* WhatsApp Phone - Desktop */}
            <a 
              href="https://wa.me/34611486694" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-nex-text hover:text-green-600 transition-colors duration-200"
            >
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span className="font-medium">611 486 694</span>
            </a>
            
            <LanguageSelector />
          </div>

          {/* Mobile top bar - Always visible elements */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* WhatsApp Phone - Mobile (always visible) */}
            <a 
              href="https://wa.me/34611486694" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-nex-text hover:text-green-600 transition-colors duration-200"
            >
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span className="font-medium text-sm">611 486 694</span>
            </a>
            
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
          <div className="lg:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.section === null ? (
                  <Link
                    key={item.key}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-left text-nex-text hover:text-nex-primary transition-colors duration-200 font-medium py-2"
                  >
                    {t(`navbar.${item.key}`)}
                  </Link>
                ) : (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item)}
                    className="text-left text-nex-text hover:text-nex-primary transition-colors duration-200 font-medium py-2"
                  >
                    {t(`navbar.${item.key}`)}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
