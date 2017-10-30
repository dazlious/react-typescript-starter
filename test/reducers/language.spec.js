import { expect } from 'chai';
import { describe, it } from 'mocha';
import { itParam } from 'mocha-param';
import reducer from 'js/reducers/language';
import { LANGUAGE_SET } from 'js/constants/actionTypes';

describe('reducers: language', () => {
    const initialState = { language: 'de' };
    const languages = [
        { input: 'de', expected: { language: 'de' } },
        { input: 'en', expected: { language: 'en' } },
        { input: undefined,expected: { language: undefined } },
        { input: null, expected: { language: null } }
    ];
    itParam('should set language', languages, language => {
        expect(reducer(initialState, {
            type: LANGUAGE_SET,
            language: language.input,
        })).to.deep.equal(language.expected);
    });
    it('should return initialState when no action is passed', () => {
        expect(reducer(initialState)).to.deep.equal(initialState);
    });
});
