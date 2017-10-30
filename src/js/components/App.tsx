import React, { StatelessComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import 'scss/app/app.scss';

interface IProps {
    t: Function;
}

const App: StatelessComponent<IProps|{}> = ({ t }: IProps) => (
    <div className="app">
        <h1 className="app__title">{t('welcome')} React Starter</h1>
    </div>
);

App.propTypes = {
    t: PropTypes.func.isRequired,
};

export { App as PureComponent };
export default translate('App')(App);
