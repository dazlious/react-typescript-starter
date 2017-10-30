import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export default (getState, middlewares = [thunk]) => configureStore(middlewares)(getState);
