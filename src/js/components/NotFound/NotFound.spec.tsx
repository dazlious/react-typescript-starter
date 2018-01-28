import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import { PureComponent as NotFound } from './NotFound';

const defaultProps = {
    t: () => {},
};

const getWrapper = (props = defaultProps) => shallow(<NotFound {...props} />);

describe('Components: NotFound', () => {
    it('should render', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('not-found')).to.be.true();
    });
});
