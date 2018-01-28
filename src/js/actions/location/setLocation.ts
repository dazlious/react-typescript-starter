import { LOCATION_SET } from 'js/constants/actionTypes/location/location';
import { Dictionary } from 'js/types/dictionary';
import { parse } from 'query-string';
import { Action } from 'redux';
import { Location } from 'src/js/reducers/location/location';

export type SetLocationActionResponse = Action & {
    type: LOCATION_SET;
    location: Location;
};

export type LocationActionResponse = SetLocationActionResponse | Action;

const withQuery = (location: Location): Location => {
    let query: Dictionary<string> = {};
    if (location.search) {
        try {
            query = parse(location.search);
        }
        catch (e) {}
    }
    return { ...location, query };
};

export type SetLocationAction = (location: Location) => SetLocationActionResponse;

export const setLocation: SetLocationAction = (location: Location) => ({
    type: LOCATION_SET,
    location: withQuery(location),
});

export default setLocation;
