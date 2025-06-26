
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface ModelImageCarouselProps {
  images: string[];
  modelName: string;
}

const ModelImageCarousel = ({ images, modelName }: ModelImageCarouselProps) => {
  const getImageAlt = (index: number, modelName: string) => {
    const altTexts = [
      `Casa modular móvil ${modelName} - Vista exterior principal`,
      `Interior casa modular ${modelName} - Salón y cocina`,
      `Dormitorio casa modular móvil ${modelName}`,
      `Baño completo casa modular ${modelName}`,
      `Cocina equipada casa modular móvil ${modelName}`,
      `Vista exterior lateral casa modular ${modelName}`,
      `Distribución interior casa modular móvil ${modelName}`,
      `Detalles acabados casa modular ${modelName}`,
      `Instalación casa modular móvil ${modelName}`,
      `Casa modular ${modelName} terminada`
    ];
    
    return altTexts[index] || `Casa modular móvil ${modelName} - Imagen ${index + 1}`;
  };

  return (
    <div className="relative mb-6">
      <Carousel 
        className="w-full max-w-xl mx-auto"
        opts={{ 
          loop: true,
          align: "start"
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-0">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={image}
                      alt={getImageAlt(index, modelName)}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      width="600"
                      height="450"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-white/80 hover:bg-white border-0 shadow-lg" />
        <CarouselNext className="right-2 bg-white/80 hover:bg-white border-0 shadow-lg" />
      </Carousel>
      
      {/* Indicador de número de imágenes */}
      <div className="text-center mt-3">
        <span className="text-sm text-nex-text/60 font-inter">
          {images.length} {images.length === 1 ? 'imagen' : 'imágenes'}
        </span>
      </div>
    </div>
  );
};

export default ModelImageCarousel;
