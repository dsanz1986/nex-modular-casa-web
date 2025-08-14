
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
  const layers = getConfigurationLayers(config, viewMode);
  
  // If there's a priority layer (last selected), show only that one
  const priorityLayer = layers.find(layer => layer.priority);
  const imagesToShow = priorityLayer ? [priorityLayer] : layers;
  
  const allImages = [baseImageSrc, ...imagesToShow.map(layer => layer.src)];

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
  }, [config, viewMode, JSON.stringify(config.lastSelected)]);

  if (isLoading) {
    return <Skeleton className={`w-full h-full ${className}`} />;
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Base image - only show if no priority layer or if base image is loaded */}
      {(!priorityLayer || !loadedImages.has(priorityLayer.src)) && loadedImages.has(baseImageSrc) && (
        <img
          src={baseImageSrc}
          alt={`Base ${viewMode}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Layer images */}
      {imagesToShow.map((layer, index) => (
        loadedImages.has(layer.src) && (
          <img
            key={`${layer.category}-${layer.option}-${layer.priority ? 'priority' : 'normal'}`}
            src={layer.src}
            alt={`${layer.category} ${layer.option}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: layer.priority ? 10 : index + 1 }}
          />
        )
      ))}

      {/* Fallback if no images load */}
      {!loadedImages.has(baseImageSrc) && imagesToShow.every(layer => !loadedImages.has(layer.src)) && (
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
