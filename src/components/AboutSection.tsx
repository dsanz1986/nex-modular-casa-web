
import { MapPin, Sparkles, Home } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/95729307-fe95-498b-8dc6-99da387641ff.png"
                alt="Interior casa modular móvil Nex - Salón moderno con cocina integrada"
                className="w-full h-[400px] object-cover"
                width="600"
                height="400"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-nex-primary text-white px-6 py-3 rounded-2xl font-inter font-semibold shadow-lg">
              {t('about.delivered')}
            </div>
          </div>
          
          {/* Content */}
          <div className="animate-slide-up">
            <header>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-6">
                {t('about.title')}
              </h2>
            </header>
            
            <div className="space-y-4 text-nex-text font-inter text-lg leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t('about.description1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.description2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.description3') }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
