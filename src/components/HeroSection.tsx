
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Home, CheckCircle, Play } from "lucide-react";

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
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-nex-primary/10 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <div className="text-center lg:text-left animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-nex-primary/10 to-forest-200/30 text-nex-primary px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-nex-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Tu hogar perfecto te espera
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-nex-text leading-tight mb-6">
              Empieza una nueva forma de{" "}
              <span className="text-nex-primary font-playfair relative inline-block">
                vivir
                <div className="absolute -bottom-3 left-0 w-full h-4 bg-gradient-to-r from-nex-primary/30 to-forest-400/30 -z-10 rounded-lg transform -rotate-1"></div>
                <div className="absolute -bottom-2 left-1 w-full h-3 bg-nex-primary/20 -z-10 rounded-lg transform rotate-1"></div>
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl font-inter text-nex-text/80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            Diseña un hogar pensado para ti, sin obra y sin líos. 
            <span className="font-semibold text-nex-primary"> Nosotros te acompañamos.</span>
          </p>
          
          {/* Características destacadas con mejor diseño */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            {[
              { text: "Sin obra necesaria", highlight: true },
              { text: "Precio sin sorpresas", highlight: false },
              { text: "Alta eficiencia", highlight: false },
              { text: "Personalizable", highlight: true }
            ].map((item, index) => (
              <div key={index} className={`flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 hover:bg-white/50 hover:shadow-lg ${item.highlight ? 'bg-white/30 shadow-md' : ''}`}>
                <div className="w-8 h-8 bg-nex-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-inter text-nex-text font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-nex-primary to-forest-400 hover:from-nex-primary/90 hover:to-forest-400/90 text-white px-10 py-6 text-lg font-inter font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              onClick={scrollToContact}
            >
              <Home className="w-6 h-6 mr-3" />
              Quiero saber más
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-nex-primary text-nex-primary hover:bg-nex-primary hover:text-white px-10 py-6 text-lg font-inter font-semibold rounded-2xl transition-all duration-300 bg-white/50 backdrop-blur-sm hover:shadow-xl"
              onClick={() => window.open('https://wa.me/34611486694', '_blank')}
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Contacta por WhatsApp
            </Button>
          </div>
        </div>
        
        {/* Hero images mejoradas con layout dinámico */}
        <div className="relative animate-slide-up">
          {/* Marco decorativo principal */}
          <div className="absolute -inset-6 bg-gradient-to-r from-nex-primary via-forest-400 to-nex-primary rounded-3xl opacity-20 blur-2xl animate-pulse"></div>
          
          {/* Grid de imágenes */}
          <div className="relative grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
            {/* Imagen principal grande */}
            <div className="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-t from-nex-text/40 via-transparent to-transparent z-10"></div>
              <img 
                src="/lovable-uploads/c6b8fce4-da6d-4caa-ab79-76c00abf4713.png"
                alt="Casa modular moderna Nex Modular Homes"
                className="w-full h-[280px] md:h-[320px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Badge de calidad mejorado */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl z-20 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse"></div>
                  <span className="text-sm font-inter font-bold text-nex-text">Calidad Premium</span>
                </div>
              </div>

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                  <Play className="w-8 h-8 text-nex-primary ml-1" />
                </div>
              </div>
            </div>
            
            {/* Imagen secundaria izquierda */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-t from-nex-text/30 via-transparent to-transparent z-10"></div>
              <img 
                src="/lovable-uploads/48c4a309-3d86-476f-8aa9-b0c036f4377c.png"
                alt="Interior casa modular"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Tag flotante */}
              <div className="absolute bottom-4 left-4 bg-nex-primary/90 backdrop-blur-sm rounded-xl p-2 z-20">
                <span className="text-xs font-inter font-semibold text-white">Interior</span>
              </div>
            </div>
            
            {/* Imagen secundaria derecha */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-t from-nex-text/30 via-transparent to-transparent z-10"></div>
              <img 
                src="/lovable-uploads/2050482f-8056-4911-89a5-9ab6b7d0fe28.png"
                alt="Exterior casa modular"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Tag flotante */}
              <div className="absolute bottom-4 right-4 bg-forest-400/90 backdrop-blur-sm rounded-xl p-2 z-20">
                <span className="text-xs font-inter font-semibold text-white">Jardín</span>
              </div>
            </div>
          </div>

          {/* Elementos decorativos flotantes */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-nex-primary/20 to-forest-400/20 rounded-full animate-bounce"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-forest-400/20 to-nex-primary/20 rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>
      
      {/* Scroll indicator mejorado */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-inter text-nex-primary font-semibold">Descubre más</span>
          <div className="w-8 h-8 border-2 border-nex-primary rounded-full flex items-center justify-center">
            <ArrowDown className="w-4 h-4 text-nex-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
