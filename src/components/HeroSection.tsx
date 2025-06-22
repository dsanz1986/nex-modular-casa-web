
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Home, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-forest-50 via-white to-forest-100 overflow-hidden pt-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-forest-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-forest-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="text-center lg:text-left animate-fade-in">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-nex-primary/10 text-nex-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Tu hogar perfecto te espera
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-nex-text leading-tight">
              Empieza una nueva forma de <span className="text-nex-primary font-playfair relative">
                vivir
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-nex-primary/20 -z-10 rounded-lg"></div>
              </span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl font-inter text-nex-text/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Diseña un hogar pensado para ti, sin obra y sin líos. Nosotros te acompañamos.
          </p>
          
          {/* Características destacadas */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-nex-primary" />
              <span className="text-sm font-inter text-nex-text">Sin obra necesaria</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-nex-primary" />
              <span className="text-sm font-inter text-nex-text">Precio sin sorpresas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-nex-primary" />
              <span className="text-sm font-inter text-nex-text">Alta eficiencia</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-nex-primary" />
              <span className="text-sm font-inter text-nex-text">Personalizable</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-nex-primary hover:bg-nex-primary/90 text-white px-8 py-4 text-lg font-inter font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={scrollToContact}
            >
              <Home className="w-5 h-5 mr-2" />
              Quiero saber más
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-nex-primary text-nex-primary hover:bg-nex-primary hover:text-white px-8 py-4 text-lg font-inter font-semibold rounded-2xl transition-all duration-300"
              onClick={() => window.open('https://wa.me/34611486694', '_blank')}
            >
              Contacta por WhatsApp
            </Button>
          </div>
        </div>
        
        {/* Hero image mejorada */}
        <div className="relative animate-slide-up">
          {/* Marco decorativo */}
          <div className="absolute -inset-4 bg-gradient-to-r from-nex-primary to-forest-400 rounded-3xl opacity-20 blur-xl"></div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-nex-text/30 via-transparent to-transparent z-10"></div>
            
            <img 
              src="/lovable-uploads/c6b8fce4-da6d-4caa-ab79-76c00abf4713.png"
              alt="Casa modular moderna Nex Modular Homes"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            
            {/* Badge de calidad */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg z-20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-inter font-semibold text-nex-text">Calidad Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator mejorado */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-inter text-nex-primary font-medium">Descubre más</span>
          <ArrowDown className="w-6 h-6 text-nex-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
