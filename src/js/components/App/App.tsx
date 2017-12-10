import React, { StatelessComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import 'scss/app/app.scss';

interface AppProps {
    t: Function;
}

const App: StatelessComponent<AppProps> = ({ t }: AppProps) => (
    <div className="app">
        <h1 className="app__title">{t('welcome')} TrainInc</h1>
    </div>
);

App.propTypes = {
    t: PropTypes.func.isRequired,
};

export { App as PureComponent };
export default translate('App')(App);

