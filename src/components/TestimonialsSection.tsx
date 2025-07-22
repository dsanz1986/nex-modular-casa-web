
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "María González",
      location: "Madrid",
      rating: 5,
      text: "Excelente servicio desde el primer contacto. La casa superó nuestras expectativas y el proceso de instalación fue muy profesional. Recomendable al 100%.",
      image: "MG"
    },
    {
      name: "Carlos Ruiz",
      location: "Valencia",
      rating: 5,
      text: "Llevábamos años buscando una segunda residencia y esta fue la solución perfecta. Calidad excepcional y cumplieron todos los plazos prometidos.",
      image: "CR"
    },
    {
      name: "Ana Martín",
      location: "Sevilla",
      rating: 5,
      text: "El equipo nos ayudó con toda la documentación y permisos. Muy profesionales y siempre disponibles para resolver nuestras dudas.",
      image: "AM"
    },
    {
      name: "Pedro López",
      location: "Barcelona",
      rating: 5,
      text: "La personalización de nuestra casa fue increíble. Pudimos adaptar cada detalle a nuestras necesidades y el resultado final es espectacular.",
      image: "PL"
    },
    {
      name: "Carmen Torres",
      location: "Bilbao",
      rating: 5,
      text: "Muy satisfechos con la inversión. La casa es eficiente energéticamente y el ahorro en facturas es notable desde el primer mes.",
      image: "CT"
    },
    {
      name: "Javier Moreno",
      location: "Zaragoza",
      rating: 5,
      text: "El montaje fue rapidísimo y sin complicaciones. En pocas semanas teníamos nuestra casa lista para habitar. Increíble experiencia.",
      image: "JM"
    },
    {
      name: "Laura Jiménez",
      location: "Málaga",
      rating: 5,
      text: "La calidad de los materiales es excelente. Llevamos dos años viviendo en la casa y está como el primer día. Totalmente recomendable.",
      image: "LJ"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-forest-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg font-inter text-nex-text/80 max-w-2xl mx-auto leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="pb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="pb-4">
                    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-3xl overflow-hidden h-full">
                      <CardContent className="p-8 flex flex-col h-full min-h-[380px]">
                        {/* Quote icon */}
                        <div className="text-nex-primary/20 mb-4">
                          <Quote className="w-10 h-10" />
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Testimonial text */}
                        <p className="text-nex-text/80 font-inter leading-relaxed mb-6 italic flex-grow">
                          "{testimonial.text}"
                        </p>

                        {/* Customer info */}
                        <div className="flex items-center gap-4 mt-auto">
                          <div className="w-12 h-12 bg-nex-primary rounded-full flex items-center justify-center text-white font-semibold">
                            {testimonial.image}
                          </div>
                          <div>
                            <h4 className="font-inter font-semibold text-nex-text">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-nex-text/60">
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
