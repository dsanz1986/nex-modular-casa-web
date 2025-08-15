
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ConfiguratorState, getSelectedOptions, getConfigPrice } from "@/lib/configurator-data";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface QuoteRequestModalProps {
  config: ConfiguratorState;
  children: React.ReactNode;
}

export const QuoteRequestModal = ({ config, children }: QuoteRequestModalProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const selectedOptions = getSelectedOptions(config);
  const totalPrice = getConfigPrice(config);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare configuration summary
      const configSummary = `
CONFIGURACIÓN SELECCIONADA:

EXTERIOR:
- Revestimiento: ${selectedOptions.exteriorCladding?.name}
- Puertas: ${selectedOptions.exteriorDoors?.name}
- Ventanas: ${selectedOptions.exteriorWindows?.name}

INTERIOR:
- Tarima: ${selectedOptions.interiorFlooring?.name}
- Muebles de Cocina: ${selectedOptions.interiorKitchen?.name}
- Muebles de Baño: ${selectedOptions.interiorBathroom?.name}

PRECIO TOTAL: ${totalPrice.toLocaleString()}€
`;

      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          nombre: formData.name,
          email: formData.email,
          telefono: formData.phone,
          comentarios: `Solicitud de presupuesto del configurador:\n\n${configSummary}`
        }
      });

      if (error) {
        throw error;
      }

      toast({
        title: t('configurator.quoteForm.success'),
        description: "Te contactaremos pronto con tu presupuesto personalizado."
      });

      setOpen(false);
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error('Error sending quote request:', error);
      toast({
        title: t('configurator.quoteForm.error'),
        description: "Por favor, inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-playfair text-nex-text">
            {t('configurator.quoteForm.title')}
          </DialogTitle>
          <p className="text-sm text-nex-text/70">
            {t('configurator.quoteForm.subtitle')}
          </p>
        </DialogHeader>

        <div className="space-y-4">
          {/* Configuration Summary */}
          <div className="bg-forest-50 p-4 rounded-lg">
            <h4 className="font-medium text-nex-text mb-2">
              {t('configurator.summary.title')}
            </h4>
            <div className="text-sm text-nex-text/80 space-y-1">
              <div>• {selectedOptions.exteriorCladding?.name}</div>
              <div>• {selectedOptions.exteriorDoors?.name}</div>
              <div>• {selectedOptions.exteriorWindows?.name}</div>
              <div>• {selectedOptions.interiorFlooring?.name}</div>
              <div>• {selectedOptions.interiorKitchen?.name}</div>
              <div>• {selectedOptions.interiorBathroom?.name}</div>
            </div>
            <div className="text-lg font-semibold text-nex-primary mt-2">
              {t('configurator.summary.total')}: {totalPrice.toLocaleString()}€
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">{t('configurator.quoteForm.name')}</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder={t('configurator.quoteForm.namePlaceholder')}
              />
            </div>

            <div>
              <Label htmlFor="email">{t('configurator.quoteForm.email')}</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder={t('configurator.quoteForm.emailPlaceholder')}
              />
            </div>

            <div>
              <Label htmlFor="phone">{t('configurator.quoteForm.phone')}</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder={t('configurator.quoteForm.phonePlaceholder')}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? t('configurator.quoteForm.submitting') : t('configurator.quoteForm.submit')}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
