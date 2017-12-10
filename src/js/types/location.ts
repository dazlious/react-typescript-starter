import { OtherAction } from 'js/types/actions';
import { LOCATION_SET } from 'js/constants/actionTypes/location';
import { Dictionary } from 'js/types/dictionary';

export type Location = {
    query?: Dictionary<string>;
    pathname?: string;
    search?: string;
};

export type LocationDefaultState = {
    location: Location;
};

export type SetLocationAction = {
    type: LOCATION_SET;
    location: Location;
};

export type LocationAction = SetLocationAction | OtherAction;
