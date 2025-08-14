
import { ConfiguratorState, getSelectedOptions } from "@/lib/configurator-data";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuoteRequestModal } from "./QuoteRequestModal";

interface ConfiguratorSummaryProps {
  config: ConfiguratorState;
}

export const ConfiguratorSummary = ({ config }: ConfiguratorSummaryProps) => {
  const { t } = useTranslation();
  const selectedOptions = getSelectedOptions(config);

  return (
    <Card className="border-nex-primary/20">
      <CardHeader>
        <CardTitle className="text-lg font-playfair text-nex-text">
          {t('configurator.summary.title')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Selected Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="text-sm">
            <span className="font-medium">{t('configurator.categories.exteriorCladding')}:</span>
            <span className="ml-2 text-nex-text/80">{selectedOptions.exteriorCladding?.name}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium">{t('configurator.categories.exteriorDoors')}:</span>
            <span className="ml-2 text-nex-text/80">{selectedOptions.exteriorDoors?.name}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium">{t('configurator.categories.exteriorWindows')}:</span>
            <span className="ml-2 text-nex-text/80">{selectedOptions.exteriorWindows?.name}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium">{t('configurator.categories.interiorFlooring')}:</span>
            <span className="ml-2 text-nex-text/80">{selectedOptions.interiorFlooring?.name}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium">{t('configurator.categories.interiorKitchen')}:</span>
            <span className="ml-2 text-nex-text/80">{selectedOptions.interiorKitchen?.name}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium">{t('configurator.categories.interiorBathroom')}:</span>
            <span className="ml-2 text-nex-text/80">{selectedOptions.interiorBathroom?.name}</span>
          </div>
        </div>

        {/* Quote Request Button */}
        <div className="flex justify-center pt-4">
          <QuoteRequestModal config={config}>
            <Button className="bg-nex-primary hover:bg-nex-primary/90 px-8 py-3">
              {t('configurator.requestQuote')}
            </Button>
          </QuoteRequestModal>
        </div>
      </CardContent>
    </Card>
  );
};
