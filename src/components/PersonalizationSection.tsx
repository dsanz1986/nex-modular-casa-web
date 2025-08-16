
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AIButton } from "@/components/ui/ai-button";
import { LayoutGrid, Layers, ShowerHead, Paintbrush, PanelsTopLeft, DoorClosed, DoorOpen, Sparkles } from "lucide-react";

export const PersonalizationSection = () => {
  const { t } = useTranslation();

  return (
    <section id="personalizacion" className="py-20 bg-gradient-to-br from-forest-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-nex-text mb-6">
            Diseña tu casa
          </h2>
          <p className="text-xl text-nex-text/80 max-w-3xl mx-auto mb-8">
            {t('personalization.subtitle')}
          </p>
          <Link to="/configurador">
            <AIButton className="inline-flex items-center gap-3 text-lg px-10 py-4 bg-gradient-to-r from-nex-primary via-emerald-500 to-forest-600 hover:from-nex-primary/90 hover:via-emerald-500/90 hover:to-forest-600/90 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 ring-2 ring-white/20 hover:ring-white/40">
              <Sparkles className="w-5 h-5" />
              Diseña tu casa
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </AIButton>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Interior Features */}
          <div className="space-y-8">
            <h3 className="text-2xl font-playfair font-bold text-nex-text mb-6">Interior</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-nex-primary/10 to-nex-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <LayoutGrid className="w-6 h-6 text-nex-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-nex-text mb-2">{t('personalization.interior.distribution')}</h4>
                  <p className="text-nex-text/70">{t('personalization.interior.distributionDesc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-nex-primary/10 to-nex-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-nex-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-nex-text mb-2">{t('personalization.interior.flooring')}</h4>
                  <p className="text-nex-text/70">{t('personalization.interior.flooringDesc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-nex-primary/10 to-nex-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShowerHead className="w-6 h-6 text-nex-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-nex-text mb-2">{t('personalization.interior.extraBath')}</h4>
                  <p className="text-nex-text/70">{t('personalization.interior.extraBathDesc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-nex-primary/10 to-nex-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Paintbrush className="w-6 h-6 text-nex-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-nex-text mb-2">{t('personalization.interior.coating')}</h4>
                  <p className="text-nex-text/70">{t('personalization.interior.coatingDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exterior Features */}
          <div className="space-y-8">
            <h3 className="text-2xl font-playfair font-bold text-nex-text mb-6">Exterior</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-nex-accent/10 to-nex-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <PanelsTopLeft className="w-6 h-6 text-nex-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-nex-text mb-2">{t('personalization.exterior.extraWindows')}</h4>
                  <p className="text-nex-text/70">{t('personalization.exterior.extraWindowsDesc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-nex-accent/10 to-nex-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <DoorClosed className="w-6 h-6 text-nex-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-nex-text mb-2">{t('personalization.exterior.doorTypes')}</h4>
                  <p className="text-nex-text/70">{t('personalization.exterior.doorTypesDesc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-nex-accent/10 to-nex-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <DoorOpen className="w-6 h-6 text-nex-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-nex-text mb-2">{t('personalization.exterior.extraDoors')}</h4>
                  <p className="text-nex-text/70">{t('personalization.exterior.extraDoorsDesc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-nex-accent/10 to-nex-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-nex-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-nex-text mb-2">{t('personalization.exterior.coating')}</h4>
                  <p className="text-nex-text/70">{t('personalization.exterior.coatingDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
