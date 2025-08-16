
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getBaseImagePath, ConfiguratorState, getConfigurationLayers } from "@/lib/configurator-data";

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
  
  // Get all configuration layers
  const layers = getConfigurationLayers(config, viewMode);
  const allImages = [baseImageSrc, ...layers.map(layer => layer.src)].filter(src => src && src !== '');

  console.log(`Preview update for ${viewMode}:`, { config, layers, allImages }); // Enhanced debug log

  // Preload images and track loading state
  useEffect(() => {
    setIsLoading(true);
    setLoadedImages(new Set());
    setFailedImages(new Set());

    if (allImages.length === 0) {
      setIsLoading(false);
      return;
    }

    const imagePromises = allImages.map(src => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          console.log(`✅ Image loaded successfully: ${src}`);
          resolve(src);
        };
        img.onerror = () => {
          console.error(`❌ Failed to load image: ${src}`);
          reject(src);
        };
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

      console.log(`Image loading completed:`, { loaded: Array.from(loaded), failed: Array.from(failed) });
      setLoadedImages(loaded);
      setFailedImages(failed);
      setIsLoading(false);
    });
  }, [config, viewMode]); // Trigger on config or viewMode changes

  if (isLoading) {
    return <Skeleton className={`w-full h-full ${className}`} />;
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Base image - always in the background */}
      {loadedImages.has(baseImageSrc) && (
        <img
          src={baseImageSrc}
          alt={`Base ${viewMode}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
      )}

      {/* Render ALL valid layers with correct z-index */}
      {layers.map((layer) => (
        layer.src && loadedImages.has(layer.src) && (
          <img
            key={`${layer.category}-${layer.option}`}
            src={layer.src}
            alt={`${layer.category} ${layer.option}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: layer.zIndex }}
          />
        )
      ))}

      {/* Debug overlay for failed images (only in development) */}
      {process.env.NODE_ENV === 'development' && failedImages.size > 0 && (
        <div className="absolute top-2 left-2 bg-red-100 text-red-800 text-xs p-2 rounded max-w-xs">
          <div className="font-semibold">Failed to load:</div>
          {Array.from(failedImages).map(src => (
            <div key={src} className="truncate">{src}</div>
          ))}
        </div>
      )}

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
