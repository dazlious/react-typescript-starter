import React, { StatelessComponent } from 'react';
import { InjectedTranslateProps, translate } from 'react-i18next';

import 'scss/app/app.scss';

type OwnProps = InjectedTranslateProps & {};

type StateToPropsType = {};

type DispatchToPropsType = {};

export type AppProps = OwnProps & StateToPropsType & DispatchToPropsType;

const App: StatelessComponent<AppProps> = ({ t }: AppProps) => (
    <div className="app">
        <h1>{t('welcome')}</h1>
    </div>
);

export { App as PureComponent };
export default translate('App')(App);
