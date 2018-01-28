import createHistory from 'history/createBrowserHistory';
import App from 'js/components/App/App';
import NotFound from 'js/components/NotFound/NotFound';
import { LOCATION_DEFAULT, LOCATION_START } from 'js/constants/location';
import createStore from 'js/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router';

import 'scss/general.scss';
import i18next from './i18next';
import './numeral';

const history = createHistory();
const store = createStore(history);

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Redirect from="/" to={LOCATION_DEFAULT} exact/>
                    <Route path={LOCATION_START} component={App} exact/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </Router>
        </Provider>
    </I18nextProvider>,
    document.getElementById('root'),
);
