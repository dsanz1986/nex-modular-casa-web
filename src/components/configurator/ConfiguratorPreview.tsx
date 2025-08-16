
import { ConfiguratorState } from "@/lib/configurator-data";
import { LayeredPreviewImage } from "./LayeredPreviewImage";

interface ConfiguratorPreviewProps {
  config: ConfiguratorState;
  viewMode: "exterior" | "interior";
  activeCategory?: string;
}

export const ConfiguratorPreview = ({ config, viewMode, activeCategory }: ConfiguratorPreviewProps) => {
  return (
    <div className="relative aspect-[4/3] bg-gradient-to-br from-forest-50 to-forest-100 rounded-2xl overflow-hidden">
      <LayeredPreviewImage 
        config={config}
        viewMode={viewMode}
        activeCategory={activeCategory}
        className="rounded-2xl"
      />
    </div>
  );
};
