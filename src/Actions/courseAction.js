import Axios from "axios"
import { BaseUrl } from "../Patials/BaseUrl"
import {
    FETCH_COURSES,
    ERR_FETCH_COURSES,
    NULL_ERR_MAIN_CATEGORIES,
    FETCH_PO_COURSES,
    FETCH_COTF_COURSES,
    LOADING_SHOW_COURSE,
    END_LOADING_SHOW_COURSE,
    ENROLLED_COURSES,
    ERR_MAIN_CATEGORIES,
    FETCH_FREE_COURSES,
    ERR_PLAY_COURSE,
    MAIN_CATEGORIES,
    PLAY_COURSE,
    SAVE_PLAYING_MODULES,
    NULL_ERR_PLAY_COURSE,
    COURSE_IS_ENROLLED,
    ERR_COURSE_IS_ENROLLED,
    CHECK_COURSE_PROGRESS,
    START_COURSE_REVIEW,
    SHOW_COURSE,
    ERR_SHOW_COURSE,
    END_COURSE_REVIEW,
} from '../Actions/types'

export const fetchCourses = (number) => dispatch => {
    console.log(number);

    Axios.get(`${BaseUrl}api/courses/get/${number}`)
        .then(response => dispatch({
            type: FETCH_COURSES,
            payload: response.data
        }))
        .catch(err => dispatch({
            type: ERR_FETCH_COURSES,
            payload: err
        }))


}

export const fetchPOCourses = (number) => dispatch => {
    console.log(number);

    Axios.get(`${BaseUrl}api/courses/get/PO/${number}`)
        .then(response => dispatch({
            type: FETCH_PO_COURSES,
            payload: response.data
        }))
        .catch(err => dispatch({
            type: ERR_FETCH_COURSES,
            payload: err
        }))


}

export const fetchCOTFCourses = (number) => dispatch => {
    console.log(number);

    Axios.get(`${BaseUrl}api/courses/get/COTF/${number}`)
        .then(response => dispatch({
            type: FETCH_COTF_COURSES,
            payload: response.data
        }))
        .catch(err => dispatch({
            type: ERR_FETCH_COURSES,
            payload: err
        }))


}

export const fetchFREECourses = (number) => dispatch => {
    Axios.get(`${BaseUrl}api/courses/get/FREE/${number}`)
        .then(response => dispatch({
            type: FETCH_FREE_COURSES,
            payload: response.data
        }))
        .catch(err => dispatch({
            type: ERR_FETCH_COURSES,
            payload: err
        }))
}

export const getEnrolledCourse = (user) => dispatch => {
    Axios.post(`${BaseUrl}api/courses/get_enrolled_course`, {
            user_id: user
        })
        .then(response => dispatch({
            type: ENROLLED_COURSES,
            payload: response.data
        }))
        .catch(err => dispatch({
            type: ERR_FETCH_COURSES,
            payload: err
        }))
}

export const enrollCourse = (user, course) => dispatch => {

    Axios.post(`${BaseUrl}api/courses/enroll`, {
            user_id: user,
            course_id: course,
        })
        .then(response => {
            console.log(response);
            dispatch({
                type: ENROLLED_COURSES,
                payload: response.data
            })
        })
        .catch(err => dispatch({
            type: ERR_FETCH_COURSES,
            payload: err
        }))


}

export const playCourse = (user, course) => dispatch => {

    dispatch({
        type: NULL_ERR_PLAY_COURSE
    })
    Axios.post(`${BaseUrl}api/courses/play`, {
            user_id: user,
            course_id: course,
        })
        .then(response => {
            console.log(response);
            dispatch({
                type: PLAY_COURSE,
                payload: response.data.data
            })
            dispatch({
                type: SAVE_PLAYING_MODULES,
                payload: response.data.data.course_materials
            })
        })
        .catch(err => dispatch({
            type: ERR_PLAY_COURSE,
            payload: err.message
        }))


}

export const isCourseEnrolled = (user, course) => dispatch => {

    // dispatch({
    //     type: NULL_ERR_PLAY_COURSE
    // })
    Axios.post(`${BaseUrl}api/courses/check_enrolled`, {
            user_id: user,
            course_id: course,
        })
        .then(response => {
            console.log(response);
            dispatch({
                type: COURSE_IS_ENROLLED,
                payload: response.data
            })
        })
        .catch(err => dispatch({
            type: ERR_COURSE_IS_ENROLLED,
            payload: err.message
        }))


}

export const checkCourseProgress = (user, course, module) => dispatch => {

    // dispatch({
    //     type: NULL_ERR_PLAY_COURSE
    // })
    Axios.post(`${BaseUrl}api/courses/check_progress`, {
            user_id: user,
            course_id: course,
            module_id: module,
        })
        .then(response => {
            console.log(response);
            dispatch({
                type: CHECK_COURSE_PROGRESS,
                payload: response.data
            })
        })
        .catch(err => dispatch({
            type: ERR_COURSE_IS_ENROLLED,
            payload: err.message
        }))
}

export const showCourse = (course) => dispatch => {

    // dispatch({
    //     type: NULL_ERR_PLAY_COURSE
    // })
    dispatch({
        type: LOADING_SHOW_COURSE
    })
    Axios.get(`${BaseUrl}api/courses/` + course)
        .then(response => {
            console.log(response);
            dispatch({
                type: LOADING_SHOW_COURSE
            })
            dispatch({
                type: SHOW_COURSE,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: END_LOADING_SHOW_COURSE
            })
            dispatch({
                type: ERR_SHOW_COURSE,
                payload: err.message
            })
        })


}

export const fetchMainCategory = () => dispatch => {

    dispatch({
        type: NULL_ERR_MAIN_CATEGORIES
    })
    Axios.get(`${BaseUrl}api/courses/main_controller/all`)
        .then(response => {
            console.log(response);
            dispatch({
                type: MAIN_CATEGORIES,
                payload: response.data
            })
        })
        .catch(err => dispatch({
            type: ERR_MAIN_CATEGORIES,
            payload: err.message
        }))
}