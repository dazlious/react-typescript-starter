import { expect } from 'chai';
import { LOCATION_SET } from 'js/constants/actionTypes/location/location';
import setLocation from './setLocation';
import createMockedStore from '../../../test-utils/createMockedStore';

let state;
const store = createMockedStore(() => state);

describe('actions: location: setLocation', () => {
    beforeEach(() => {
        state = {};
        store.clearActions();
    });

    it('should set location', () => {
        const pathname = '/my/path';
        store.dispatch(setLocation({ pathname }));
        expect(store.getActions()).to.deep.equal([
            { type: LOCATION_SET, location: { pathname, query: {} } },
        ]);
    });

    it('should set location with query', () => {
        const pathname = '/my/path';
        const foo = 'bar';
        const bar = 'baz';
        const search = `?foo=${foo}&bar=${bar}`;

        store.dispatch(setLocation({ pathname, search }));
        expect(store.getActions()).to.deep.equal([
            { type: LOCATION_SET, location: { pathname, search, query: { foo, bar } } },
        ]);
    });

    it('should set location with empty query', () => {
        const pathname = '/my/path';
        const search = '?';

        store.dispatch(setLocation({ pathname, search }));
        expect(store.getActions()).to.deep.equal([
            { type: LOCATION_SET, location: { pathname, search, query: {} } },
        ]);
    });
});

