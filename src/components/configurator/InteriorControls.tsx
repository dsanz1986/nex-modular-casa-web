
import { ConfiguratorState } from "@/lib/configurator-data";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Construction } from "lucide-react";

interface InteriorControlsProps {
  config: ConfiguratorState;
  onUpdate: (updates: Partial<ConfiguratorState>) => void;
}

export const InteriorControls = ({ config, onUpdate }: InteriorControlsProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <Card className="border-dashed border-2 border-nex-text/20">
        <CardContent className="p-8 text-center">
          <Construction className="w-16 h-16 mx-auto mb-4 text-nex-text/40" />
          <h3 className="text-lg font-playfair font-bold text-nex-text mb-2">
            {t('configurator.interior.comingSoon.title')}
          </h3>
          <p className="text-nex-text/60 font-inter">
            {t('configurator.interior.comingSoon.description')}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
