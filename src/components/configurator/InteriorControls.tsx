
import { ConfiguratorState, configuratorData } from "@/lib/configurator-data";
import { OptionGroup } from "./OptionGroup";
import { useTranslation } from "react-i18next";

interface InteriorControlsProps {
  config: ConfiguratorState;
  onUpdate: (updates: Partial<ConfiguratorState>) => void;
  onOptionSelect?: (category: string, option: string) => void;
}

export const InteriorControls = ({ config, onUpdate, onOptionSelect }: InteriorControlsProps) => {
  const { t } = useTranslation();

  const handleFlooringChange = (optionId: string) => {
    onUpdate({ interiorFlooring: optionId });
    onOptionSelect?.('flooring', optionId);
  };

  const handleKitchenChange = (optionId: string) => {
    onUpdate({ interiorKitchen: optionId });
    onOptionSelect?.('kitchen', optionId);
  };

  const handleBathroomChange = (optionId: string) => {
    onUpdate({ interiorBathroom: optionId });
    onOptionSelect?.('bathroom', optionId);
  };

  return (
    <div className="space-y-8">
      <OptionGroup
        title={t('configurator.categories.interiorFlooring')}
        options={configuratorData.interior.flooring.options}
        selectedValue={config.interiorFlooring}
        onSelect={handleFlooringChange}
      />

      <OptionGroup
        title={t('configurator.categories.interiorKitchen')}
        options={configuratorData.interior.kitchen.options}
        selectedValue={config.interiorKitchen}
        onSelect={handleKitchenChange}
      />

      <OptionGroup
        title={t('configurator.categories.interiorBathroom')}
        options={configuratorData.interior.bathroom.options}
        selectedValue={config.interiorBathroom}
        onSelect={handleBathroomChange}
      />
    </div>
  );
};
