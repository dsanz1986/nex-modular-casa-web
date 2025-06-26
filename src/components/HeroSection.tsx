
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Home, CheckCircle } from "lucide-react";
import HeroImageCarousel from "./HeroImageCarousel";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero carousel de fondo */}
      <div className="absolute inset-0 z-0">
        <HeroImageCarousel />
      </div>
      
      {/* Overlay para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Hero content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Tu hogar perfecto te espera
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight">
              Empieza una nueva forma de <span className="text-nex-primary font-playfair relative">
                vivir
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-nex-primary/30 -z-10 rounded-lg"></div>
              </span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl font-inter mb-8 max-w-2xl mx-auto leading-relaxed text-white/90">
            Diseña un hogar pensado para ti, sin obra y sin líos. Nosotros te acompañamos.
          </p>
          
          {/* Características destacadas */}
          <div className="grid grid-cols-2 gap-4 mb-8 max-w-lg mx-auto">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <CheckCircle className="w-5 h-5 text-nex-primary" />
              <span className="text-sm font-inter">Sin obra necesaria</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <CheckCircle className="w-5 h-5 text-nex-primary" />
              <span className="text-sm font-inter">Precio sin sorpresas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <CheckCircle className="w-5 h-5 text-nex-primary" />
              <span className="text-sm font-inter">Alta eficiencia</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <CheckCircle className="w-5 h-5 text-nex-primary" />
              <span className="text-sm font-inter">Personalizable</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              className="border-2 border-white text-white hover:bg-white hover:text-nex-text px-8 py-4 text-lg font-inter font-semibold rounded-2xl transition-all duration-300 bg-white/10 backdrop-blur-sm"
              onClick={() => window.open('https://wa.me/34611486694', '_blank')}
            >
              Contacta por WhatsApp
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center gap-3 group cursor-pointer" 
             onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="bg-white/20 backdrop-blur-md rounded-full p-4 shadow-lg border border-white/30 group-hover:bg-white/30 transition-all duration-300">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-inter text-white font-medium">Descubre más</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-all duration-300">
                <ArrowDown className="w-4 h-4 text-white animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
