
import { ConfiguratorState } from "@/lib/configurator-data";
import { LayeredPreviewImage } from "./LayeredPreviewImage";

interface ConfiguratorPreviewProps {
  config: ConfiguratorState;
  viewMode: "exterior" | "interior";
  lastSelectedOption?: { category: string; option: string; view: "exterior" | "interior" };
}

export const ConfiguratorPreview = ({ config, viewMode, lastSelectedOption }: ConfiguratorPreviewProps) => {
  return (
    <div className="relative aspect-[4/3] bg-gradient-to-br from-forest-50 to-forest-100 rounded-2xl overflow-hidden">
      <LayeredPreviewImage 
        config={config}
        viewMode={viewMode}
        lastSelectedOption={lastSelectedOption}
        className="rounded-2xl"
      />
    </div>
  );
};
