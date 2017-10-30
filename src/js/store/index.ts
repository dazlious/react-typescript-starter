import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import appReducer, { root as rootReducer } from 'js/reducers';
import { ENV_DEVELOPMENT } from 'js/constants/environment';
import setLanguage from 'js/actions/language/setLanguage';
import { LANGUAGE_GERMAN } from 'js/constants/language';
import setLocation from 'js/actions/location/setLocation';

export default (history, initialState = undefined) => {
    const middlewares: Middleware[] = [
        thunkMiddleware,
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

    store.dispatch(setLanguage(LANGUAGE_GERMAN));

    store.dispatch(setLocation(history.location));
    history.listen(location => store.dispatch(setLocation(location)));

    return store;
};
