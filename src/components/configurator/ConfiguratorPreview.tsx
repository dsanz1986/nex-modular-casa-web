
import { ConfiguratorState, getSelectedOptions } from "@/lib/configurator-data";
import { useTranslation } from "react-i18next";
import { LayeredPreviewImage } from "./LayeredPreviewImage";

interface ConfiguratorPreviewProps {
  config: ConfiguratorState;
  viewMode: "exterior" | "interior";
}

export const ConfiguratorPreview = ({ config, viewMode }: ConfiguratorPreviewProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-playfair font-bold text-nex-text mb-2">
          {viewMode === "exterior" ? t('configurator.exterior') : t('configurator.interior')}
        </h3>
        <p className="text-sm text-nex-text/70 font-inter">
          {t('configurator.previewDescription')}
        </p>
      </div>

      <div className="relative aspect-[4/3] bg-gradient-to-br from-forest-50 to-forest-100 rounded-2xl overflow-hidden">
        <LayeredPreviewImage 
          config={config}
          viewMode={viewMode}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};
