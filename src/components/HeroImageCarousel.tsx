
import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const HeroImageCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  
  const images = [
    {
      src: "/lovable-uploads/ca3bfe81-d085-45fb-9fff-a92cfb596fbb.png",
      alt: "Casa modular Nex - Terraza con vistas"
    },
    {
      src: "/lovable-uploads/9feaafc9-2051-40d2-9dd6-e479b548bb65.png",
      alt: "Casa modular Nex - Entrada principal"
    },
    {
      src: "/lovable-uploads/943eb50b-a292-4cec-b854-f4e444ef5179.png",
      alt: "Casa modular Nex - Cocina y comedor"
    },
    {
      src: "/lovable-uploads/2e0784c0-bb76-4149-b352-128312b6b24d.png",
      alt: "Casa modular Nex - Sala de estar"
    },
    {
      src: "/lovable-uploads/7ce206a0-126c-4be7-85c2-66eaf9ab8699.png",
      alt: "Casa modular Nex - Oficina"
    },
    {
      src: "/lovable-uploads/b45601b5-5013-4ec8-8dd2-7e970ceaf5d0.png",
      alt: "Casa modular Nex - Sala de estar moderna"
    },
    {
      src: "/lovable-uploads/e212e101-a397-41d6-ac90-df77fcd5488d.png",
      alt: "Casa modular Nex - Living completo"
    },
    {
      src: "/lovable-uploads/a7be42bb-c3d5-4b0c-8c62-40c207261124.png",
      alt: "Casa modular Nex - Área social"
    },
    {
      src: "/lovable-uploads/fd151d1f-0a79-4b57-ae6c-f6e97175f117.png",
      alt: "Casa modular Nex - Living con TV"
    },
    {
      src: "/lovable-uploads/779b96e7-11df-480b-b9ba-ce242cb401b7.png",
      alt: "Casa modular Nex - Vista exterior completa"
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
    <div className="relative w-full h-full">
      <Carousel 
        className="w-full h-full" 
        opts={{ 
          loop: true,
          align: "start"
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
            stopOnMouseEnter: true
          })
        ]}
        setApi={setApi}
      >
        <CarouselContent className="-ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0">
              <Card className="border-0 rounded-none">
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
                  
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Badge de calidad */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg z-20">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-nex-primary rounded-full animate-pulse"></div>
                      <span className="text-sm font-inter font-semibold text-nex-text">Calidad Premium</span>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Controles del carrusel */}
        <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-nex-primary text-nex-primary hover:text-nex-primary shadow-lg z-30" />
        <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-nex-primary text-nex-primary hover:text-nex-primary shadow-lg z-30" />
        
        {/* Indicadores de puntos */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
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
