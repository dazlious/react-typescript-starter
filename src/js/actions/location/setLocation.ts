import { parse } from 'query-string';
import { LOCATION_SET } from 'js/constants/actionTypes';
import { Dictionary } from 'js/types/dictionary';
import { ExtendedLocation, LocationAction } from 'js/types/location';

const withQuery = (location: Location): ExtendedLocation => {
    let query: Dictionary<string> = {};
    if (location.search) {
        try {
            query = parse(location.search);
        } catch (e) {}
    }
    return { ...location, query };
};

export default (location: Location): LocationAction => ({
    type: LOCATION_SET,
    location: withQuery(location),
});
