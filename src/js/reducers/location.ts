import { LOCATION_SET } from 'js/constants/actionTypes';
import { LocationAction, LocationDefaultState } from 'js/types/location';
import { OtherAction } from 'js/types/actions';

const defaultState: LocationDefaultState = {
    location: null,
};

export default (
    state: LocationDefaultState = defaultState,
    action: LocationAction = OtherAction,
) => {
    switch (action.type) {
        case LOCATION_SET:
            return action.location;
        default:
            return state;
    }
};
