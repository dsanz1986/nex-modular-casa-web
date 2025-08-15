import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { AIButton } from "@/components/ui/ai-button";

export const PersonalizationSection = () => {
  const { t } = useTranslation();

  return (
    <section id="personalizacion" className="py-24 bg-gradient-to-br from-forest-50 to-forest-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-nex-text mb-6">
            {t('personalization.title')}
          </h2>
          <p className="text-xl text-nex-text/80 max-w-3xl mx-auto mb-8">
            {t('personalization.subtitle')}
          </p>
          
          <Link to="/configurador">
            <AIButton size="lg" className="mb-8">
              <Sparkles className="w-5 h-5 mr-2" />
              Diseña tu casa
            </AIButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Interior Personalization */}
          <div className="text-center">
            <img
              src="/images/personalization/interior-distribution.svg"
              alt={t('personalization.interior.distribution')}
              className="mx-auto h-20 mb-4"
            />
            <h3 className="text-xl font-semibold text-nex-text mb-2">
              {t('personalization.interior.distribution')}
            </h3>
            <p className="text-nex-text/70">
              {t('personalization.interior.distributionDesc')}
            </p>
          </div>

          <div className="text-center">
            <img
              src="/images/personalization/interior-flooring.svg"
              alt={t('personalization.interior.flooring')}
              className="mx-auto h-20 mb-4"
            />
            <h3 className="text-xl font-semibold text-nex-text mb-2">
              {t('personalization.interior.flooring')}
            </h3>
            <p className="text-nex-text/70">
              {t('personalization.interior.flooringDesc')}
            </p>
          </div>

          <div className="text-center">
            <img
              src="/images/personalization/interior-bath.svg"
              alt={t('personalization.interior.extraBath')}
              className="mx-auto h-20 mb-4"
            />
            <h3 className="text-xl font-semibold text-nex-text mb-2">
              {t('personalization.interior.extraBath')}
            </h3>
            <p className="text-nex-text/70">
              {t('personalization.interior.extraBathDesc')}
            </p>
          </div>

          <div className="text-center">
            <img
              src="/images/personalization/interior-coating.svg"
              alt={t('personalization.interior.coating')}
              className="mx-auto h-20 mb-4"
            />
            <h3 className="text-xl font-semibold text-nex-text mb-2">
              {t('personalization.interior.coating')}
            </h3>
            <p className="text-nex-text/70">
              {t('personalization.interior.coatingDesc')}
            </p>
          </div>

          {/* Exterior Personalization */}
          <div className="text-center">
            <img
              src="/images/personalization/exterior-windows.svg"
              alt={t('personalization.exterior.extraWindows')}
              className="mx-auto h-20 mb-4"
            />
            <h3 className="text-xl font-semibold text-nex-text mb-2">
              {t('personalization.exterior.extraWindows')}
            </h3>
            <p className="text-nex-text/70">
              {t('personalization.exterior.extraWindowsDesc')}
            </p>
          </div>

          <div className="text-center">
            <img
              src="/images/personalization/exterior-doors.svg"
              alt={t('personalization.exterior.doorTypes')}
              className="mx-auto h-20 mb-4"
            />
            <h3 className="text-xl font-semibold text-nex-text mb-2">
              {t('personalization.exterior.doorTypes')}
            </h3>
            <p className="text-nex-text/70">
              {t('personalization.exterior.doorTypesDesc')}
            </p>
          </div>

          <div className="text-center">
            <img
              src="/images/personalization/exterior-add-door.svg"
              alt={t('personalization.exterior.extraDoors')}
              className="mx-auto h-20 mb-4"
            />
            <h3 className="text-xl font-semibold text-nex-text mb-2">
              {t('personalization.exterior.extraDoors')}
            </h3>
            <p className="text-nex-text/70">
              {t('personalization.exterior.extraDoorsDesc')}
            </p>
          </div>

          <div className="text-center">
            <img
              src="/images/personalization/exterior-coating.svg"
              alt={t('personalization.exterior.coating')}
              className="mx-auto h-20 mb-4"
            />
            <h3 className="text-xl font-semibold text-nex-text mb-2">
              {t('personalization.exterior.coating')}
            </h3>
            <p className="text-nex-text/70">
              {t('personalization.exterior.coatingDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
