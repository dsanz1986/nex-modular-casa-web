
import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const HeroImageCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  
  const images = [
    {
      src: "/lovable-uploads/c6b8fce4-da6d-4caa-ab79-76c00abf4713.png",
      alt: "Casa modular moderna Nex Modular Homes - Modelo 1"
    },
    {
      src: "/lovable-uploads/48c4a309-3d86-476f-8aa9-b0c036f4377c.png",
      alt: "Casa modular moderna Nex Modular Homes - Modelo 2"
    },
    {
      src: "/lovable-uploads/2050482f-8056-4911-89a5-9ab6b7d0fe28.png",
      alt: "Casa modular moderna Nex Modular Homes - Modelo 3"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative animate-slide-up">
      {/* Marco decorativo */}
      <div className="absolute -inset-4 bg-gradient-to-r from-nex-primary to-forest-400 rounded-3xl opacity-20 blur-xl"></div>
      
      <Carousel 
        className="w-full" 
        opts={{ 
          loop: true,
          align: "start"
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: true,
            stopOnMouseEnter: true
          })
        ]}
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-0">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-nex-text/30 via-transparent to-transparent z-10"></div>
                  
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  
                  {/* Badge de calidad */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg z-20">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-inter font-semibold text-nex-text">Calidad Premium</span>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Controles del carrusel */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-nex-primary text-nex-primary hover:text-nex-primary shadow-lg" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-nex-primary text-nex-primary hover:text-nex-primary shadow-lg" />
        
        {/* Indicadores de puntos */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current 
                  ? 'bg-white shadow-lg scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default HeroImageCarousel;
