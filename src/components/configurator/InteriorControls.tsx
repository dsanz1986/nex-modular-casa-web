
import { ConfiguratorState, configuratorData } from "@/lib/configurator-data";
import { useTranslation } from "react-i18next";
import { OptionGroup } from "./OptionGroup";

interface InteriorControlsProps {
  config: ConfiguratorState;
  onUpdate: (updates: Partial<ConfiguratorState>, selectedOption?: { category: string; option: string }) => void;
}

export const InteriorControls = ({ config, onUpdate }: InteriorControlsProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <OptionGroup
        title={t('configurator.categories.interiorFlooring')}
        options={configuratorData.interior.flooring.options}
        selectedValue={config.interiorFlooring}
        onSelect={(value) => onUpdate({ interiorFlooring: value }, { category: 'flooring', option: value })}
        showColors={false}
      />
      
      <OptionGroup
        title={t('configurator.categories.interiorKitchen')}
        options={configuratorData.interior.kitchen.options}
        selectedValue={config.interiorKitchen}
        onSelect={(value) => onUpdate({ interiorKitchen: value }, { category: 'kitchen', option: value })}
        showColors={false}
      />
      
      <OptionGroup
        title={t('configurator.categories.interiorBathroom')}
        options={configuratorData.interior.bathroom.options}
        selectedValue={config.interiorBathroom}
        onSelect={(value) => onUpdate({ interiorBathroom: value }, { category: 'bathroom', option: value })}
        showColors={false}
      />
    </div>
  );
};
