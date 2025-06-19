
const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "🏗️",
      title: "No requieren obra ni cimentación",
      description: "Instalación rápida y limpia sin necesidad de obras complejas"
    },
    {
      icon: "🚚",
      title: "Se entregan listas para instalar",
      description: "Todo incluido: transporte, instalación y puesta en marcha"
    },
    {
      icon: "🎨",
      title: "Totalmente personalizables",
      description: "Distribución, puertas, ventanas y acabados a tu medida"
    },
    {
      icon: "⚡",
      title: "Alta eficiencia energética",
      description: "Excelente aislamiento y sistemas de climatización eficientes"
    },
    {
      icon: "💰",
      title: "Precio cerrado desde el primer momento",
      description: "Sin sorpresas ni costes ocultos en tu presupuesto"
    },
    {
      icon: "🏠",
      title: "Casa piloto disponible para visitar",
      description: "Ven a Campo Real (Madrid) y experimenta cómo se vive"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest-900 mb-4">
            ¿Por qué una casa modular?
          </h2>
          <p className="text-lg text-forest-700 max-w-2xl mx-auto">
            Ventajas de nuestras casas modulares que las convierten en la mejor opción para tu nuevo hogar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className={`group p-6 rounded-2xl bg-gradient-to-br from-white to-forest-50 border border-forest-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {advantage.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-forest-900 mb-3 group-hover:text-brand-700 transition-colors duration-300">
                {advantage.title}
              </h3>
              
              <p className="text-forest-600 leading-relaxed">
                {advantage.description}
              </p>
              
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-brand-500 to-forest-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
