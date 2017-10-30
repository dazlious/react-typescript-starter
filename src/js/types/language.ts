import { LANGUAGE_SET } from 'js/constants/actionTypes';
import { OtherAction } from 'js/types/actions';

export type LanguageDefaultState = {
    language: string;
};

export type SetLanguageAction = {
    type: LANGUAGE_SET;
    language: string;
};

export type LanguageAction = SetLanguageAction | OtherAction;
