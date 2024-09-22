import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Updated import
import rootReducer from './reducer';


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;