import { expect } from 'chai';
import { LOCATION_SET } from 'js/constants/actionTypes/location/location';
import reducer from './location';

describe('reducers: location', () => {
    const initialState = { location: null };
    const locations = [
        { input: { pathname: '/foo' }, expected: { pathname: '/foo' } },
        { input: { pathname: '/bar' }, expected: { pathname: '/bar' } },
        { input: {}, expected: {} },
        { input: undefined, expected: undefined },
        { input: null, expected: null },
    ];
    locations.map(location => {
        it('should set location', () => {
            expect(reducer(initialState, {
                type: LOCATION_SET,
                location: location.input,
            })).to.deep.equal(location.expected);
        });
    });
    it('should return initialState when no action is passed', () => {
        expect(reducer(initialState)).to.deep.equal(initialState);
    });
});

