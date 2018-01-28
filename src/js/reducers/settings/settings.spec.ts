import { expect } from 'chai';
import { LANGUAGE_SET } from 'js/constants/actionTypes/settings/language';
import reducer from 'js/reducers/settings/settings';

describe('reducers: settings', () => {
    const initialState = {
        language: null,
    };
    [
        { input: 'de', expected: 'de' },
        { input: 'en', expected: 'en' },
        { input: undefined, expected: undefined },
        { input: null, expected: null },
    ].map(language => {
        it('should set language', () => {
            expect(reducer(initialState, {
                type: LANGUAGE_SET,
                language: language.input,
            })).to.deep.equal({
                ...initialState,
                language: language.expected,
            });
        });
    });
    it('should use initial state', () => {
        expect(reducer()).to.deep.equal(initialState);
    });
    it('should return initialState when no action is passed', () => {
        expect(reducer(initialState)).to.deep.equal(initialState);
    });
});
