import { combineReducers } from 'redux'
import courseReducers from './courseReducers'
import authReducers from './authReducers'
import loadingReducer from './loadingReducer'
import moduleReducers from './moduleReducers'
import reviewReducers from './reviewReducers'
import commentReducer from './commentReducer'
import generalReducers from './generalReducers'
import blogReducers from './blogReducers'
import resourceReducers from './resourceReducers'


export default combineReducers({
    course: courseReducers,
    auth: authReducers,
    loading: loadingReducer,
    blog: blogReducers,
    module: moduleReducers,
    reviews: reviewReducers,
    general: generalReducers,
    comment: commentReducer,
    resource: resourceReducers,
})