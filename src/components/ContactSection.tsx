import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "react-i18next";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  nombre: z.string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede superar 100 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/, "El nombre solo puede contener letras"),
  email: z.string()
    .trim()
    .min(1, "El email es obligatorio")
    .email("Debe ser un email válido")
    .max(255, "El email es demasiado largo"),
  telefono: z.string()
    .trim()
    .min(9, "El teléfono debe tener al menos 9 dígitos")
    .max(15, "El teléfono no puede superar 15 dígitos")
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/, "Formato de teléfono inválido"),
  comentarios: z.string()
    .trim()
    .min(10, "Los comentarios deben tener al menos 10 caracteres")
    .max(1000, "Los comentarios no pueden superar 1000 caracteres")
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      comentarios: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log("Sending contact form data:", data);
      
      const { data: responseData, error } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (error) {
        throw error;
      }

      console.log("Email sent successfully:", responseData);
      
      toast({
        title: t('contact.success.title'),
        description: t('contact.success.description'),
      });
      
      form.reset();
      
    } catch (error: any) {
      console.error("Error sending email:", error);
      toast({
        title: t('contact.error.title'),
        description: t('contact.error.description'),
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-forest-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg font-inter text-nex-text/80 leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 animate-slide-up border border-forest-200">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-inter font-medium text-nex-text">
                        {t('contact.form.name')} {t('contact.form.required')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t('contact.form.namePlaceholder')}
                          className="px-4 py-3 border border-forest-200 rounded-2xl focus:ring-2 focus:ring-nex-primary focus:border-transparent transition-all duration-300 font-inter"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-inter font-medium text-nex-text">
                        {t('contact.form.email')} {t('contact.form.required')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t('contact.form.emailPlaceholder')}
                          className="px-4 py-3 border border-forest-200 rounded-2xl focus:ring-2 focus:ring-nex-primary focus:border-transparent transition-all duration-300 font-inter"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="telefono"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-inter font-medium text-nex-text">
                      {t('contact.form.phone')} {t('contact.form.required')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder={t('contact.form.phonePlaceholder')}
                        className="px-4 py-3 border border-forest-200 rounded-2xl focus:ring-2 focus:ring-nex-primary focus:border-transparent transition-all duration-300 font-inter"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="comentarios"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-inter font-medium text-nex-text">
                      {t('contact.form.comments')} {t('contact.form.required')}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder={t('contact.form.commentsPlaceholder')}
                        className="px-4 py-3 border border-forest-200 rounded-2xl focus:ring-2 focus:ring-nex-primary focus:border-transparent transition-all duration-300 resize-none font-inter"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />
              
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full bg-nex-primary hover:bg-nex-primary/90 text-white font-inter font-semibold py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {form.formState.isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
