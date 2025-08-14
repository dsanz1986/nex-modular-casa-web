

import { ConfiguratorState, configuratorData } from "@/lib/configurator-data";
import { useTranslation } from "react-i18next";
import { LayeredPreviewImage } from "./LayeredPreviewImage";

interface ConfiguratorPreviewProps {
  config: ConfiguratorState;
  viewMode: "exterior" | "interior";
}

export const ConfiguratorPreview = ({ config, viewMode }: ConfiguratorPreviewProps) => {
  const { t } = useTranslation();

  // Get the selected option details
  const selectedCladding = configuratorData.exterior.cladding.options.find(
    option => option.id === config.exteriorCladding
  );
  
  const selectedDoors = configuratorData.exterior.doors.options.find(
    option => option.id === config.exteriorDoors
  );
  
  const selectedWindows = configuratorData.exterior.windows.options.find(
    option => option.id === config.exteriorWindows
  );

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
        
        {/* Overlay con información de configuración */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
          <div className="grid grid-cols-1 gap-2 text-xs">
            {viewMode === "exterior" ? (
              <>
                <div>
                  <span className="font-medium text-nex-text/60">Revestimiento:</span>
                  <span className="ml-1 text-nex-text">{selectedCladding?.name || config.exteriorCladding}</span>
                </div>
                <div>
                  <span className="font-medium text-nex-text/60">Puertas:</span>
                  <span className="ml-1 text-nex-text">{selectedDoors?.name || config.exteriorDoors}</span>
                </div>
                <div>
                  <span className="font-medium text-nex-text/60">Ventanas:</span>
                  <span className="ml-1 text-nex-text">{selectedWindows?.name || config.exteriorWindows}</span>
                </div>
              </>
            ) : (
              <div className="text-center text-nex-text/60">
                {t('configurator.interior.comingSoon.description')}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

