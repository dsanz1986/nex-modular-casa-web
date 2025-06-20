
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

const ModelsSection = () => {
  const models = [
    {
      name: "Nex Natura",
      icon: "🌿",
      features: [
        "Estructura de acero galvanizado + aislamiento EPS",
        "Ideal para vivir todo el año",
        "Alta eficiencia y distribución personalizable",
        "Entrega en 3-4 meses",
        "Transporte e instalación incluidos"
      ],
      image: "/lovable-uploads/c6c6f354-9983-4867-82ff-da049a835f66.png",
      pdfPath: "/ficha-tecnica-nex-natura.pdf"
    },
    {
      name: "Nex Nido",
      icon: "🌿",
      features: [
        "Estructura de acero galvanizado + aislamiento EPS",
        "Ideal como segunda residencia",
        "Compacta, eficiente y versátil",
        "Entrega en 3-4 meses",
        "Transporte e instalación incluidos"
      ],
      image: "/lovable-uploads/48c4a309-3d86-476f-8aa9-b0c036f4377c.png",
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
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <Card key={model.name} className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-slide-up bg-white rounded-3xl overflow-hidden ${index === 1 ? 'delay-200' : ''}`}>
              <div className="relative overflow-hidden">
                <img 
                  src={model.image}
                  alt={`Casa modular ${model.name}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-2xl">{model.icon}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
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
