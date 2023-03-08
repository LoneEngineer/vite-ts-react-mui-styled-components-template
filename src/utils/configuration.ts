import {windowBoolean, windowString} from "@utils/utils";
import {millisecondsInHour, millisecondsInMinute} from "date-fns/constants";

export const baseUrl: string = import.meta.env.BASE_URL
const mode: string = import.meta.env.MODE
const devMode: boolean = import.meta.env.DEV
export const prodMode: boolean = import.meta.env.PROD
const apiUrl: string = windowString('VITE_API_URL') ?? import.meta.env.VITE_API_URL ?? 'n/a'
export const debugTranslations: boolean = windowBoolean('VITE_DEBUG_I18N') ?? import.meta.env.VITE_DEBUG_I18N ?? false
export const appVersion: string = windowString('VITE_APP_VERSION') ?? import.meta.env.VITE_APP_VERSION ?? '0.0.0'

export const LanguageConfiguration = {
  debugTranslations: debugTranslations,
  translationNamespace: 'translation',
  loadPath: `locales/{{lng}}/{{ns}}.json?v=${appVersion}`,
  version: appVersion,
  availableLanguages: ['en', 'la'],
  defaultLanguage: 'en',
  storageKey: 'i18next_lng',
  cacheStorageKeyPrefix: 'i18next_res_',
  cacheExpirationMs: prodMode ? 4 * millisecondsInHour : 30 * millisecondsInMinute
}

console.log('Configuration:', {
  baseUrl, mode, devMode, prodMode, apiUrl, debugTranslations, meta: import.meta.env
})

