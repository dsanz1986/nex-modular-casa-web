import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const NexBaseCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();

  const images = [
    {
      src: "/lovable-uploads/nex-base-1.jpg",
      alt: "NEX BASE™ - Pata metálica regulable primer plano"
    },
    {
      src: "/lovable-uploads/nex-base-2.jpg",
      alt: "NEX BASE™ - Sistema de patas instalado"
    },
    {
      src: "/lovable-uploads/nex-base-3.jpg",
      alt: "NEX BASE™ - Casa modular sobre sistema de patas"
    },
    {
      src: "/lovable-uploads/nex-base-4.jpg",
      alt: "NEX BASE™ - Distribución de patas metálicas"
    },
    {
      src: "/lovable-uploads/nex-base-5.jpg",
      alt: "NEX BASE™ - Detalle de pata sobre hormigón"
    },
    {
      src: "/lovable-uploads/nex-base-6.jpg",
      alt: "NEX BASE™ - Casa de madera elevada sobre patas"
    },
    {
      src: "/lovable-uploads/nex-base-7.jpg",
      alt: "NEX BASE™ - Vista general del sistema instalado"
    },
    {
      src: "/lovable-uploads/nex-base-8.jpg",
      alt: "NEX BASE™ - Montaje con grúa mostrando patas"
    }
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative max-w-4xl mx-auto">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-muted/30">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[350px] md:h-[450px] object-contain object-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 bg-white/90 border-nex-primary/30 hover:bg-white hover:border-nex-primary text-nex-primary" />
        <CarouselNext className="right-4 bg-white/90 border-nex-primary/30 hover:bg-white hover:border-nex-primary text-nex-primary" />
      </Carousel>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-nex-primary w-6"
                : "bg-nex-primary/30 hover:bg-nex-primary/50"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NexBaseCarousel;
