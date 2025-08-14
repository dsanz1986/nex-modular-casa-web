
import { useState } from "react";
import { ArrowLeft, Share, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { getDefaultConfig, ConfiguratorState } from "@/lib/configurator-data";
import { ConfiguratorPreview } from "@/components/configurator/ConfiguratorPreview";
import { ExteriorControls } from "@/components/configurator/ExteriorControls";
import { InteriorControls } from "@/components/configurator/InteriorControls";
import { MobileMiniPreview } from "@/components/configurator/MobileMiniPreview";
import { ConfiguratorSummary } from "@/components/configurator/ConfiguratorSummary";

export default function Configurator() {
  const { t } = useTranslation();
  const [config, setConfig] = useState<ConfiguratorState>(getDefaultConfig());
  const [viewMode, setViewMode] = useState<"exterior" | "interior">("exterior");

  const handleConfigUpdate = (updates: Partial<ConfiguratorState>) => {
    setConfig(prev => ({ ...prev, ...updates }));
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
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Share className="w-4 h-4 mr-2" />
                {t('configurator.share')}
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                {t('configurator.download')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Preview Section */}
          <div className="lg:col-span-2 space-y-4">
            {/* Mobile Mini Preview */}
            <div className="lg:hidden">
              <MobileMiniPreview config={config} viewMode={viewMode} />
            </div>

            {/* Main Preview */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <ConfiguratorPreview config={config} viewMode={viewMode} />
              </CardContent>
            </Card>

            {/* Controls */}
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

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Desktop Preview */}
            <div className="hidden lg:block">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4">
                  <ConfiguratorPreview config={config} viewMode={viewMode} />
                </CardContent>
              </Card>
            </div>

            {/* Summary */}
            <ConfiguratorSummary config={config} />
          </div>
        </div>
      </div>
    </div>
  );
}
