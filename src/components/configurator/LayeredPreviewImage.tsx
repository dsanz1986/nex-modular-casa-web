
import { useState, useEffect, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getBaseImagePath, ConfiguratorState, getConfigurationLayers } from "@/lib/configurator-data";

interface LayeredPreviewImageProps {
  config: ConfiguratorState;
  viewMode: "exterior" | "interior";
  activeCategory?: string;
  className?: string;
}

export const LayeredPreviewImage = ({ config, viewMode, activeCategory, className = "" }: LayeredPreviewImageProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const abortControllerRef = useRef<AbortController | null>(null);

  const baseImageSrc = getBaseImagePath(viewMode);
  
  // Get all configuration layers with active category priority
  const layers = getConfigurationLayers(config, viewMode, activeCategory);
  const allImages = [baseImageSrc, ...layers.map(layer => layer.src)].filter(src => src && src !== '');

  console.log(`🔄 Preview update for ${viewMode}:`, { 
    config, 
    activeCategory,
    layers, 
    allImages,
    baseImageSrc 
  });

  // Preload images and track loading state with proper cleanup
  useEffect(() => {
    // Cancel previous loading if still in progress
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller for this loading cycle
    abortControllerRef.current = new AbortController();
    const currentController = abortControllerRef.current;

    setIsLoading(true);
    setLoadedImages(new Set());
    setFailedImages(new Set());

    console.log(`🚀 Starting image preload for ${viewMode} with ${allImages.length} images`);

    if (allImages.length === 0) {
      console.log(`⚠️ No images to load for ${viewMode}`);
      setIsLoading(false);
      return;
    }

    const imagePromises = allImages.map((src, index) => {
      return new Promise<{ src: string; success: boolean }>((resolve) => {
        const img = new Image();
        
        const cleanup = () => {
          img.onload = null;
          img.onerror = null;
        };

        img.onload = () => {
          if (currentController.signal.aborted) {
            cleanup();
            return;
          }
          console.log(`✅ Image ${index + 1}/${allImages.length} loaded: ${src}`);
          cleanup();
          resolve({ src, success: true });
        };

        img.onerror = () => {
          if (currentController.signal.aborted) {
            cleanup();
            return;
          }
          console.error(`❌ Image ${index + 1}/${allImages.length} failed: ${src}`);
          cleanup();
          resolve({ src, success: false });
        };

        // Check if already aborted before starting load
        if (currentController.signal.aborted) {
          cleanup();
          resolve({ src, success: false });
          return;
        }

        img.src = src;
      });
    });

    Promise.all(imagePromises).then(results => {
      if (currentController.signal.aborted) {
        console.log(`🚫 Image loading aborted for ${viewMode}`);
        return;
      }

      const loaded = new Set<string>();
      const failed = new Set<string>();

      results.forEach(result => {
        if (result.success) {
          loaded.add(result.src);
        } else {
          failed.add(result.src);
        }
      });

      console.log(`🏁 Image loading completed for ${viewMode}:`, { 
        loaded: Array.from(loaded), 
        failed: Array.from(failed) 
      });
      
      setLoadedImages(loaded);
      setFailedImages(failed);
      setIsLoading(false);
    });

    // Cleanup function
    return () => {
      if (currentController) {
        currentController.abort();
      }
    };
  }, [baseImageSrc, viewMode, activeCategory, JSON.stringify(config)]);

  if (isLoading) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-forest-50/80 to-forest-100/80">
          <div className="text-center text-nex-text/60">
            <div className="text-sm font-medium">Cargando vista {viewMode}...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Base image - always in the background */}
      {loadedImages.has(baseImageSrc) && (
        <img
          key={`base-${viewMode}-${Date.now()}`}
          src={baseImageSrc}
          alt={`Base ${viewMode}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
      )}

      {/* Render ALL valid layers with correct z-index, prioritizing active category */}
      {layers
        .sort((a, b) => a.zIndex - b.zIndex) // Sort by z-index
        .map((layer) => (
          layer.src && loadedImages.has(layer.src) && (
            <img
              key={`${layer.category}-${layer.option}-${Date.now()}`}
              src={layer.src}
              alt={`${layer.category} ${layer.option}`}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: layer.zIndex }}
            />
          )
        ))}

      {/* Debug overlay for failed images (only in development) */}
      {process.env.NODE_ENV === 'development' && failedImages.size > 0 && (
        <div className="absolute top-2 left-2 bg-red-100 text-red-800 text-xs p-2 rounded max-w-xs z-50">
          <div className="font-semibold">Failed to load ({failedImages.size}):</div>
          {Array.from(failedImages).slice(0, 3).map(src => (
            <div key={src} className="truncate">{src.split('/').pop()}</div>
          ))}
          {failedImages.size > 3 && <div>... and {failedImages.size - 3} more</div>}
        </div>
      )}

      {/* Fallback if no base image loads */}
      {!loadedImages.has(baseImageSrc) && !isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-forest-50 to-forest-100 flex items-center justify-center">
          <div className="text-center text-nex-text/60">
            <div className="text-sm font-medium">Vista {viewMode}</div>
            <div className="text-xs mt-1">Imagen base no disponible</div>
          </div>
        </div>
      )}
    </div>
  );
};
