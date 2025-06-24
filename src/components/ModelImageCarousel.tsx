
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface ModelImageCarouselProps {
  images: string[];
  modelName: string;
}

const ModelImageCarousel = ({ images, modelName }: ModelImageCarouselProps) => {
  return (
    <div className="relative mb-6">
      <Carousel className="w-full max-w-xl mx-auto">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-0">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={image}
                      alt={`${modelName} - Imagen ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
