
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getBaseImagePath, ConfiguratorState, getImagePath } from "@/lib/configurator-data";

interface LayeredPreviewImageProps {
  config: ConfiguratorState;
  viewMode: "exterior" | "interior";
  className?: string;
}

export const LayeredPreviewImage = ({ config, viewMode, className = "" }: LayeredPreviewImageProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  const baseImageSrc = getBaseImagePath(viewMode);
  
  // Get all configuration layers - always show selected options
  const getConfigurationLayers = () => {
    const layers = [];
    
    if (viewMode === 'exterior') {
      // Always add selected layers for exterior
      layers.push({ 
        category: 'cladding', 
        option: config.exteriorCladding,
        zIndex: 1
      });
      
      layers.push({ 
        category: 'doors', 
        option: config.exteriorDoors,
        zIndex: 2
      });
      
      layers.push({ 
        category: 'windows', 
        option: config.exteriorWindows,
        zIndex: 3
      });
    } else if (viewMode === 'interior') {
      // Always add selected layers for interior
      layers.push({ 
        category: 'flooring', 
        option: config.interiorFlooring,
        zIndex: 1
      });
      
      layers.push({ 
        category: 'kitchen', 
        option: config.interiorKitchen,
        zIndex: 2
      });
      
      layers.push({ 
        category: 'bathroom', 
        option: config.interiorBathroom,
        zIndex: 3
      });
    }
    
    return layers.map(layer => ({
      ...layer,
      src: getImagePath(layer.category, layer.option, viewMode)
    }));
  };

  const layers = getConfigurationLayers();
  const allImages = [baseImageSrc, ...layers.map(layer => layer.src)];

  // Preload images and track loading state
  useEffect(() => {
    setIsLoading(true);
    setLoadedImages(new Set());
    setFailedImages(new Set());

    const imagePromises = allImages.map(src => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
        img.src = src;
      });
    });

    Promise.allSettled(imagePromises).then(results => {
      const loaded = new Set<string>();
      const failed = new Set<string>();

      results.forEach((result, index) => {
        const src = allImages[index];
        if (result.status === 'fulfilled') {
          loaded.add(src);
        } else {
          failed.add(src);
          console.warn(`Failed to load image: ${src}`);
        }
      });

      setLoadedImages(loaded);
      setFailedImages(failed);
      setIsLoading(false);
    });
  }, [config, viewMode]);

  if (isLoading) {
    return <Skeleton className={`w-full h-full ${className}`} />;
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Base image - always at the bottom */}
      {loadedImages.has(baseImageSrc) && (
        <img
          src={baseImageSrc}
          alt={`Base ${viewMode}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
      )}

      {/* Layer images - render all selected options on top of base */}
      {layers.map((layer) => (
        loadedImages.has(layer.src) && (
          <img
            key={`${layer.category}-${layer.option}`}
            src={layer.src}
            alt={`${layer.category} ${layer.option}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: layer.zIndex }}
          />
        )
      ))}

      {/* Fallback if no base image loads */}
      {!loadedImages.has(baseImageSrc) && (
        <div className="absolute inset-0 bg-gradient-to-br from-forest-50 to-forest-100 flex items-center justify-center">
          <div className="text-center text-nex-text/60">
            <div className="text-sm font-medium">Vista {viewMode}</div>
            <div className="text-xs mt-1">Imagen no disponible</div>
          </div>
        </div>
      )}
    </div>
  );
};
