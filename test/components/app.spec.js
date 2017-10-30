import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import { PureComponent as App } from 'js/components/App';

const defaultProps = {
    t: () => {},
};

const getWrapper = (props = defaultProps) => shallow(<App {...props} />);

describe('Components: App', () => {
    it('should render', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('app')).to.be.true;
    });
});
