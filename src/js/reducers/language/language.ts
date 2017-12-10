import { OtherAction } from 'js/types/actions';
import { LanguageAction, LanguageDefaultState, SetLanguageAction } from 'js/types/language';
import { LANGUAGE_SET } from 'js/constants/actionTypes/language';

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
                language: (action as SetLanguageAction).language,
            };
        default:
            return state;
    }
};
