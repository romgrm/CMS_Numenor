import { combineReducers } from 'redux'
import userReducer from './userReducer'

export default combineReducers({
  usersList: userReducer
})
// This file will allow us to combine all the reducers together