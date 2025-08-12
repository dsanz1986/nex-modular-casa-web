
import { ConfiguratorState } from "@/lib/configurator-data";
import { Card, CardContent } from "@/components/ui/card";
import { Eye } from "lucide-react";
import { useTranslation } from "react-i18next";

interface MobileMiniPreviewProps {
  config: ConfiguratorState;
  viewMode: "exterior" | "interior";
}

export const MobileMiniPreview = ({ config, viewMode }: MobileMiniPreviewProps) => {
  const { t } = useTranslation();

  const getPreviewImage = () => {
    if (viewMode === "exterior") {
      return "/lovable-uploads/2c692612-5352-4091-9f9b-463d9521af51.png";
    } else {
      return "/lovable-uploads/5845baa7-852c-474a-86e5-371bfcb9e62e.png";
    }
  };

  return (
    <Card className="border-0 shadow-md bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden">
      <CardContent className="p-3">
        <div className="flex items-center gap-3">
          <div className="relative w-16 h-12 bg-gradient-to-br from-forest-50 to-forest-100 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={getPreviewImage()}
              alt={`Vista ${viewMode} actual`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-nex-primary/10 flex items-center justify-center">
              <Eye className="w-4 h-4 text-nex-primary" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-nex-text mb-1">
              {t('configurator.miniPreview.currentView')}
            </p>
            <div className="flex flex-wrap gap-1">
              {viewMode === "exterior" ? (
                <>
                  <span className="text-xs bg-nex-primary/10 text-nex-primary px-2 py-1 rounded">
                    {config.exteriorCoating}
                  </span>
                  <span className="text-xs bg-nex-primary/10 text-nex-primary px-2 py-1 rounded">
                    {config.exteriorColor}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-xs bg-nex-primary/10 text-nex-primary px-2 py-1 rounded">
                    {config.interiorFlooring}
                  </span>
                  <span className="text-xs bg-nex-primary/10 text-nex-primary px-2 py-1 rounded">
                    {config.kitchen}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
