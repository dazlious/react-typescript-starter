import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import { PureComponent as NotFound } from 'js/components/NotFound';

const defaultProps = {
    t: () => {},
};

const getWrapper = (props = defaultProps) => shallow(<NotFound {...props} />);

describe('Components: NotFound', () => {
    it('should render', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('not-found')).to.be.true;
    });
});
