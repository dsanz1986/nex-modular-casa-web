
import { Palette, Home, Plus, Settings, DoorOpen, Eye, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PersonalizationSection = () => {
  const interiorFeatures = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Distribución interior personalizable",
      description: "Adapta los espacios a tu estilo de vida"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Suelo interior a tu gusto",
      description: "Elige entre múltiples opciones de pavimento"
    },
    {
      icon: <Plus className="w-6 h-6" />,
      title: "Baño adicional",
      description: "Posibilidad de añadir un segundo baño"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Revestimiento interior",
      description: "Selecciona el acabado que más te guste"
    }
  ];

  const exteriorFeatures = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Ventanas extra",
      description: "Añade más luz natural a tu hogar"
    },
    {
      icon: <DoorOpen className="w-6 h-6" />,
      title: "Tipos de puerta",
      description: "Distintas opciones de puertas a elegir"
    },
    {
      icon: <Plus className="w-6 h-6" />,
      title: "Puertas adicionales",
      description: "Más accesos para mayor comodidad"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Revestimiento exterior",
      description: "El acabado exterior que tú quieras"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-forest-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-4">
            Personalización a tu medida
          </h2>
          <p className="text-lg font-inter text-nex-text/80 max-w-2xl mx-auto leading-relaxed">
            Haz tu casa única. Personaliza cada detalle interior y exterior para crear el hogar de tus sueños.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personalización Interior */}
          <div className="animate-slide-up">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-nex-primary/10 text-nex-primary px-6 py-3 rounded-2xl mb-4">
                <Home className="w-6 h-6" />
                <span className="font-semibold font-inter">Personalización Interior</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {interiorFeatures.map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-nex-primary/10 p-3 rounded-xl flex-shrink-0 group-hover:bg-nex-primary/20 transition-colors">
                        <div className="text-nex-primary">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-inter font-semibold text-nex-text mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-nex-text/70 font-inter">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Imagen de apoyo para interior */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/95729307-fe95-498b-8dc6-99da387641ff.png"
                alt="Interior personalizable casa modular"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Personalización Exterior */}
          <div className="animate-slide-up delay-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-forest-200/50 text-forest-700 px-6 py-3 rounded-2xl mb-4">
                <Wrench className="w-6 h-6" />
                <span className="font-semibold font-inter">Personalización Exterior</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {exteriorFeatures.map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-forest-200/50 p-3 rounded-xl flex-shrink-0 group-hover:bg-forest-200/70 transition-colors">
                        <div className="text-forest-700">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-inter font-semibold text-nex-text mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-nex-text/70 font-inter">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Imagen de apoyo para exterior */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/c6b8fce4-da6d-4caa-ab79-76c00abf4713.png"
                alt="Exterior personalizable casa modular"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-nex-primary to-forest-600 rounded-3xl p-8 text-white shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              ¿Listo para personalizar tu hogar?
            </h3>
            <p className="text-lg font-inter mb-6 opacity-90">
              Nuestro equipo te ayudará a diseñar la casa modular perfecta para ti
            </p>
            <button 
              className="bg-white text-nex-primary px-8 py-4 rounded-2xl font-inter font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Empezar mi personalización
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizationSection;
