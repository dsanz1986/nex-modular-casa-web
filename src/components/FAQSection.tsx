
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      id: "permisos",
      question: "¿Necesito permisos especiales para instalar una casa modular móvil?",
      answer: "En la mayoría de casos no necesitas permisos de obra, pero sí es recomendable consultar con tu ayuntamiento local sobre normativas específicas de tu zona. Nuestras casas modulares móviles están clasificadas como viviendas transportables, lo que simplifica significativamente los trámites comparado con la construcción tradicional."
    },
    {
      id: "instalacion",
      question: "¿Cuánto tiempo tarda la instalación?",
      answer: "La instalación de nuestras casas modulares móviles es muy rápida. Una vez que la casa llega a tu terreno, el proceso de instalación y puesta en marcha se completa en 1-2 días. No necesitas cimentación ni obras previas, solo una superficie nivelada."
    },
    {
      id: "terreno",
      question: "¿Qué tipo de terreno necesito?",
      answer: "Nuestras casas modulares móviles son muy versátiles en cuanto al terreno. Necesitas una superficie nivelada. El terreno puede ser rústico o urbano. Te ayudamos a evaluar la viabilidad de tu parcela."
    },
    {
      id: "servicios",
      question: "¿Cómo se conectan los servicios (agua y luz)?",
      answer: "Las casas vienen preparadas para conexiones estándar. Agua y electricidad se conectan como en cualquier vivienda tradicional. Para internet, puedes usar conexión por fibra (si está disponible en la zona), 4G/5G o internet satelital. Te asesoramos sobre las mejores opciones para tu ubicación específica."
    },
    {
      id: "calidad",
      question: "¿Qué garantías ofrecen sobre la calidad de construcción?",
      answer: "Ofrecemos garantía estructural de 10 años y garantía general de 2 años."
    },
    {
      id: "precio",
      question: "¿Qué está incluido en el precio?",
      answer: "El precio incluye la casa completamente terminada, transporte a tu ubicación con instalación completa. Sin costes ocultos ni sorpresas."
    },
    {
      id: "mantenimiento",
      question: "¿Qué mantenimiento requieren?",
      answer: "El mantenimiento es mínimo, similar al de cualquier vivienda tradicional. Los materiales utilizados están diseñados para requerir poco mantenimiento y tener larga durabilidad."
    },
    {
      id: "movilidad",
      question: "¿Se pueden trasladar a otra ubicación?",
      answer: "Sí, una de las grandes ventajas de nuestras casas modulares móviles es su capacidad de traslado. Aunque están diseñadas para ser tu hogar permanente, pueden moverse a otra ubicación si es necesario. El proceso requiere planificación y equipos especializados que podemos gestionar."
    },
    {
      id: "personalizacion",
      question: "¿Puedo personalizar el diseño interior?",
      answer: "Absolutamente. Nuestras casas modulares móviles son totalmente personalizables. Puedes elegir distribución interior, acabados, colores, tipos de suelo, cocina, baño y todos los detalles que hagan tu casa única. Trabajamos contigo desde el diseño hasta la entrega final."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-forest-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-nex-primary/10 text-nex-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            Resolvemos tus dudas
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg font-inter text-nex-text/80 max-w-2xl mx-auto leading-relaxed">
            Todo lo que necesitas saber sobre nuestras casas modulares móviles sin obra
          </p>
        </div>

        <div className="animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-white border border-forest-200 rounded-2xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left py-6 text-lg font-inter font-semibold text-nex-text hover:text-nex-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-nex-text/80 font-inter leading-relaxed">
                  {faq.answer}
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
