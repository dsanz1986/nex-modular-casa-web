
import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const HeroImageCarousel = () => {
  const [api, setApi] = useState<any>();
  
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
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: false
          })
        ]}
        setApi={setApi}
      >
        <CarouselContent className="-ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0">
              <Card className="border-0 rounded-none">
                <div className="relative w-full h-[100vh] overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroImageCarousel;
