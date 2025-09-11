
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [isRouterReady, setIsRouterReady] = useState(false);
  
  // Custom TikTok icon component
  const TikTokIcon = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
  
  // Use useLocation to check if router context is available
  try {
    const location = useLocation();
    useEffect(() => {
      if (location) {
        setIsRouterReady(true);
      }
    }, [location]);
  } catch (error) {
    console.log("Router context not available yet");
  }

  return (
    <footer className="bg-nex-text text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-playfair text-nex-primary mb-4">
              {t('footer.company')}
            </h3>
            <p className="text-white/80 font-inter mb-4 leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Social Media Section */}
            <div className="mb-6">
              <h4 className="text-lg font-playfair font-semibold mb-3 text-white">
                {t('footer.followUs')}
              </h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/nexmodularhomes/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 p-3 rounded-xl transition-all duration-300 text-white"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@nexmodularhomes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="group bg-white/10 hover:bg-black p-3 rounded-xl transition-all duration-300 text-white"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/34611486694" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="group bg-white/10 hover:bg-green-500 p-3 rounded-xl transition-all duration-300 text-white"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-nex-primary" />
                <a 
                  href="tel:+34611486694" 
                  className="text-white/80 font-inter hover:text-white transition-colors"
                >
                  611 48 66 94
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-nex-primary" />
                <a 
                  href="mailto:info@nexmodularhomes.com" 
                  className="text-white/80 font-inter hover:text-white transition-colors"
                >
                  info@nexmodularhomes.com
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-nex-primary mt-1" />
                <span className="text-white/80 font-inter">
                  P.º de Pozuelo, 24<br />
                  28510 Campo Real, Madrid
                </span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-white/80 font-inter hover:text-white transition-colors cursor-pointer">
                  {t('footer.servicesList.modularHomes')}
                </span>
              </li>
              <li>
                <span className="text-white/80 font-inter hover:text-white transition-colors cursor-pointer">
                  {t('footer.servicesList.installationIncluded')}
                </span>
              </li>
              <li>
                <span className="text-white/80 font-inter hover:text-white transition-colors cursor-pointer">
                  {t('footer.servicesList.personalization')}
                </span>
              </li>
              <li>
                <span className="text-white/80 font-inter hover:text-white transition-colors cursor-pointer">
                  {t('footer.servicesList.pilotHouse')}
                </span>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li>
                {isRouterReady ? (
                  <Link 
                    to="/aviso-legal" 
                    className="text-white/80 font-inter hover:text-white transition-colors"
                  >
                    {t('footer.legalLinks.legalNotice')}
                  </Link>
                ) : (
                  <a 
                    href="/aviso-legal" 
                    className="text-white/80 font-inter hover:text-white transition-colors"
                  >
                    {t('footer.legalLinks.legalNotice')}
                  </a>
                )}
              </li>
              <li>
                {isRouterReady ? (
                  <Link 
                    to="/politica-privacidad" 
                    className="text-white/80 font-inter hover:text-white transition-colors"
                  >
                    {t('footer.legalLinks.privacy')}
                  </Link>
                ) : (
                  <a 
                    href="/politica-privacidad" 
                    className="text-white/80 font-inter hover:text-white transition-colors"
                  >
                    {t('footer.legalLinks.privacy')}
                  </a>
                )}
              </li>
              <li>
                {isRouterReady ? (
                  <Link 
                    to="/politica-cookies" 
                    className="text-white/80 font-inter hover:text-white transition-colors"
                  >
                    {t('footer.legalLinks.cookies')}
                  </Link>
                ) : (
                  <a 
                    href="/politica-cookies" 
                    className="text-white/80 font-inter hover:text-white transition-colors"
                  >
                    {t('footer.legalLinks.cookies')}
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 font-inter">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
