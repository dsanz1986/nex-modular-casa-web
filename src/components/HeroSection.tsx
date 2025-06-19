
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-forest-50 via-white to-brand-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-forest-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-forest-900 leading-tight mb-6">
            Tu nueva casa modular en
            <span className="text-brand-600 block">España</span>
          </h1>
          
          <p className="text-lg md:text-xl text-forest-700 mb-8 max-w-2xl mx-auto lg:mx-0">
            Soluciones habitacionales modernas, sin obra, totalmente personalizables 
            y listas para instalar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={scrollToContact}
            >
              Pide información sin compromiso
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-forest-300 text-forest-700 hover:bg-forest-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              onClick={() => window.open('https://wa.me/34611486694', '_blank')}
            >
              WhatsApp
            </Button>
          </div>
        </div>
        
        {/* Hero image */}
        <div className="relative animate-slide-up">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop&crop=center"
              alt="Casa modular moderna Nex Modular Homes"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/20 to-transparent"></div>
          </div>
          
          {/* Floating card with key benefits */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-brand-100">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-brand-500 rounded-full"></div>
              <span className="text-sm font-medium text-forest-700">Sin obra necesaria</span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-3 h-3 bg-brand-500 rounded-full"></div>
              <span className="text-sm font-medium text-forest-700">Precio cerrado</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-forest-600" />
      </div>
    </section>
  );
};

export default HeroSection;
