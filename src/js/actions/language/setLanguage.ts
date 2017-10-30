import { LANGUAGE_SET } from 'js/constants/actionTypes';
import { LANGUAGE_DEFAULT } from 'js/constants/language';
import i18next from 'i18next';
import { ALLOWED_LANGUAGES } from '../../../i18next';

import moment from 'moment';

export default (language: string = LANGUAGE_DEFAULT) => (dispatch, getState) => {
    let newLanguage: string = language;
    if (!ALLOWED_LANGUAGES.includes(language)) {
        newLanguage = LANGUAGE_DEFAULT;
    }
    const { language: currentLanguage } = getState();
    if (currentLanguage === newLanguage) return;

    i18next.changeLanguage(newLanguage);
    moment.locale(newLanguage);
    dispatch({
        language: newLanguage,
        type: LANGUAGE_SET,
    });
};
