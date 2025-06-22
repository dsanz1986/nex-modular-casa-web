
import { MapPin, Eye, Star } from "lucide-react";

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
              
              {/* Sección destacada mejorada */}
              <div className="relative mt-8">
                <div className="bg-gradient-to-r from-nex-primary to-forest-400 p-1 rounded-3xl shadow-2xl">
                  <div className="bg-white rounded-3xl p-6 relative overflow-hidden">
                    {/* Decoración de fondo */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-nex-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-nex-primary p-3 rounded-full">
                          <Eye className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-playfair font-bold text-nex-text">
                          ¡Ven a vernos!
                        </h3>
                        <div className="flex gap-1">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </div>
                      </div>
                      
                      <p className="text-nex-text font-medium text-lg leading-relaxed mb-4">
                        ¿Quieres <span className="text-nex-primary font-bold">experimentar</span> cómo es vivir en una casa modular? 
                        <span className="bg-yellow-200 px-2 py-1 rounded-lg ml-2 font-semibold">
                          ¡Te invitamos a visitarnos!
                        </span>
                      </p>
                      
                      <div className="bg-gradient-to-r from-forest-50 to-forest-100 p-4 rounded-2xl border-l-4 border-nex-primary">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-6 h-6 text-nex-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-bold text-nex-text mb-2">
                              Nuestra casa piloto te está esperando
                            </p>
                            <a 
                              href="https://maps.app.goo.gl/iUWkZ5LaFUCkBY417" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-nex-primary hover:bg-nex-primary/90 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                              <MapPin className="w-5 h-5" />
                              Visitar en Campo Real (Madrid)
                            </a>
                          </div>
                        </div>
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
