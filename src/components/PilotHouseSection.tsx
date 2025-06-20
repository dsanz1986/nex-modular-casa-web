
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const PilotHouseSection = () => {
  const handleWhatsApp = () => {
    const message = "Hola, me gustaría programar una visita a la casa piloto en Campo Real. ¿Cuándo sería posible?";
    window.open(`https://wa.me/34611486694?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/iUWkZ5LaFUCkBY417', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-nex-primary to-forest-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              ¿Quieres ver una casa modular en persona?
            </h2>
            
            <p className="text-xl mb-8 font-inter text-white/90 leading-relaxed">
              Ven a conocer nuestra casa piloto en Campo Real (Madrid). 
              Descubre cómo se siente vivir en una casa prefabricada de diseño moderno y eficiente.
            </p>
            
            <Button 
              size="lg"
              className="bg-white text-nex-primary hover:bg-white/90 px-8 py-4 text-lg font-inter font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-8"
              onClick={handleWhatsApp}
            >
              Solicita tu cita por WhatsApp
            </Button>
            
            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white/80" />
                <span className="font-inter text-white/90">P.º de Pozuelo, 24, 28510 Campo Real, Madrid</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/80" />
                <a href="tel:+34611486694" className="font-inter text-white/90 hover:text-white transition-colors">
                  611 48 66 94
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/80" />
                <a href="mailto:info@nexmodularhomes.com" className="font-inter text-white/90 hover:text-white transition-colors">
                  info@nexmodularhomes.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/c6c6f354-9983-4867-82ff-da049a835f66.png"
                alt="Casa piloto Nex Modular Homes en Campo Real"
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            {/* Floating badge - now clickable */}
            <div 
              className="absolute -bottom-6 -right-6 bg-white text-nex-text px-6 py-4 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={handleMapClick}
            >
              <div className="text-2xl font-bold text-nex-primary">📍</div>
              <div className="text-sm font-playfair font-semibold">Casa Piloto</div>
              <div className="text-xs font-inter">Campo Real, Madrid</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotHouseSection;
