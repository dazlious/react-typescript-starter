import React, { StatelessComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import 'scss/not-found/not-found.scss';

interface NotFoundProps {
    t: Function;
}

const NotFound: StatelessComponent<NotFoundProps> = ({ t }: NotFoundProps) => (
    <div className="not-found">
        <h1 className="not-found__title">{t('not-found')}</h1>
    </div>
);

NotFound.propTypes = {
    t: PropTypes.func.isRequired,
};

export { NotFound as PureComponent };
export default translate('NotFound')(NotFound);