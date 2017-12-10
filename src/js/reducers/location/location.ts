import { LocationAction, LocationDefaultState, SetLocationAction } from 'js/types/location';
import { OtherAction } from 'js/types/actions';
import { LOCATION_SET } from 'js/constants/actionTypes/location';

const defaultState: LocationDefaultState = {
    location: null,
};

export default (
    state: LocationDefaultState = defaultState,
    action: LocationAction = OtherAction,
) => {
    switch (action.type) {
        case LOCATION_SET:
            return (action as SetLocationAction).location;
        default:
            return state;
    }
};
