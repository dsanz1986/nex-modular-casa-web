
import { es } from './es';
import { en } from './en';
import { fr } from './fr';

export const translations = {
  es,
  en,
  fr
};

export type TranslationKey = keyof typeof es;
export type NestedTranslationKey<T> = T extends object 
  ? {
      [K in keyof T]: T[K] extends object 
        ? `${string & K}.${NestedTranslationKey<T[K]>}`
        : string & K
    }[keyof T]
  : never;

export type TranslationPath = NestedTranslationKey<typeof es>;
