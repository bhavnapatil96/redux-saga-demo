import {combineReducers} from 'redux'
import {eventReducer,userReducer} from './myReducer'
export const rootReducer=combineReducers({
    eventReducer,
    userReducer

})