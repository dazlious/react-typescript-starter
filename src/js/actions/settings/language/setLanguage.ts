import i18next from 'i18next';
import { LANGUAGE_SET } from 'js/constants/actionTypes/settings/language';
import { LANGUAGE_DEFAULT } from 'js/constants/language';
import moment from 'moment';
import numeral from 'numeral';
import { Action } from 'redux';
import { ALLOWED_LANGUAGES } from '../../../../i18next';

export type SetLanguageActionResponse = Action & {
    type: LANGUAGE_SET;
    language: string;
};

export type LanguageActionResponse = SetLanguageActionResponse | Action;

export type LanguageAction = (language?: string) => (dispatch) => LanguageActionResponse;

export const setLanguage: LanguageAction = (language: string = LANGUAGE_DEFAULT) => dispatch => {
    let newLanguage: string = language;
    if (!ALLOWED_LANGUAGES.includes(language)) {
        newLanguage = LANGUAGE_DEFAULT;
    }

    i18next.changeLanguage(newLanguage);
    moment.locale(newLanguage);
    numeral.locale(newLanguage);
    return dispatch({
        language: newLanguage,
        type: LANGUAGE_SET,
    });
};

export default setLanguage;
