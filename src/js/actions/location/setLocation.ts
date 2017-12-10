import { parse } from 'query-string';
import { Dictionary } from 'js/types/dictionary';
import { Location, LocationAction } from 'js/types/location';
import { LOCATION_SET } from 'js/constants/actionTypes/location';

const withQuery = (location: Location): Location => {
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
