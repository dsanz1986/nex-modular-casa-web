
import { Palette, Home, Plus, Settings, DoorOpen, Eye, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PersonalizationSection = () => {
  const { t } = useTranslation();

  const interiorFeatures = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: t('personalization.interior.distribution'),
      description: t('personalization.interior.distributionDesc')
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: t('personalization.interior.flooring'),
      description: t('personalization.interior.flooringDesc')
    },
    {
      icon: <Plus className="w-6 h-6" />,
      title: t('personalization.interior.extraBath'),
      description: t('personalization.interior.extraBathDesc')
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: t('personalization.interior.coating'),
      description: t('personalization.interior.coatingDesc')
    }
  ];

  const exteriorFeatures = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: t('personalization.exterior.extraWindows'),
      description: t('personalization.exterior.extraWindowsDesc')
    },
    {
      icon: <DoorOpen className="w-6 h-6" />,
      title: t('personalization.exterior.doorTypes'),
      description: t('personalization.exterior.doorTypesDesc')
    },
    {
      icon: <Plus className="w-6 h-6" />,
      title: t('personalization.exterior.extraDoors'),
      description: t('personalization.exterior.extraDoorsDesc')
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: t('personalization.exterior.coating'),
      description: t('personalization.exterior.coatingDesc')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-forest-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-4">
            {t('personalization.title')}
          </h2>
          <p className="text-lg font-inter text-nex-text/80 max-w-2xl mx-auto leading-relaxed mb-8">
            {t('personalization.subtitle')}
          </p>
          
          {/* CTA para el configurador */}
          <Link to="/configurador">
            <Button size="lg" className="bg-nex-primary hover:bg-nex-primary/90 font-inter font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              {t('personalization.configurator.cta')}
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personalización Interior */}
          <div className="animate-slide-up">
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
          </div>

          {/* Personalización Exterior */}
          <div className="animate-slide-up delay-200">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizationSection;
