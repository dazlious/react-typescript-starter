import { expect } from 'chai';
import { describe, it } from 'mocha';
import { itParam } from 'mocha-param';
import reducer from 'js/reducers/location';
import { LOCATION_SET } from 'js/constants/actionTypes';

describe('reducers: location', () => {
    const initialState = { pathname: '/my/original/path' };
    const locations = [
        { input: { pathname: '/foo' }, expected: { pathname: '/foo' } },
        { input: { pathname: '/bar' }, expected: { pathname: '/bar' } },
        { input: {}, expected: {} },
        { input: undefined, expected: undefined},
        { input: null, expected: null }
    ];
    itParam('should set location', locations, location => {
        expect(reducer(initialState, {
            type: LOCATION_SET,
            location: location.input,
        })).to.deep.equal(location.expected);
    });
    it('should return initialState when no action is passed', () => {
        expect(reducer(initialState)).to.deep.equal(initialState);
    });
});

