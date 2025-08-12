
import { ConfiguratorState, configuratorData } from "@/lib/configurator-data";
import { useTranslation } from "react-i18next";
import { OptionGroup } from "./OptionGroup";

interface InteriorControlsProps {
  config: ConfiguratorState;
  onUpdate: (updates: Partial<ConfiguratorState>) => void;
}

export const InteriorControls = ({ config, onUpdate }: InteriorControlsProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <OptionGroup
        title={t('configurator.categories.flooring')}
        options={configuratorData.interior.flooring.options}
        selectedValue={config.interiorFlooring}
        onSelect={(value) => onUpdate({ interiorFlooring: value })}
        showColors={true}
      />

      <OptionGroup
        title={t('configurator.categories.kitchen')}
        options={configuratorData.interior.kitchen.options}
        selectedValue={config.kitchen}
        onSelect={(value) => onUpdate({ kitchen: value })}
      />

      <OptionGroup
        title={t('configurator.categories.bathroom')}
        options={configuratorData.interior.bathroom.options}
        selectedValue={config.bathroom}
        onSelect={(value) => onUpdate({ bathroom: value })}
      />

      <OptionGroup
        title={t('configurator.categories.interiorDoors')}
        options={configuratorData.interior.interiorDoors.options}
        selectedValue={config.interiorDoors}
        onSelect={(value) => onUpdate({ interiorDoors: value })}
      />
    </div>
  );
};
