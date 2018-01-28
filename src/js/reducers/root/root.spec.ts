import chai, { expect } from 'chai';
import reducer from 'js/reducers/root/root';

const spyReducer = chai.spy(state => state);
const cleanState = {
    location: 'location',
    language: 'language',
};
const dirtyState = {
    ...cleanState,
    a: 'b',
    c: 'd',
    settings: {
        a: 'a',
        b: 'b',
    },
};

describe('reducers: root', () => {
    beforeEach(() => spyReducer.reset());

    it('should return state unchanged', () => {
        const action = { type: 'UNKNOWN_ACTION' };
        expect(reducer(spyReducer)(dirtyState, action)).to.be.eql(dirtyState);
        expect(spyReducer).to.have.been.called.with.exactly(dirtyState, action);
    });
});
