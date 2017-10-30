import { LANGUAGE_SET } from 'js/constants/actionTypes';
import { OtherAction } from 'js/types/actions';
import { LanguageAction, LanguageDefaultState } from 'js/types/language';

const defaultState: LanguageDefaultState = {
    language: null,
};

export default (
    state: LanguageDefaultState = defaultState,
    action: LanguageAction = OtherAction,
) => {
    switch (action.type) {
        case LANGUAGE_SET:
            return { ...state,
                language: action.language,
            };
        default:
            return state;
    }
};
