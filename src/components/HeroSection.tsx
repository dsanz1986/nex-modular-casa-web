
import { Button } from "@/components/ui/button";
import { Sparkles, Home, CheckCircle } from "lucide-react";
import HeroImageCarousel from "./HeroImageCarousel";

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
              Casas modulares móviles sin obra
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-nex-text leading-tight">
              Tu <span className="text-nex-primary font-playfair relative">
                casa modular móvil
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-nex-primary/20 -z-10 rounded-lg"></div>
              </span> sin obra ni complicaciones
            </h1>
          </div>
          
          <p className="text-lg md:text-xl font-inter text-nex-text/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Viviendas modulares móviles transportables, listas para instalar en tu terreno. Sin cimentación, sin obra, sin líos.
          </p>
          
          {/* Características destacadas */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-nex-primary" />
              <span className="text-sm font-inter text-nex-text">Sin obra necesaria</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-nex-primary" />
              <span className="text-sm font-inter text-nex-text">Instalación en pocos días</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-nex-primary" />
              <span className="text-sm font-inter text-nex-text">Totalmente transportable</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-nex-primary" />
              <span className="text-sm font-inter text-nex-text">Precio cerrado</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-nex-primary hover:bg-nex-primary/90 text-white px-8 py-4 text-lg font-inter font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={scrollToContact}
              aria-label="Solicitar información sobre casas modulares móviles"
            >
              <Home className="w-5 h-5 mr-2" />
              Quiero saber más
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-nex-primary text-nex-primary hover:bg-nex-primary hover:text-white px-8 py-4 text-lg font-inter font-semibold rounded-2xl transition-all duration-300"
              onClick={() => window.open('https://wa.me/34611486694', '_blank')}
              aria-label="Contactar por WhatsApp sobre casas modulares móviles"
            >
              Contacta por WhatsApp
            </Button>
          </div>
        </div>
        
        {/* Hero carousel */}
        <HeroImageCarousel />
      </div>
    </section>
  );
};

export default HeroSection;
