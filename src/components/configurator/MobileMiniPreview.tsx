

import { ConfiguratorState, configuratorData } from "@/lib/configurator-data";
import { Card, CardContent } from "@/components/ui/card";
import { Eye } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LayeredPreviewImage } from "./LayeredPreviewImage";

interface MobileMiniPreviewProps {
  config: ConfiguratorState;
  viewMode: "exterior" | "interior";
}

export const MobileMiniPreview = ({ config, viewMode }: MobileMiniPreviewProps) => {
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
    <Card className="border-0 shadow-md bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden">
      <CardContent className="p-3">
        <div className="flex items-center gap-3">
          <div className="relative w-16 h-12 bg-gradient-to-br from-forest-50 to-forest-100 rounded-lg overflow-hidden flex-shrink-0">
            <LayeredPreviewImage 
              config={config}
              viewMode={viewMode}
              className="rounded-lg"
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
                    {selectedCladding?.name || config.exteriorCladding}
                  </span>
                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                    {selectedDoors?.name || config.exteriorDoors}
                  </span>
                  <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded">
                    {selectedWindows?.name || config.exteriorWindows}
                  </span>
                </>
              ) : (
                <span className="text-xs bg-nex-primary/10 text-nex-primary px-2 py-1 rounded">
                  {t('configurator.interior.comingSoon.title')}
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

