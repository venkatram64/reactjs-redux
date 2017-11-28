import {applyMiddleware, createStore} from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from './reducers';

const middleware = applyMiddleware(promise(), thunk, logger());
//thunk is for async calls to dipatch
//promise is for to use promise to call rest calls
export default createStore(reducer, middleware);
