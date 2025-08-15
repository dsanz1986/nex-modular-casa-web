
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ConfiguratorState, getSelectedOptions } from "@/lib/configurator-data";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface QuoteRequestModalProps {
  config: ConfiguratorState;
  children?: React.ReactNode;
}

export const QuoteRequestModal = ({ config, children }: QuoteRequestModalProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const selectedOptions = getSelectedOptions(config);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create configuration summary for email
      const configSummary = {
        exteriorCladding: selectedOptions.exteriorCladding?.name || 'No seleccionado',
        exteriorDoors: selectedOptions.exteriorDoors?.name || 'No seleccionado',
        exteriorWindows: selectedOptions.exteriorWindows?.name || 'No seleccionado',
        interiorFlooring: selectedOptions.interiorFlooring?.name || 'No seleccionado',
        interiorKitchen: selectedOptions.interiorKitchen?.name || 'No seleccionado',
        interiorBathroom: selectedOptions.interiorBathroom?.name || 'No seleccionado',
      };

      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          comments: `Solicitud de presupuesto del configurador:\n\nConfiguración seleccionada:\n${Object.entries(configSummary).map(([key, value]) => `${key}: ${value}`).join('\n')}`,
          isQuoteRequest: true,
          configuration: configSummary
        }
      });

      if (error) throw error;

      toast({
        title: t('configurator.quoteForm.success'),
        description: "Te contactaremos pronto con tu presupuesto personalizado.",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error('Error sending quote request:', error);
      toast({
        title: t('configurator.quoteForm.error'),
        description: "Por favor intenta de nuevo más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children || (
          <Button className="w-full bg-nex-primary hover:bg-nex-primary/90 text-white">
            {t('configurator.requestQuote')}
          </Button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>{t('configurator.quoteForm.title')}</AlertDialogTitle>
          <AlertDialogDescription>
            {t('configurator.quoteForm.subtitle')}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="name">{t('configurator.quoteForm.name')}</Label>
            <Input
              id="name"
              placeholder={t('configurator.quoteForm.namePlaceholder')}
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="email">{t('configurator.quoteForm.email')}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t('configurator.quoteForm.emailPlaceholder')}
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="phone">{t('configurator.quoteForm.phone')}</Label>
            <Input
              id="phone"
              type="tel"
              placeholder={t('configurator.quoteForm.phonePlaceholder')}
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? t('configurator.quoteForm.submitting') : t('configurator.quoteForm.submit')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
