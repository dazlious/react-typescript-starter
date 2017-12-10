import { expect } from 'chai';
import reducer from 'js/reducers/language/language';
import { LANGUAGE_SET } from 'js/constants/actionTypes/language';

describe('reducers: language', () => {
    const initialState = { language: 'de' };
    const languages = [
        { input: 'de', expected: { language: 'de' } },
        { input: 'en', expected: { language: 'en' } },
        { input: undefined,expected: { language: undefined } },
        { input: null, expected: { language: null } },
    ];
    languages.map(language => {
        it('should set language', () => {
            expect(reducer(initialState, {
                type: LANGUAGE_SET,
                language: language.input,
            })).to.deep.equal(language.expected);
        });
    });
    it('should return initialState when no action is passed', () => {
        expect(reducer(initialState)).to.deep.equal(initialState);
    });
});
