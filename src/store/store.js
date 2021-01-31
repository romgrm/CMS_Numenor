import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers'

// Our initialState
const initalState = {

}

// Thunk is use as a middleware for manage async calls
const middleware = [thunk]

// Creation of redux store. Devtools is an extension for chrome to see our global redux state 
const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;