import {createStore,applyMiddleware} from 'redux'
import applyMiddlewareByPromise from 'redux-promise'
import applyMiddlewareByLogger from 'redux-logger'
import reducer from './reducer'
const store = createStore(reducer,applyMiddleware(applyMiddlewareByPromise,applyMiddlewareByLogger));

export default store;