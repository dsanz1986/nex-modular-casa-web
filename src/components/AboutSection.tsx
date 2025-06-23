
import { MapPin, Sparkles, Home } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/95729307-fe95-498b-8dc6-99da387641ff.png"
                alt="Interior casa modular Nex"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-nex-primary text-white px-6 py-3 rounded-2xl font-inter font-semibold shadow-lg">
              +50 casas entregadas
            </div>
          </div>
          
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-6">
              ¿Quiénes somos?
            </h2>
            
            <div className="space-y-4 text-nex-text font-inter text-lg leading-relaxed">
              <p>
                En <span className="font-semibold text-nex-primary">Nex Modular Homes</span> distribuimos 
                casas modulares expandibles por toda España. Nuestras viviendas 
                no requieren cimentación ni obras complejas.
              </p>
              
              <p>
                Estaremos contigo en cada paso, desde la elección del modelo, pasando por la personalización, hasta la entrega final.
              </p>
              
              {/* Nueva card de visita rediseñada */}
              <div className="relative mt-8">
                <div className="bg-gradient-to-br from-nex-primary via-nex-primary to-forest-600 rounded-3xl p-8 text-white shadow-2xl overflow-hidden relative">
                  {/* Decoraciones de fondo */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                            <Home className="w-6 h-6 text-white" />
                          </div>
                          <div className="bg-white/10 px-3 py-1 rounded-full">
                            <span className="text-sm font-semibold">Casa Piloto</span>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-playfair font-bold mb-3">
                          Visita nuestra casa piloto única en España
                        </h3>
                        
                        <p className="text-white/90 font-medium text-lg leading-relaxed">
                          Descubre cómo es vivir en una casa modular de primera calidad. Te invitamos a experimentar el futuro de la vivienda.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <a 
                        href="https://maps.app.goo.gl/iUWkZ5LaFUCkBY417" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-nex-primary px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                      >
                        <MapPin className="w-5 h-5" />
                        Ven a visitarnos
                      </a>
                      
                      <div className="hidden sm:flex items-center gap-2 text-white/80">
                        <Sparkles className="w-5 h-5" />
                        <span className="text-sm font-medium">Experiencia única</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
