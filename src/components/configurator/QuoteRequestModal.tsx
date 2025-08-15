import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ConfiguratorState, getSelectedOptions } from "@/lib/configurator-data";

interface QuoteRequestModalProps {
  config: ConfiguratorState;
}

export const QuoteRequestModal = ({ config }: QuoteRequestModalProps) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const selectedOptions = getSelectedOptions(config);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(null);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setComments("");
    } catch (error) {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">{t('configurator.requestQuote')}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t('configurator.quoteForm.title')}</AlertDialogTitle>
          <AlertDialogDescription>
            {t('configurator.quoteForm.subtitle')}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                {t('configurator.quoteForm.name')}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('configurator.quoteForm.namePlaceholder')}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                {t('configurator.quoteForm.email')}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('configurator.quoteForm.emailPlaceholder')}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                {t('configurator.quoteForm.phone')}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t('configurator.quoteForm.phonePlaceholder')}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="comments" className="text-right">
                {t('configurator.quoteForm.comments')}
              </Label>
              <Textarea
                id="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder={t('configurator.quoteForm.commentsPlaceholder')}
                className="col-span-3"
              />
            </div>
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-nex-text mb-4">
                  {t('configurator.summary.title')}
                </h3>
                
                <div className="space-y-2 text-sm">
                  {selectedOptions.exteriorCladding && (
                    <div className="flex justify-between">
                      <span className="text-nex-text/70">{t('configurator.categories.exteriorCladding')}:</span>
                      <span className="font-medium">{selectedOptions.exteriorCladding.name}</span>
                    </div>
                  )}
                  
                  {selectedOptions.exteriorDoors && (
                    <div className="flex justify-between">
                      <span className="text-nex-text/70">{t('configurator.categories.exteriorDoors')}:</span>
                      <span className="font-medium">{selectedOptions.exteriorDoors.name}</span>
                    </div>
                  )}
                  
                  {selectedOptions.exteriorWindows && (
                    <div className="flex justify-between">
                      <span className="text-nex-text/70">{t('configurator.categories.exteriorWindows')}:</span>
                      <span className="font-medium">{selectedOptions.exteriorWindows.name}</span>
                    </div>
                  )}
                  
                  {selectedOptions.interiorFlooring && (
                    <div className="flex justify-between">
                      <span className="text-nex-text/70">{t('configurator.categories.interiorFlooring')}:</span>
                      <span className="font-medium">{selectedOptions.interiorFlooring.name}</span>
                    </div>
                  )}
                  
                  {selectedOptions.interiorKitchen && (
                    <div className="flex justify-between">
                      <span className="text-nex-text/70">{t('configurator.categories.interiorKitchen')}:</span>
                      <span className="font-medium">{selectedOptions.interiorKitchen.name}</span>
                    </div>
                  )}
                  
                  {selectedOptions.interiorBathroom && (
                    <div className="flex justify-between">
                      <span className="text-nex-text/70">{t('configurator.categories.interiorBathroom')}:</span>
                      <span className="font-medium">{selectedOptions.interiorBathroom.name}</span>
                    </div>
                  )}
                </div>
              </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isSubmitting}>
              {t('cookies.cancel')}
            </AlertDialogCancel>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? t('configurator.quoteForm.submitting')
                : t('configurator.quoteForm.submit')}
            </Button>
          </AlertDialogFooter>
        </form>
        {success === true && (
          <div className="mt-4 text-green-500">
            {t('configurator.quoteForm.success')}
          </div>
        )}
        {success === false && (
          <div className="mt-4 text-red-500">
            {t('configurator.quoteForm.error')}
          </div>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};
