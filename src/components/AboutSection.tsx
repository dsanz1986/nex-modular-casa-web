
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
                alt="Interior casa modular móvil Nex - Salón moderno con cocina integrada"
                className="w-full h-[400px] object-cover"
                width="600"
                height="400"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-nex-primary text-white px-6 py-3 rounded-2xl font-inter font-semibold shadow-lg">
              +50 casas entregadas
            </div>
          </div>
          
          {/* Content */}
          <div className="animate-slide-up">
            <header>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-6">
                Especialistas en Casas Modulares Móviles Sin Obra
              </h2>
            </header>
            
            <div className="space-y-4 text-nex-text font-inter text-lg leading-relaxed">
              <p>
                En <strong className="font-semibold text-nex-primary">Nex Modular Homes</strong> somos 
                especialistas en <strong>viviendas modulares móviles transportables</strong> por toda España. 
                Nuestras casas modulares no requieren cimentación ni obras complejas.
              </p>
              
              <p>
                Ofrecemos <strong>casas prefabricadas móviles</strong> de alta calidad con instalación incluida. 
                Te acompañamos en todo el proceso: desde la elección del modelo y personalización, 
                hasta la entrega e instalación final en tu terreno.
              </p>

              <p>
                Con más de <strong>50 casas modulares móviles entregadas</strong> en España, 
                garantizamos calidad, rapidez y el mejor servicio postventa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
