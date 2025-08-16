
import { ConfiguratorState, configuratorData } from "@/lib/configurator-data";
import { useTranslation } from "react-i18next";
import { OptionGroup } from "./OptionGroup";

interface ExteriorControlsProps {
  config: ConfiguratorState;
  onUpdate: (updates: Partial<ConfiguratorState>, category?: string) => void;
}

export const ExteriorControls = ({ config, onUpdate }: ExteriorControlsProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <OptionGroup
        title={t('configurator.categories.exteriorCladding')}
        options={configuratorData.exterior.cladding.options}
        selectedValue={config.exteriorCladding}
        onSelect={(value) => onUpdate({ exteriorCladding: value }, 'cladding')}
        showColors={true}
      />
      
      <OptionGroup
        title={t('configurator.categories.exteriorDoors')}
        options={configuratorData.exterior.doors.options}
        selectedValue={config.exteriorDoors}
        onSelect={(value) => onUpdate({ exteriorDoors: value }, 'doors')}
        showColors={false}
      />
      
      <OptionGroup
        title={t('configurator.categories.exteriorWindows')}
        options={configuratorData.exterior.windows.options}
        selectedValue={config.exteriorWindows}
        onSelect={(value) => onUpdate({ exteriorWindows: value }, 'windows')}
        showColors={false}
      />
    </div>
  );
};
