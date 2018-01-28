import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import { AppProps, PureComponent as App } from './App';

const defaultProps: AppProps = {
    t: () => {},
};

const getWrapper = (props = defaultProps) => shallow(<App {...props} />);

describe('Components: App', () => {
    it('should render', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('app')).to.be.true();
    });
});
