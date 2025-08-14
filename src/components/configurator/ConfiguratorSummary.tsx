
import { ConfiguratorState, getSelectedOptions, getConfigPrice } from "@/lib/configurator-data";
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
  const totalPrice = getConfigPrice(config);
  const basePrice = 39990;
  const extrasPrice = totalPrice - basePrice;

  return (
    <Card className="border-nex-primary/20">
      <CardHeader>
        <CardTitle className="text-lg font-playfair text-nex-text">
          {t('configurator.summary.title')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Selected Options */}
        <div className="space-y-2">
          <div className="text-sm">
            <span className="font-medium">Revestimiento:</span>
            <span className="ml-2 text-nex-text/80">{selectedOptions.exteriorCladding?.name}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium">Puertas:</span>
            <span className="ml-2 text-nex-text/80">{selectedOptions.exteriorDoors?.name}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium">Ventanas:</span>
            <span className="ml-2 text-nex-text/80">{selectedOptions.exteriorWindows?.name}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium">Tarima:</span>
            <span className="ml-2 text-nex-text/80">{selectedOptions.interiorFlooring?.name}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium">Cocina:</span>
            <span className="ml-2 text-nex-text/80">{selectedOptions.interiorKitchen?.name}</span>
          </div>
          <div className="text-sm">
            <span className="font-medium">Baño:</span>
            <span className="ml-2 text-nex-text/80">{selectedOptions.interiorBathroom?.name}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>{t('configurator.summary.basePrice')}</span>
            <span>{basePrice.toLocaleString()}€</span>
          </div>
          {extrasPrice > 0 && (
            <div className="flex justify-between text-sm">
              <span>{t('configurator.summary.extras')}</span>
              <span>+{extrasPrice.toLocaleString()}€</span>
            </div>
          )}
          <div className="flex justify-between text-lg font-semibold text-nex-primary border-t pt-2">
            <span>{t('configurator.summary.total')}</span>
            <span>{totalPrice.toLocaleString()}€</span>
          </div>
        </div>

        {/* Quote Request Button */}
        <QuoteRequestModal config={config}>
          <Button className="w-full bg-nex-primary hover:bg-nex-primary/90">
            {t('configurator.requestQuote')}
          </Button>
        </QuoteRequestModal>
      </CardContent>
    </Card>
  );
};
