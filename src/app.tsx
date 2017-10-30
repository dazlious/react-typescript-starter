import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Route, Router, Switch } from 'react-router';
import { Provider } from 'react-redux';
import createStore from 'js/store';
import { I18nextProvider } from 'react-i18next';
import i18next from './i18next';
import createHistory from 'history/createBrowserHistory';

import App from 'js/components/App';
import NotFound from 'js/components/NotFound';

import { LOCATION_HOME_DEFAULT } from 'js/constants/location';

import 'scss/general.scss';


const history = createHistory();
const store = createStore(history);

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Redirect from="/" to={LOCATION_HOME_DEFAULT} exact />
                    <Route exact path="/start" component={App}/>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </Provider>
    </I18nextProvider>,
    document.getElementById('root'),
);
