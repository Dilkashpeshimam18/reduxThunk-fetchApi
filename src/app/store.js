import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers/root-reducer'

const middleware =[logger,thunk]

if(process.env==='developement'){
    middleware.push(logger)
}

const store= createStore(rootReducer,applyMiddleware(...middleware))

export default store