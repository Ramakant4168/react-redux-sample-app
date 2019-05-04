import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import logger from 'redux-logger';

import mathReducer from './reducers/mathReducer';
import UserReducer from './reducers/userReducer';

const store = createStore(combineReducers({
    math: mathReducer,
    user: UserReducer
}), {}, applyMiddleware(logger));


export default store;