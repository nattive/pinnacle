import { combineReducers } from 'redux'
import courseReducers from './courseReducers'
import authReducers from './authReducers'
import loadingReducer from './loadingReducer'
import moduleReducers from './moduleReducers'


export default combineReducers({
    course: courseReducers,
    auth: authReducers,
    loading: loadingReducer,
    module: moduleReducers
})