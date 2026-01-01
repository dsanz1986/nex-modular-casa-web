import { useTranslation } from "react-i18next";
import { Target, Scale, Settings, Eye, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            {t("nexBase.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("nexBase.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("nexBase.description")}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(benefit.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(benefit.descKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Price Card + Why Essential */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Price Card */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <CardContent className="p-8 relative">
              <div className="flex items-center gap-2 mb-4">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">{t("nexBase.included")}</span>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-foreground mb-3">
                {t("nexBase.price")}
              </div>
              <p className="text-muted-foreground">
                {t("nexBase.priceDescription")}
              </p>
            </CardContent>
          </Card>

          {/* Why Essential */}
          <Card className="border-border/50 bg-card/80">
            <CardContent className="p-8 flex flex-col justify-center h-full">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {t("nexBase.whyEssentialTitle")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("nexBase.whyEssential")}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="aspect-square rounded-lg overflow-hidden group cursor-pointer"
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
