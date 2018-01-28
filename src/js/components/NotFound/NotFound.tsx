import React, { StatelessComponent } from 'react';
import { InjectedTranslateProps, translate } from 'react-i18next';
import 'scss/not-found/not-found.scss';

type OwnProps = InjectedTranslateProps & {};

type StateToPropsType = {};

type DispatchToPropsType = {};

export type NotFoundProps = OwnProps & StateToPropsType & DispatchToPropsType;

const NotFound: StatelessComponent<NotFoundProps> = ({ t }: NotFoundProps) => (
    <div className="not-found">
        <h1 className="not-found__title">{t('not-found')}</h1>
    </div>
);

export { NotFound as PureComponent };
export default translate('NotFound')(NotFound);
