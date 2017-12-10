export default reducer => (state, action) => {
    switch (action.type) {
        default:
            return reducer(state, action);
    }
};
