
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-nex-text text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-playfair text-nex-primary mb-4">
              Nex Modular Homes
            </h3>
            <p className="text-white/80 font-inter mb-4 leading-relaxed">
              Especialistas en casas modulares y prefabricadas en toda España. 
              Soluciones habitacionales modernas, personalizables y sostenibles.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/34611486694" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-nex-primary hover:bg-nex-primary/80 p-2 rounded-xl transition-colors duration-300 text-white font-semibold"
              >
                WhatsApp
              </a>
            </div>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-nex-primary" />
                <a href="tel:+34611486694" className="text-white/80 font-inter hover:text-white transition-colors">
                  611 48 66 94
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-nex-primary" />
                <a href="mailto:info@nexmodularhomes.com" className="text-white/80 font-inter hover:text-white transition-colors">
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
            <h4 className="text-lg font-playfair font-semibold mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2">
              <li><span className="text-white/80 font-inter hover:text-white transition-colors cursor-pointer">Casas modulares</span></li>
              <li><span className="text-white/80 font-inter hover:text-white transition-colors cursor-pointer">Instalación incluida</span></li>
              <li><span className="text-white/80 font-inter hover:text-white transition-colors cursor-pointer">Personalización</span></li>
              <li><span className="text-white/80 font-inter hover:text-white transition-colors cursor-pointer">Casa piloto visitable</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 font-inter">
            © 2024 Nex Modular Homes. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
