
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ModelsSection = () => {
  const models = [
    {
      name: "Nex Natura",
      icon: "🌿",
      size: "72 m² habitables + 18 m² de porche",
      price: "Desde 39.990 €",
      features: [
        "Estructura de acero galvanizado + paneles sándwich EPS 65 mm",
        "Ideal para vivir todo el año",
        "Alta eficiencia y distribución personalizable",
        "Entrega en 3-4 meses",
        "Transporte e instalación incluidos"
      ],
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=500&h=400&fit=crop&crop=center"
    },
    {
      name: "Nex Nido",
      icon: "🌿",
      size: "36 m² habitables + 18 m² de porche opcional",
      price: "Desde 19.990 €",
      features: [
        "Estructura de acero galvanizado + aislamiento EPS",
        "Ideal como segunda residencia",
        "Compacta, eficiente y versátil",
        "Entrega en 3-4 meses",
        "Transporte e instalación incluidos"
      ],
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=500&h=400&fit=crop&crop=center"
    }
  ];

  const handleRequestInfo = (modelName: string) => {
    const message = `Hola, me interesa descargar la ficha técnica del modelo ${modelName}. ¿Podrían enviarme más información?`;
    window.open(`https://wa.me/34611486694?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-wood-50 to-forest-50">
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
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-daydream text-nex-text flex items-center justify-between">
                  {model.name}
                  <span className="text-lg font-bold text-nex-primary font-playfair">{model.price}</span>
                </CardTitle>
                <p className="text-nex-text/70 font-inter font-medium">{model.size}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-nex-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-nex-text font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-nex-primary hover:bg-nex-primary/90 text-white font-inter font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handleRequestInfo(model.name)}
                >
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
