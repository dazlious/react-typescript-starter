import { combineReducers } from 'redux';
import language from 'js/reducers/language/language';
import location from 'js/reducers/location/location';
import root from 'js/reducers/root/root';

export { root };

export default combineReducers({
    language,
    location,
});
