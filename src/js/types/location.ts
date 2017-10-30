import { LOCATION_SET } from 'js/constants/actionTypes';
import { OtherAction } from 'js/types/actions';
import { Dictionary } from 'js/types/dictionary';

export type ExtendedLocation = Location & {
    query: Dictionary<string>;
};

export type LocationDefaultState = {
    location: ExtendedLocation;
};

export type SetLocationAction = {
    type: LOCATION_SET;
    location: ExtendedLocation;
};

export type LocationAction = SetLocationAction | OtherAction;
