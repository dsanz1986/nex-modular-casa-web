
import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const HeroImageCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  
  const images = [
    {
      src: "/lovable-uploads/c37a4952-fbe7-4123-8b74-27a1354e139c.png",
      alt: "Casa modular Nex - Porche con terraza exterior"
    },
    {
      src: "/lovable-uploads/806c2b8e-df1f-427b-bbb2-fd48460d4149.png",
      alt: "Casa modular Nex - Entrada principal con puertas correderas"
    },
    {
      src: "/lovable-uploads/eb3070a6-ca7a-4815-ab35-36ba8e46eb3c.png",
      alt: "Casa modular Nex - Cocina moderna integrada"
    },
    {
      src: "/lovable-uploads/755573d9-3acd-45bd-8ce4-91598735c183.png",
      alt: "Casa modular Nex - Salón comedor con sofá negro"
    },
    {
      src: "/lovable-uploads/bb3f5eed-380b-491a-a10e-44f443564eac.png",
      alt: "Casa modular Nex - Área de estar con comedor"
    },
    {
      src: "/lovable-uploads/81f18258-549e-40ba-980c-8c359e18274a.png",
      alt: "Casa modular Nex - Espacio diáfano completo"
    },
    {
      src: "/lovable-uploads/92284500-2935-472b-9e2c-3b66daba0187.png",
      alt: "Casa modular Nex - Salón con mueble TV"
    },
    {
      src: "/lovable-uploads/fdefe7c6-caf7-4d51-8baf-147a512a4f98.png",
      alt: "Casa modular Nex - Vista completa del interior"
    },
    {
      src: "/lovable-uploads/5842147e-08a5-4ce5-9c5d-c22df2320647.png",
      alt: "Casa modular Nex - Exterior completo con paneles solares"
    },
    {
      src: "/lovable-uploads/6acb8d07-7f3a-430c-874a-516011689ae2.png",
      alt: "Casa modular Nex - Vista de mesa de comedor"
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
            delay: 1500,
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
