
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es', name: t('language.es'), flag: '🇪🇸' },
    { code: 'en', name: t('language.en'), flag: '🇬🇧' },
    { code: 'fr', name: t('language.fr'), flag: '🇫🇷' },
    { code: 'de', name: t('language.de'), flag: '🇩🇪' },
    { code: 'it', name: t('language.it'), flag: '🇮🇹' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="h-10 px-3 text-nex-text hover:text-nex-primary hover:bg-nex-primary/10 transition-colors"
          aria-label={t('language.selector')}
        >
          <Globe className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline font-inter text-sm">
            {currentLanguage.flag} {currentLanguage.name}
          </span>
          <span className="sm:hidden font-inter text-sm">
            {currentLanguage.flag}
          </span>
          <ChevronDown className="w-3 h-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`cursor-pointer font-inter ${
              i18n.language === language.code 
                ? 'bg-nex-primary/10 text-nex-primary font-semibold' 
                : 'text-nex-text hover:text-nex-primary'
            }`}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
