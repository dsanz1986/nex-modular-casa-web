
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const PilotHouseSection = () => {
  const handleWhatsApp = () => {
    const message = "Hola, me gustaría programar una visita a la casa piloto en Campo Real. ¿Cuándo sería posible?";
    window.open(`https://wa.me/34611486694?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brand-600 to-forest-700 text-white relative overflow-hidden">
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
            
            <p className="text-xl mb-8 text-brand-100">
              Ven a conocer nuestra casa piloto en Campo Real (Madrid). 
              Descubre cómo se siente vivir en una casa prefabricada de diseño moderno y eficiente.
            </p>
            
            <Button 
              size="lg"
              className="bg-white text-brand-700 hover:bg-brand-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-8"
              onClick={handleWhatsApp}
            >
              Escríbenos por WhatsApp
            </Button>
            
            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-200" />
                <span className="text-brand-100">P.º de Pozuelo, 24, 28510 Campo Real, Madrid</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-200" />
                <a href="tel:+34611486694" className="text-brand-100 hover:text-white transition-colors">
                  611 48 66 94
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-200" />
                <a href="mailto:info@nexmodularhomes.com" className="text-brand-100 hover:text-white transition-colors">
                  info@nexmodularhomes.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=450&fit=crop&crop=center"
                alt="Casa piloto Nex Modular Homes en Campo Real"
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white text-forest-700 px-6 py-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-brand-600">📍</div>
              <div className="text-sm font-semibold">Casa Piloto</div>
              <div className="text-xs">Campo Real, Madrid</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotHouseSection;
