
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getBaseImagePath, getConfigurationLayers, ConfiguratorState } from "@/lib/configurator-data";

interface LayeredPreviewImageProps {
  config: ConfiguratorState;
  viewMode: "exterior" | "interior";
  className?: string;
  lastSelectedOption?: { category: string; option: string; view: "exterior" | "interior" };
}

export const LayeredPreviewImage = ({ 
  config, 
  viewMode, 
  className = "",
  lastSelectedOption
}: LayeredPreviewImageProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  // If we have a last selected option for this view mode, use it to override the config
  let effectiveConfig = config;
  if (lastSelectedOption && lastSelectedOption.view === viewMode) {
    effectiveConfig = {
      ...config,
      [`${lastSelectedOption.view}${lastSelectedOption.category.charAt(0).toUpperCase()}${lastSelectedOption.category.slice(1)}`]: lastSelectedOption.option
    };
  }

  const baseImageSrc = getBaseImagePath(viewMode);
  const layers = getConfigurationLayers(effectiveConfig, viewMode);
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
  }, [config, viewMode, lastSelectedOption]);

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

      {/* Layer images */}
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
