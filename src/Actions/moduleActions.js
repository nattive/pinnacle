import Axios from "axios"
import { BaseUrl } from "../Patials/BaseUrl"
import {
    DISPLAY_QUESTIONS,
    HIDE_DISPLAY_QUESTIONS,
    APP_IS_BUSY,
    APP_IS_NOT_BUSY,
    SHOW_RESULT,
    HIDE_RESULT,
    ERR_RESULT,
    WORKING,
    GET_USER_COURSE_PROGRESS,
    GETTING_PROGRESS_STATUS,
    STOPPED_PROGRESS_STATUS,
    STOPPED_WORKING,
    ERROR_IN_COURSE_PROGRESS
} from '../Actions/types'

export const displayQuestions = () => dispatch => {
    console.log(dispatch);

    dispatch({
        type: DISPLAY_QUESTIONS,
    })

}

export const hideQuestions = () => dispatch => {
    dispatch({
        type: HIDE_DISPLAY_QUESTIONS,
    })

}


export const storeQuestionResult = ({ result }) => dispatch => {
    dispatch({ type: APP_IS_BUSY })
    dispatch({ type: HIDE_RESULT })
    dispatch({ type: WORKING })
    const token = localStorage.getItem('P_access_token')

    Axios.post(`${BaseUrl}api/courses/user/quiz-result/store`, {
            module_id: result.module_id,
            no_correct_answer: result.no_correct_answer,
            no_wrong_answer: result.no_wrong_answer,
            percentage: result.percentage,
            total: result.total,
            totalNumberOfQuestions: result.totalNumberOfQuestions,
        }, { headers: { Authorization: `Bearer ${token}` } })
        .then(data => {
            dispatch({ type: STOPPED_WORKING })
            dispatch({ type: APP_IS_NOT_BUSY })
            dispatch({ type: SHOW_RESULT })
            console.log(data)
        })
        .catch(err => {
            // const 
            console.log(err);
            dispatch({ type: ERR_RESULT, payload: err.response })
            dispatch({ type: STOPPED_WORKING })
            dispatch({ type: APP_IS_NOT_BUSY })
        })

    console.log(result);
}

export const getUserProgress = () => dispatch => {
    dispatch({ type: WORKING })
    dispatch({ type: GETTING_PROGRESS_STATUS })
    const token = localStorage.getItem('P_access_token')
    Axios.get(`${BaseUrl}api/courses/user/progress-status`, { headers: { Authorization: `Bearer ${token}` } })
        .then(data => {
            dispatch({ type: GET_USER_COURSE_PROGRESS, payload: data.data })
            dispatch({ type: STOPPED_WORKING })
            dispatch({ type: STOPPED_PROGRESS_STATUS })
            console.log(data)
        })
        .catch(err => {
            // const 
            console.log(err);
            dispatch({ type: ERROR_IN_COURSE_PROGRESS, payload: err.response })
            dispatch({ type: STOPPED_WORKING })
            dispatch({ type: STOPPED_PROGRESS_STATUS })
        })

}