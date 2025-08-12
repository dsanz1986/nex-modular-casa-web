
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ConfiguratorPreview } from "@/components/configurator/ConfiguratorPreview";
import { ExteriorControls } from "@/components/configurator/ExteriorControls";
import { InteriorControls } from "@/components/configurator/InteriorControls";
import { ConfiguratorState, getDefaultConfig } from "@/lib/configurator-data";

const Configurator = () => {
  const { t } = useTranslation();
  const [config, setConfig] = useState<ConfiguratorState>(getDefaultConfig());
  const [activeTab, setActiveTab] = useState<"exterior" | "interior">("exterior");

  // Sincronizar con localStorage
  useEffect(() => {
    const saved = localStorage.getItem('nex-configurator');
    if (saved) {
      try {
        setConfig(JSON.parse(saved));
      } catch (e) {
        console.log('Error loading saved config, using defaults');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('nex-configurator', JSON.stringify(config));
  }, [config]);

  const updateConfig = (updates: Partial<ConfiguratorState>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-50 to-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-nex-text hover:text-nex-primary transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-inter font-medium">{t('configurator.backToHome')}</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-playfair font-bold text-nex-text">
                {t('configurator.title')} - Nex Natura
              </h1>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                {t('configurator.share')}
              </Button>
              <Button size="sm" className="gap-2 bg-nex-primary hover:bg-nex-primary/90">
                <Download className="w-4 h-4" />
                {t('configurator.download')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Vista previa */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardContent className="p-6">
                <ConfiguratorPreview 
                  config={config}
                  viewMode={activeTab}
                />
              </CardContent>
            </Card>
          </div>

          {/* Controles */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardContent className="p-6">
                <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "exterior" | "interior")}>
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="exterior" className="font-inter font-medium">
                      {t('configurator.exterior')}
                    </TabsTrigger>
                    <TabsTrigger value="interior" className="font-inter font-medium">
                      {t('configurator.interior')}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="exterior" className="space-y-6">
                    <ExteriorControls 
                      config={config}
                      onUpdate={updateConfig}
                    />
                  </TabsContent>

                  <TabsContent value="interior" className="space-y-6">
                    <InteriorControls 
                      config={config}
                      onUpdate={updateConfig}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Resumen de configuración */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-nex-primary/5 to-forest-100/50 backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-playfair font-bold text-nex-text mb-4">
                  {t('configurator.summary.title')}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-inter text-nex-text/80">{t('configurator.summary.basePrice')}</span>
                    <span className="font-inter font-semibold text-nex-text">39.990€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-inter text-nex-text/80">{t('configurator.summary.extras')}</span>
                    <span className="font-inter font-semibold text-nex-text">+0€</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-playfair font-bold text-lg text-nex-text">{t('configurator.summary.total')}</span>
                      <span className="font-playfair font-bold text-xl text-nex-primary">39.990€</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-nex-primary hover:bg-nex-primary/90 font-inter font-semibold py-3">
                  {t('configurator.requestQuote')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
