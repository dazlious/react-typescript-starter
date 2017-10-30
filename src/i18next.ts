import i18next from 'i18next';
import { LANGUAGE_DEFAULT } from 'js/constants/language';
import { de, en } from 'js/constants/translations';

export const ALLOWED_LANGUAGES: string[] = ['de', 'en'];

export default i18next;

i18next.init({
    lng: LANGUAGE_DEFAULT,
    fallbackLng: LANGUAGE_DEFAULT,
    fallbackNS: 'App',
    parseMissingKeyHandler: () => null,
    resources: {
        de,
        en,
    },
});
