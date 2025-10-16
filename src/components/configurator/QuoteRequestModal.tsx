import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslation } from "react-i18next";
import {
  AlertDialog,
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
import { ConfiguratorState, getSelectedOptions } from "@/lib/configurator-data";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const quoteSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede superar 100 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/, "El nombre solo puede contener letras"),
  email: z.string()
    .trim()
    .min(1, "El email es obligatorio")
    .email("Debe ser un email válido")
    .max(255, "El email es demasiado largo"),
  phone: z.string()
    .trim()
    .min(9, "El teléfono debe tener al menos 9 dígitos")
    .max(15, "El teléfono no puede superar 15 dígitos")
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/, "Formato de teléfono inválido")
});

type QuoteFormData = z.infer<typeof quoteSchema>;

interface QuoteRequestModalProps {
  config: ConfiguratorState;
  children?: React.ReactNode;
}

export const QuoteRequestModal = ({ config, children }: QuoteRequestModalProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    }
  });

  const selectedOptions = getSelectedOptions(config);

  const onSubmit = async (data: QuoteFormData) => {
    try {
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
          nombre: data.name,
          email: data.email,
          telefono: data.phone,
          comentarios: `Solicitud de presupuesto del configurador:\n\nConfiguración seleccionada:\n${Object.entries(configSummary).map(([key, value]) => `${key}: ${value}`).join('\n')}`,
          isQuoteRequest: true,
          configuration: configSummary
        }
      });

      if (error) throw error;

      toast({
        title: t('configurator.quoteForm.success'),
        description: "Te contactaremos pronto con tu presupuesto personalizado.",
      });

      form.reset();
    } catch (error) {
      console.error('Error sending quote request:', error);
      toast({
        title: t('configurator.quoteForm.error'),
        description: "Por favor intenta de nuevo más tarde.",
        variant: "destructive",
      });
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('configurator.quoteForm.name')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('configurator.quoteForm.namePlaceholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('configurator.quoteForm.email')}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t('configurator.quoteForm.emailPlaceholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('configurator.quoteForm.phone')}</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder={t('configurator.quoteForm.phonePlaceholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <AlertDialogFooter>
              <AlertDialogCancel type="button">Cancelar</AlertDialogCancel>
              <Button 
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? t('configurator.quoteForm.submitting') : t('configurator.quoteForm.submit')}
              </Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
