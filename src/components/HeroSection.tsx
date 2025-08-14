
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { AIButton } from "@/components/ui/ai-button";
import { Badge } from "@/components/ui/badge";
import { HeroImageCarousel } from "./HeroImageCarousel";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export const HeroSection = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/34635559514?text=Hola,%20quiero%20información%20sobre%20las%20casas%20modulares%20móviles', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-forest-50 via-white to-forest-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/grid-pattern.svg')] bg-repeat opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Column */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <Badge 
                variant="secondary" 
                className="bg-nex-primary/10 text-nex-primary border-nex-primary/20 text-sm px-4 py-2 font-medium animate-fade-in"
              >
                {t('hero.badge')}
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-nex-text leading-tight animate-fade-in">
                  {t('hero.title')}
                  <span className="block text-nex-primary">
                    {t('hero.subtitle')}
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-nex-text/80 max-w-2xl font-inter animate-fade-in">
                  {t('hero.description')}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <Link to="/configurador">
                <AIButton 
                  size="lg"
                  className="font-semibold min-w-[200px]"
                  glowEffect={true}
                  showIcon={true}
                  iconType="sparkles"
                >
                  {t('hero.ctaMain')}
                </AIButton>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleWhatsAppClick}
                className="border-nex-primary/30 text-nex-primary hover:bg-nex-primary/5 min-w-[200px] font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('hero.ctaSecondary')}
              </Button>
            </div>

            <div className="pt-4">
              <Badge 
                variant="outline" 
                className="border-emerald-200 text-emerald-700 bg-emerald-50 font-medium animate-fade-in"
              >
                ✓ {t('hero.qualityBadge')}
              </Badge>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <HeroImageCarousel />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-nex-primary/20 to-forest-300/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-forest-200/30 to-nex-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
