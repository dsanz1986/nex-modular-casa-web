
import { ConfiguratorState, configuratorData } from "@/lib/configurator-data";
import { OptionGroup } from "./OptionGroup";
import { useTranslation } from "react-i18next";

interface ExteriorControlsProps {
  config: ConfiguratorState;
  onUpdate: (updates: Partial<ConfiguratorState>) => void;
  onOptionSelect?: (category: string, option: string) => void;
}

export const ExteriorControls = ({ config, onUpdate, onOptionSelect }: ExteriorControlsProps) => {
  const { t } = useTranslation();

  const handleCladdingChange = (optionId: string) => {
    onUpdate({ exteriorCladding: optionId });
    onOptionSelect?.('cladding', optionId);
  };

  const handleDoorsChange = (optionId: string) => {
    onUpdate({ exteriorDoors: optionId });
    onOptionSelect?.('doors', optionId);
  };

  const handleWindowsChange = (optionId: string) => {
    onUpdate({ exteriorWindows: optionId });
    onOptionSelect?.('windows', optionId);
  };

  return (
    <div className="space-y-8">
      <OptionGroup
        title={t('configurator.categories.exteriorCladding')}
        options={configuratorData.exterior.cladding.options}
        selectedValue={config.exteriorCladding}
        onSelect={handleCladdingChange}
        showColors={true}
      />

      <OptionGroup
        title={t('configurator.categories.exteriorDoors')}
        options={configuratorData.exterior.doors.options}
        selectedValue={config.exteriorDoors}
        onSelect={handleDoorsChange}
      />

      <OptionGroup
        title={t('configurator.categories.exteriorWindows')}
        options={configuratorData.exterior.windows.options}
        selectedValue={config.exteriorWindows}
        onSelect={handleWindowsChange}
      />
    </div>
  );
};
