import { useTranslation } from "react-i18next";
import { Target, Scale, Settings, Eye, Check } from "lucide-react";

const NexBaseSection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Target,
      titleKey: "nexBase.benefits.leveling.title",
      descKey: "nexBase.benefits.leveling.description"
    },
    {
      icon: Scale,
      titleKey: "nexBase.benefits.loadDistribution.title",
      descKey: "nexBase.benefits.loadDistribution.description"
    },
    {
      icon: Settings,
      titleKey: "nexBase.benefits.control.title",
      descKey: "nexBase.benefits.control.description"
    },
    {
      icon: Eye,
      titleKey: "nexBase.benefits.professional.title",
      descKey: "nexBase.benefits.professional.description"
    }
  ];

  const images = [
    "/lovable-uploads/nex-base-1.jpg",
    "/lovable-uploads/nex-base-2.jpg",
    "/lovable-uploads/nex-base-3.jpg",
    "/lovable-uploads/nex-base-4.jpg",
    "/lovable-uploads/nex-base-5.jpg"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-forest-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-4">
            {t("nexBase.title")}
          </h2>
          <p className="text-lg font-inter text-nex-text/80 max-w-3xl mx-auto leading-relaxed">
            {t("nexBase.description")}
          </p>
        </header>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-nex-primary/10 to-nex-primary/20 flex items-center justify-center">
                <benefit.icon className="w-7 h-7 text-nex-primary" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-nex-text text-center mb-2">
                {t(benefit.titleKey)}
              </h3>
              <p className="text-sm font-inter text-nex-text/70 text-center">
                {t(benefit.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Price + Why Essential Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Price Card */}
          <div className="bg-gradient-to-r from-forest-50 to-forest-100 border border-forest-200 rounded-2xl p-8 animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <Check className="w-5 h-5 text-nex-primary" />
              <span className="text-sm font-inter font-medium text-nex-primary">{t("nexBase.included")}</span>
            </div>
            <div className="text-4xl md:text-5xl font-playfair font-bold text-nex-primary mb-3">
              {t("nexBase.price")}
            </div>
            <p className="font-inter text-nex-text/80">
              {t("nexBase.priceDescription")}
            </p>
          </div>

          {/* Why Essential */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-playfair font-semibold text-nex-text mb-4">
              {t("nexBase.whyEssentialTitle")}
            </h3>
            <p className="font-inter text-nex-text/80 leading-relaxed">
              {t("nexBase.whyEssential")}
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`NEX BASE™ ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NexBaseSection;
