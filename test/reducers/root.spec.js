import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import reducer from 'js/reducers/root';

const spyReducer = chai.spy(state => state);
const cleanState = {
    location: 'location',
    language: 'language',
};
const dirtyState = { ...cleanState,
    a: 'b',
    c: 'd',
};

describe('reducers: root', () => {
    beforeEach(() => spyReducer.reset());

    it('should return state unchanged', () => {
        const action = { type: 'UNKNOWN_ACTION' };
        expect(reducer(spyReducer)(dirtyState, action)).to.be.eql(dirtyState);
        expect(spyReducer).to.have.been.called.once.with.exactly(dirtyState, action);
    });
});
