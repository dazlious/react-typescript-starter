import defaultAction from 'js/actions/defaultAction';
import { SetLanguageActionResponse } from 'js/actions/settings/language/setLanguage';
import { SettingsActionRespone } from 'js/actions/settings/settings';
import { LANGUAGE_SET } from 'js/constants/actionTypes/settings/language';

export type SettingsState = {
    language: string;
};

const defaultState: SettingsState = {
    language: null,
};

export default (
    state: SettingsState = defaultState,
    action: SettingsActionRespone = defaultAction,
) => {
    switch (action.type) {
        case LANGUAGE_SET:
            return {
                ...state,
                language: (action as SetLanguageActionResponse).language,
            };
        default:
            return state;
    }
};
