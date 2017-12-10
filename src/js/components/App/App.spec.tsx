import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { PureComponent as App } from './App';

const defaultProps = {
    t: () => {},
    isAuthenticated: false,
};

const getWrapper = (props = defaultProps) => shallow(<App {...props} />);

describe('Components: App', () => {
    it('should render', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('app')).to.be.true;
    });
});
