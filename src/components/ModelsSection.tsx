
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Star, Clock, Home } from "lucide-react";

const ModelsSection = () => {
  const models = [
    {
      name: "Nex Natura",
      description: "Vive con diseño, estilo y eficiencia",
      dimensions: "90 m² totales | 72 m² habitables + 18 m² de porche",
      icon: "🌿",
      originalPrice: "44.990€",
      offerPrice: "39.990€",
      features: [
        "Estructura de acero galvanizado + aislamiento EPS",
        "Ideal para vivir todo el año",
        "Alta eficiencia y distribución personalizable",
        "Entrega en 3-4 meses",
        "Transporte e instalación incluidos"
      ],
      pdfPath: "/ficha-tecnica-nex-natura.pdf"
    },
    {
      name: "Nex Nido",
      description: "Compacta, versátil y de gran eficiencia",
      dimensions: "36 m² habitables + 18 m² de porche (opcional)",
      icon: "🌿",
      originalPrice: "24.990€",
      offerPrice: "19.990€",
      features: [
        "Estructura de acero galvanizado + aislamiento EPS",
        "Ideal como segunda residencia",
        "Compacta, eficiente y versátil",
        "Entrega en 3-4 meses",
        "Transporte e instalación incluidos"
      ],
      pdfPath: "/ficha-tecnica-nex-nido.pdf"
    }
  ];

  const handleDownloadPDF = (modelName: string, pdfPath: string) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `ficha-tecnica-${modelName.toLowerCase().replace(' ', '-')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-forest-50 to-forest-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-4">
            Modelos disponibles
          </h2>
          <p className="text-lg font-inter text-nex-text/80 max-w-2xl mx-auto leading-relaxed">
            Descubre nuestros modelos de casas modulares, diseñados para adaptarse a tus necesidades y estilo de vida.
          </p>
          
          {/* Oferta especial banner */}
          <div className="mt-8 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-2xl inline-flex items-center gap-3 shadow-lg animate-pulse">
            <Star className="w-5 h-5" />
            <span className="font-semibold font-inter">¡OFERTA ESPECIAL LIMITADA!</span>
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <Card key={model.name} className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-slide-up bg-white rounded-3xl overflow-hidden relative ${index === 1 ? 'delay-200' : ''}`}>
              {/* Etiqueta de oferta */}
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10 shadow-lg">
                ¡OFERTA!
              </div>
              
              {/* Header con icono en lugar de imagen */}
              <div className="relative bg-gradient-to-br from-forest-100 to-forest-200 p-8">
                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-full p-6 shadow-lg">
                    <Home className="w-12 h-12 text-nex-primary" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-2xl">{model.icon}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* Título y descripción */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-playfair font-bold text-nex-text mb-2">
                    {model.name}
                  </h3>
                  <p className="text-lg font-inter text-nex-primary font-semibold mb-2">
                    {model.description}
                  </p>
                  <p className="text-sm font-inter text-nex-text/70">
                    {model.dimensions}
                  </p>
                </div>

                {/* Precios centrados y destacados */}
                <div className="text-center mb-6 bg-gradient-to-r from-forest-50 to-forest-100 rounded-2xl p-6 border border-forest-200">
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <span className="text-xl text-gray-500 line-through font-inter font-medium">
                      {model.originalPrice}
                    </span>
                    <span className="text-4xl font-bold text-nex-primary font-playfair">
                      {model.offerPrice}
                    </span>
                  </div>
                  <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2 rounded-xl text-sm font-medium inline-flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Reservas antes del 31 de Julio
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-nex-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-nex-text font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-nex-primary hover:bg-nex-primary/90 text-white font-inter font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => handleDownloadPDF(model.name, model.pdfPath)}
                >
                  <Download size={18} />
                  Descargar ficha técnica
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
