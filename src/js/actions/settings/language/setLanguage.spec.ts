import { expect } from 'chai';
import setLanguage from 'js/actions/settings/language/setLanguage';
import { LANGUAGE_SET } from 'js/constants/actionTypes/settings/language';
import { LANGUAGE_DEFAULT } from 'js/constants/language';
import moment from 'moment';
import i18next from '../../../../i18next';
import createMockedStore from '../../../../test-utils/createMockedStore';

let state;
const store = createMockedStore(() => state);

describe('actions: settings: language: setLanguage', () => {
    beforeEach(() => {
        state = { language: null };
        store.clearActions();
    });

    it('should set language default language when no language is passed', () => {
        store.dispatch(setLanguage());
        expect(store.getActions()).to.deep.equal([
            { type: LANGUAGE_SET, language: LANGUAGE_DEFAULT },
        ]);
        expect(moment.locale()).to.equal(LANGUAGE_DEFAULT);
        expect(i18next.language).to.equal(LANGUAGE_DEFAULT);
    });

    it('should set language de', () => {
        const language = 'de';

        store.dispatch(setLanguage(language));
        expect(store.getActions()).to.deep.equal([
            { language, type: LANGUAGE_SET },
        ]);
        expect(moment.locale()).to.equal(language);
        expect(i18next.language).to.equal(language);
    });

    it('should set language en', () => {
        const language = 'en';

        store.dispatch(setLanguage(language));
        expect(store.getActions()).to.deep.equal([
            { language, type: LANGUAGE_SET },
        ]);
        expect(moment.locale()).to.equal(language);
        expect(i18next.language).to.equal(language);
    });

    it('should set default language', () => {
        store.dispatch(setLanguage('asd'));
        expect(store.getActions()).to.deep.equal([
            { type: LANGUAGE_SET, language: LANGUAGE_DEFAULT },
        ]);
        expect(moment.locale()).to.equal(LANGUAGE_DEFAULT);
        expect(i18next.language).to.equal(LANGUAGE_DEFAULT);
    });

});

