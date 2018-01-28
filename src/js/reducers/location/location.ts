import defaultAction from 'js/actions/defaultAction';
import { LocationActionResponse, SetLocationActionResponse } from 'js/actions/location/setLocation';
import { LOCATION_SET } from 'js/constants/actionTypes/location/location';
import { Dictionary } from 'js/types/dictionary';

export type Location = {
    query?: Dictionary<string>;
    pathname?: string;
    search?: string;
};

export type LocationState = {
    location: Location;
};

const defaultState: LocationState = {
    location: null,
};

export default (
    state: LocationState = defaultState,
    action: LocationActionResponse = defaultAction,
) => {
    switch (action.type) {
        case LOCATION_SET:
            return (action as SetLocationActionResponse).location;
        default:
            return state;
    }
};
