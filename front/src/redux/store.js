import { createStore, applyMiddleware } from'redux';
import thunkMiddleware from'redux-thunk';
import reducer from './reducer';

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware);

export default store;
export * from './actions';
