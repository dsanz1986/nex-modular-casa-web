
import { ConfiguratorState, configuratorData } from "@/lib/configurator-data";
import { useTranslation } from "react-i18next";
import { OptionGroup } from "./OptionGroup";

interface ExteriorControlsProps {
  config: ConfiguratorState;
  onUpdate: (updates: Partial<ConfiguratorState>) => void;
}

export const ExteriorControls = ({ config, onUpdate }: ExteriorControlsProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <OptionGroup
        title={t('configurator.categories.exteriorCoating')}
        options={configuratorData.exterior.coating.options}
        selectedValue={config.exteriorCoating}
        onSelect={(value) => onUpdate({ exteriorCoating: value })}
        showColors={true}
      />

      <OptionGroup
        title={t('configurator.categories.exteriorColor')}
        options={configuratorData.exterior.color.options}
        selectedValue={config.exteriorColor}
        onSelect={(value) => onUpdate({ exteriorColor: value })}
        showColors={true}
      />

      <OptionGroup
        title={t('configurator.categories.doors')}
        options={configuratorData.exterior.doors.options}
        selectedValue={config.doors}
        onSelect={(value) => onUpdate({ doors: value })}
      />

      <OptionGroup
        title={t('configurator.categories.windows')}
        options={configuratorData.exterior.windows.options}
        selectedValue={config.windows}
        onSelect={(value) => onUpdate({ windows: value })}
      />
    </div>
  );
};
