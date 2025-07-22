
import { useTranslation } from "react-i18next";

const AdvantagesSection = () => {
  const { t } = useTranslation();

  const advantages = [{
    icon: "🏗️",
    title: t('advantages.items.noConstruction.title'),
    description: t('advantages.items.noConstruction.description')
  }, {
    icon: "🚚",
    title: t('advantages.items.readyToInstall.title'),
    description: t('advantages.items.readyToInstall.description')
  }, {
    icon: "🎨",
    title: t('advantages.items.customizable.title'),
    description: t('advantages.items.customizable.description')
  }, {
    icon: "⚡",
    title: t('advantages.items.energyEfficient.title'),
    description: t('advantages.items.energyEfficient.description')
  }, {
    icon: "💰",
    title: t('advantages.items.fixedPrice.title'),
    description: t('advantages.items.fixedPrice.description')
  }, {
    icon: "🏠",
    title: t('advantages.items.pilotHouse.title'),
    description: t('advantages.items.pilotHouse.description')
  }];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-4">
            {t('advantages.title')}
          </h2>
          <p className="text-lg font-inter text-nex-text/80 max-w-2xl mx-auto leading-relaxed">
            {t('advantages.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className={`group p-6 rounded-3xl bg-gradient-to-br from-white to-forest-50 border border-forest-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up`} 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {advantage.icon}
              </div>
              
              <h3 className="text-xl font-playfair font-semibold text-nex-text mb-3 group-hover:text-nex-primary transition-colors duration-300">
                {advantage.title}
              </h3>
              
              <p className="text-nex-text/70 font-inter leading-relaxed">
                {advantage.description}
              </p>
              
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-nex-primary to-forest-600 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
