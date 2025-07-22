
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const FAQSection = () => {
  const { t } = useTranslation();

  const faqKeys = [
    "permisos",
    "instalacion", 
    "terreno",
    "servicios",
    "calidad",
    "precio",
    "mantenimiento",
    "movilidad",
    "personalizacion"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-forest-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-nex-primary/10 text-nex-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            {t('faq.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg font-inter text-nex-text/80 max-w-2xl mx-auto leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqKeys.map((faqKey) => (
              <AccordionItem 
                key={faqKey} 
                value={faqKey}
                className="bg-white border border-forest-200 rounded-2xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left py-6 text-lg font-inter font-semibold text-nex-text hover:text-nex-primary transition-colors">
                  {t(`faq.items.${faqKey}.question`)}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-nex-text/80 font-inter leading-relaxed">
                  {t(`faq.items.${faqKey}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
