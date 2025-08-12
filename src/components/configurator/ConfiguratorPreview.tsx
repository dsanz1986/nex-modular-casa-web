
import { ConfiguratorState, getImagePath } from "@/lib/configurator-data";
import { useTranslation } from "react-i18next";

interface ConfiguratorPreviewProps {
  config: ConfiguratorState;
  viewMode: "exterior" | "interior";
}

export const ConfiguratorPreview = ({ config, viewMode }: ConfiguratorPreviewProps) => {
  const { t } = useTranslation();

  // Por ahora mostramos una imagen placeholder con información de la configuración
  const getPreviewImage = () => {
    if (viewMode === "exterior") {
      // Usamos una de las imágenes existentes como placeholder
      return "/lovable-uploads/2c692612-5352-4091-9f9b-463d9521af51.png";
    } else {
      // Interior placeholder
      return "/lovable-uploads/5845baa7-852c-474a-86e5-371bfcb9e62e.png";
    }
  };

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
        <img
          src={getPreviewImage()}
          alt={`Vista ${viewMode} configurada`}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay con información de configuración */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
          <div className="grid grid-cols-2 gap-2 text-xs">
            {viewMode === "exterior" ? (
              <>
                <div>
                  <span className="font-medium text-nex-text/60">Revestimiento:</span>
                  <span className="ml-1 text-nex-text">{config.exteriorCoating}</span>
                </div>
                <div>
                  <span className="font-medium text-nex-text/60">Color:</span>
                  <span className="ml-1 text-nex-text">{config.exteriorColor}</span>
                </div>
                <div>
                  <span className="font-medium text-nex-text/60">Puertas:</span>
                  <span className="ml-1 text-nex-text">{config.doors}</span>
                </div>
                <div>
                  <span className="font-medium text-nex-text/60">Ventanas:</span>
                  <span className="ml-1 text-nex-text">{config.windows}</span>
                </div>
              </>
            ) : (
              <>
                <div>
                  <span className="font-medium text-nex-text/60">Suelo:</span>
                  <span className="ml-1 text-nex-text">{config.interiorFlooring}</span>
                </div>
                <div>
                  <span className="font-medium text-nex-text/60">Cocina:</span>
                  <span className="ml-1 text-nex-text">{config.kitchen}</span>
                </div>
                <div>
                  <span className="font-medium text-nex-text/60">Baño:</span>
                  <span className="ml-1 text-nex-text">{config.bathroom}</span>
                </div>
                <div>
                  <span className="font-medium text-nex-text/60">Puertas:</span>
                  <span className="ml-1 text-nex-text">{config.interiorDoors}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
