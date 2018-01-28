import setLocation from 'js/actions/location/setLocation';
import setLanguage from 'js/actions/settings/language/setLanguage';
import { ENV_DEVELOPMENT } from 'js/constants/environment';
import { LANGUAGE_ENGLISH } from 'js/constants/language';
import appReducer, { root as rootReducer } from 'js/reducers';
import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import { load, save } from 'redux-localstorage-simple';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';

export default (history, initialState = load()) => {
    const middlewares: Middleware[] = [
        reduxThunk,
        save(),
    ];

    if (process.env.NODE_ENV === ENV_DEVELOPMENT) {
        middlewares.push(createLogger({ collapsed: true }));
    }

    const store = createStore(
        rootReducer(appReducer),
        initialState,
        compose(
            applyMiddleware(...middlewares),
            window['__REDUX_DEVTOOLS_EXTENSION__'] ? window['__REDUX_DEVTOOLS_EXTENSION__']() : f => f,
        ),
    );

    store.dispatch(setLanguage(initialState && initialState.settings && initialState.settings.language || LANGUAGE_ENGLISH));
    store.dispatch(setLocation(initialState.location || history.location));
    history.listen(location => store.dispatch(setLocation(location)));

    return store;
};
