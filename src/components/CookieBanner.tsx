
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { useCookies, type CookiePreferences } from '@/hooks/useCookies';
import { Cookie, Settings, X, Shield, BarChart3, Target } from 'lucide-react';

const CookieBanner = () => {
  const { hasAccepted, preferences, acceptAll, rejectAll, savePreferences } = useCookies();
  const [showPreferences, setShowPreferences] = useState(false);
  const [tempPreferences, setTempPreferences] = useState<CookiePreferences>(preferences);

  // Don't show banner if user has already made a choice
  if (hasAccepted !== null) {
    return null;
  }

  const handleShowPreferences = () => {
    setTempPreferences(preferences);
    setShowPreferences(true);
  };

  const handleSavePreferences = () => {
    savePreferences(tempPreferences);
    setShowPreferences(false);
  };

  const updateTempPreference = (key: keyof CookiePreferences, value: boolean) => {
    setTempPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <>
      {/* Cookie Banner - Más compacto y visual */}
      <div className="fixed bottom-6 left-6 right-6 z-50 flex justify-center">
        <Card className="max-w-4xl w-full bg-white/95 backdrop-blur-md border-0 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-nex-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-nex-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-nex-text mb-2 text-lg">
                    🍪 Mejoramos tu experiencia
                  </h3>
                  <p className="text-sm text-nex-text/70 leading-relaxed">
                    Usamos cookies para personalizar tu experiencia y analizar nuestro tráfico. 
                    Solo las esenciales son obligatorias.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Button
                  variant="ghost"
                  onClick={handleShowPreferences}
                  className="flex items-center gap-2 text-nex-primary hover:bg-nex-primary/10 border border-nex-primary/20 rounded-xl"
                >
                  <Settings size={16} />
                  Configurar
                </Button>
                <Button
                  variant="outline"
                  onClick={rejectAll}
                  className="border-gray-200 text-gray-600 hover:bg-gray-50 rounded-xl"
                >
                  Solo esenciales
                </Button>
                <Button
                  onClick={acceptAll}
                  className="bg-nex-primary hover:bg-nex-primary/90 text-white shadow-lg rounded-xl"
                >
                  Aceptar todas
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Preferences Dialog - Más visual */}
      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-xl">
              <div className="w-8 h-8 bg-nex-primary/10 rounded-lg flex items-center justify-center">
                <Cookie className="w-5 h-5 text-nex-primary" />
              </div>
              Configuración de cookies
            </DialogTitle>
            <DialogDescription className="text-base">
              Personaliza tu experiencia eligiendo qué tipos de cookies permitir.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Necessary Cookies */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-nex-text">Cookies necesarias</h4>
                  <Switch
                    checked={true}
                    disabled={true}
                  />
                </div>
                <p className="text-sm text-nex-text/70">
                  Esenciales para el funcionamiento básico del sitio web. Siempre activas.
                </p>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-nex-text">Cookies analíticas</h4>
                  <Switch
                    checked={tempPreferences.analytics}
                    onCheckedChange={(checked) => updateTempPreference('analytics', checked)}
                  />
                </div>
                <p className="text-sm text-nex-text/70">
                  Nos ayudan a entender cómo interactúas con nuestro sitio web.
                </p>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-nex-text">Cookies de marketing</h4>
                  <Switch
                    checked={tempPreferences.marketing}
                    onCheckedChange={(checked) => updateTempPreference('marketing', checked)}
                  />
                </div>
                <p className="text-sm text-nex-text/70">
                  Para mostrarte contenido personalizado y relevante.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-6">
            <Button
              variant="outline"
              onClick={() => setShowPreferences(false)}
              className="flex-1 rounded-xl"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSavePreferences}
              className="flex-1 bg-nex-primary hover:bg-nex-primary/90 text-white rounded-xl"
            >
              Guardar configuración
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieBanner;
