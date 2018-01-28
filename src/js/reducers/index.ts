import location, { LocationState } from 'js/reducers/location/location';
import root from 'js/reducers/root/root';
import settings, { SettingsState } from 'js/reducers/settings/settings';
import { combineReducers } from 'redux';

export { root };

export interface RootState {
    settings: SettingsState;
    location: LocationState;
}

export default combineReducers<RootState>({
    settings,
    location,
});
