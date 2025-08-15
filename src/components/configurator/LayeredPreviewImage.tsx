
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getBaseImagePath, getConfigurationLayers, ConfiguratorState } from "@/lib/configurator-data";

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
  // Get all layers without checking for defaults - always render what's selected
  const layers = getAllConfigurationLayers(config, viewMode);
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
      {/* Base image */}
      {loadedImages.has(baseImageSrc) && (
        <img
          src={baseImageSrc}
          alt={`Base ${viewMode}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Layer images - always render all layers */}
      {layers.map((layer, index) => (
        loadedImages.has(layer.src) && (
          <img
            key={`${layer.category}-${layer.option}`}
            src={layer.src}
            alt={`${layer.category} ${layer.option}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: index + 1 }}
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

// New function to get ALL configuration layers regardless of defaults
const getAllConfigurationLayers = (config: ConfiguratorState, view: 'exterior' | 'interior') => {
  const layers = [];
  
  if (view === 'exterior') {
    // Always add cladding layer
    layers.push({ category: 'cladding', option: config.exteriorCladding });
    
    // Always add doors layer
    layers.push({ category: 'doors', option: config.exteriorDoors });
    
    // Always add windows layer
    layers.push({ category: 'windows', option: config.exteriorWindows });
  } else if (view === 'interior') {
    // Always add flooring layer
    layers.push({ category: 'flooring', option: config.interiorFlooring });
    
    // Always add kitchen layer
    layers.push({ category: 'kitchen', option: config.interiorKitchen });
    
    // Always add bathroom layer
    layers.push({ category: 'bathroom', option: config.interiorBathroom });
  }
  
  return layers.map(layer => ({
    ...layer,
    src: getImagePath(layer.category, layer.option, view)
  }));
};

// Import the getImagePath function from configurator-data
import { getImagePath } from "@/lib/configurator-data";
