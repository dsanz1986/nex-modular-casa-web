
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
                viviendas modulares móviles y expandibles por toda España. Nuestras viviendas 
                no requieren cimentación ni obras complejas.
              </p>
              
              <p>
                Estaremos contigo en cada paso, desde la elección del modelo, pasando por la personalización, hasta la entrega final.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
