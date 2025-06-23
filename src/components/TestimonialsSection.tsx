
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
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
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-forest-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-nex-text mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg font-inter text-nex-text/80 max-w-2xl mx-auto leading-relaxed">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-3xl overflow-hidden animate-slide-up ${index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''}`}>
              <CardContent className="p-8">
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
                <p className="text-nex-text/80 font-inter leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Customer info */}
                <div className="flex items-center gap-4">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
