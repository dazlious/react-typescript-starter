import { combineReducers } from 'redux';

import root from 'js/reducers/root';

import language from 'js/reducers/language';
import location from 'js/reducers/location';

export { root };

export default combineReducers({
    language,
    location,
});
