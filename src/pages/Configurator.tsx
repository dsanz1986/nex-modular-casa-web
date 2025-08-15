
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { getDefaultConfig, ConfiguratorState } from "@/lib/configurator-data";
import { ConfiguratorPreview } from "@/components/configurator/ConfiguratorPreview";
import { ExteriorControls } from "@/components/configurator/ExteriorControls";
import { InteriorControls } from "@/components/configurator/InteriorControls";
import { ConfiguratorSummary } from "@/components/configurator/ConfiguratorSummary";

export default function Configurator() {
  const { t } = useTranslation();
  const [config, setConfig] = useState<ConfiguratorState>(getDefaultConfig());
  const [viewMode, setViewMode] = useState<"exterior" | "interior">("exterior");
  const [lastSelectedOption, setLastSelectedOption] = useState<{ category: string; option: string; view: "exterior" | "interior" } | undefined>();

  const handleConfigUpdate = (updates: Partial<ConfiguratorState>, selectedOption?: { category: string; option: string }) => {
    setConfig(prev => ({ ...prev, ...updates }));
    
    // Track the last selected option for preview
    if (selectedOption) {
      setLastSelectedOption({
        ...selectedOption,
        view: viewMode
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-50 to-forest-100">
      {/* Header */}
      <div className="bg-white border-b border-forest-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-nex-text hover:text-nex-primary">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('configurator.backToHome')}
                </Button>
              </Link>
              <h1 className="text-2xl font-playfair font-bold text-nex-text">
                {t('configurator.title')}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Preview Section - Left Column */}
          <div className="space-y-4">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <ConfiguratorPreview 
                  config={config} 
                  viewMode={viewMode} 
                  lastSelectedOption={lastSelectedOption}
                />
              </CardContent>
            </Card>
          </div>

          {/* Controls Section - Right Column */}
          <div className="space-y-4">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as "exterior" | "interior")}>
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="exterior" className="font-inter">
                      {t('configurator.exterior')}
                    </TabsTrigger>
                    <TabsTrigger value="interior" className="font-inter">
                      {t('configurator.interior')}
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="exterior" className="mt-0">
                    <ExteriorControls config={config} onUpdate={handleConfigUpdate} />
                  </TabsContent>
                  
                  <TabsContent value="interior" className="mt-0">
                    <InteriorControls config={config} onUpdate={handleConfigUpdate} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Summary Section - Full Width Below */}
        <div className="w-full">
          <ConfiguratorSummary config={config} />
        </div>
      </div>
    </div>
  );
}
