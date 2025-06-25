
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { useCookies, type CookiePreferences } from '@/hooks/useCookies';
import { Cookie, Settings, X } from 'lucide-react';

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
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
        <Card className="max-w-6xl mx-auto border-0 shadow-none bg-transparent">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="w-6 h-6 text-nex-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-nex-text mb-2">
                    Usamos cookies para mejorar tu experiencia
                  </h3>
                  <p className="text-sm text-nex-text/80 leading-relaxed">
                    Utilizamos cookies propias y de terceros para analizar el tráfico de la web, 
                    personalizar el contenido y mejorar nuestros servicios. 
                    Puedes aceptar todas las cookies o personalizar tus preferencias.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Button
                  variant="outline"
                  onClick={handleShowPreferences}
                  className="flex items-center gap-2 border-nex-primary text-nex-primary hover:bg-nex-primary hover:text-white"
                >
                  <Settings size={16} />
                  Personalizar
                </Button>
                <Button
                  variant="outline"
                  onClick={rejectAll}
                  className="border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                  Rechazar todas
                </Button>
                <Button
                  onClick={acceptAll}
                  className="bg-nex-primary hover:bg-nex-primary/90 text-white"
                >
                  Aceptar todas
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Preferences Dialog */}
      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="w-5 h-5 text-nex-primary" />
              Preferencias de cookies
            </DialogTitle>
            <DialogDescription>
              Personaliza qué tipos de cookies quieres permitir en nuestro sitio web.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Necessary Cookies */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-medium text-nex-text">Cookies necesarias</h4>
                <p className="text-sm text-nex-text/70 mt-1">
                  Esenciales para el funcionamiento básico del sitio web.
                </p>
              </div>
              <Switch
                checked={true}
                disabled={true}
                className="mt-1"
              />
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-medium text-nex-text">Cookies analíticas</h4>
                <p className="text-sm text-nex-text/70 mt-1">
                  Nos ayudan a entender cómo interactúas con nuestro sitio web.
                </p>
              </div>
              <Switch
                checked={tempPreferences.analytics}
                onCheckedChange={(checked) => updateTempPreference('analytics', checked)}
                className="mt-1"
              />
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-medium text-nex-text">Cookies de marketing</h4>
                <p className="text-sm text-nex-text/70 mt-1">
                  Para mostrarte contenido personalizado y relevante.
                </p>
              </div>
              <Switch
                checked={tempPreferences.marketing}
                onCheckedChange={(checked) => updateTempPreference('marketing', checked)}
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => setShowPreferences(false)}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSavePreferences}
              className="flex-1 bg-nex-primary hover:bg-nex-primary/90 text-white"
            >
              Guardar preferencias
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieBanner;
