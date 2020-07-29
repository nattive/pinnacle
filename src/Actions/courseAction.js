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
    NULL_ERR_FETCH_COURSES,
    PLAY_MODULES,
    GET_RECOMMENDED_COURSES,
    ERR_GET_RECOMMENDED_COURSES,
    EMPTY_PLAY_MODULES,
    STOPPED_WORKING,
    WORKING
} from '../Actions/types'

export const fetchCourses = (number) => dispatch => {
    console.log(number);
    dispatch({
        type: NULL_ERR_FETCH_COURSES
    })
    dispatch({
        type: WORKING
    })
    Axios.get(`${BaseUrl}api/courses/get/${number}`)
        .then(response => {
            dispatch({
                type: FETCH_COURSES,
                payload: response.data
            })
            dispatch({
                type: STOPPED_WORKING
            })
        })
        .catch(err => {
            console.log(err.message);
            dispatch({
                type: STOPPED_WORKING
            })
            dispatch({
                type: ERR_FETCH_COURSES,
                payload: err.response ? err.response.message : err.message ? err.message : 'error occurred'
            })
        })


}

export const fetchPOCourses = (number) => dispatch => {
    console.log(number);

    dispatch({ type: WORKING })
    Axios.get(`${BaseUrl}api/courses/get/PO/${number}`)
        .then(response => {
            dispatch({ type: STOPPED_WORKING })
            dispatch({
                type: FETCH_PO_COURSES,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({ type: STOPPED_WORKING })
            dispatch({
                type: ERR_FETCH_COURSES,
                payload: err.response ? err.response.message : 'error occurred'

            })
        })


}

export const fetchCOTFCourses = (number) => dispatch => {
    console.log(number);

    dispatch({ type: WORKING })
    Axios.get(`${BaseUrl}api/courses/get/COTF/${number}`)
        .then(response => {
            dispatch({ type: STOPPED_WORKING })
            dispatch({
                type: FETCH_COTF_COURSES,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({ type: STOPPED_WORKING })
            dispatch({
                type: ERR_FETCH_COURSES,
                payload: err.response.message
            })
        })


}

export const fetchFREECourses = (number) => dispatch => {

    dispatch({
        type: NULL_ERR_FETCH_COURSES
    })
    Axios.get(`${BaseUrl}api/courses/get/FREE/${number}`)
        .then(response => dispatch({
            type: FETCH_FREE_COURSES,
            payload: response.data
        }))
        .catch(err => dispatch({
            type: ERR_FETCH_COURSES,
            payload: err.response ? err.response.message : 'error occurred'

        }))
}

export const getEnrolledCourse = () => dispatch => {
    const token = localStorage.getItem('P_access_token')
    dispatch({ type: WORKING })

    Axios.get(`${BaseUrl}api/courses/get_enrolled_course`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then(response => {
            dispatch({ type: STOPPED_WORKING })

            dispatch({
                type: ENROLLED_COURSES,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({ type: STOPPED_WORKING })
            dispatch({
                type: ERR_FETCH_COURSES,
                payload: err
            })
        })
}

export const enrollCourse = (user, course) => dispatch => {

    dispatch({ type: WORKING })
    Axios.post(`${BaseUrl}api/courses/enroll`, {
            user_id: user,
            course_id: course,
        })
        .then(response => {
            dispatch({ type: STOPPED_WORKING })
            dispatch({
                type: ENROLLED_COURSES,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({ type: STOPPED_WORKING })
            alert('An error occurred')
            dispatch({
                type: ERR_FETCH_COURSES,
                payload: err.response ? err.response.message : 'error occurred'

            })
        })


}

export const playCourse = (user, course) => dispatch => {
    dispatch({ type: WORKING })

    dispatch({
        type: NULL_ERR_PLAY_COURSE
    })
    Axios.post(`${BaseUrl}api/courses/play`, {
            user_id: user,
            course_id: course,
        })
        .then(response => {
            dispatch({ type: STOPPED_WORKING })

            dispatch({
                type: PLAY_COURSE,
                payload: response.data.data
            })
            dispatch({
                type: SAVE_PLAYING_MODULES,
                payload: response.data.data.course_materials
            })
        })
        .catch(err => {
            dispatch({ type: STOPPED_WORKING })

            dispatch({
                type: ERR_PLAY_COURSE,
                payload: err.message
            })
        })


}

export const isCourseEnrolled = (user, course) => dispatch => {

    dispatch({
        type: WORKING
    })
    console.log(user + ' ' + course);

    Axios.post(`${BaseUrl}api/courses/check_enrolled`, {
            user_id: user,
            course_id: course,
        })
        .then(response => {
            dispatch({ type: STOPPED_WORKING })

            dispatch({
                type: COURSE_IS_ENROLLED,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({ type: STOPPED_WORKING })

            dispatch({
                type: ERR_COURSE_IS_ENROLLED,
                payload: err.message
            })
        })


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

    dispatch({
        type: WORKING
    })
    dispatch({
        type: LOADING_SHOW_COURSE
    })
    Axios.get(`${BaseUrl}api/courses/` + course)
        .then(response => {
            console.log(response);
            dispatch({
                type: LOADING_SHOW_COURSE
            })
            dispatch({ type: STOPPED_WORKING })

            dispatch({
                type: SHOW_COURSE,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: END_LOADING_SHOW_COURSE
            })
            dispatch({ type: STOPPED_WORKING })

            dispatch({
                type: ERR_SHOW_COURSE,
                payload: err.message
            })
        })


}

export const showNodule = (courseId) => dispatch => {

    dispatch({
        type: EMPTY_PLAY_MODULES
    })
    dispatch({
        type: LOADING_SHOW_COURSE
    })
    const token_to_verify = localStorage.getItem('P_access_token')

    if (token_to_verify) {

        Axios.get(`${BaseUrl}api/courses/material/show/` + courseId, { headers: { Authorization: `Bearer ${token_to_verify}` } })
            .then(response => {
                dispatch({ type: WORKING })
                dispatch({ type: STOPPED_WORKING })

                console.log(response);
                dispatch({
                    type: LOADING_SHOW_COURSE
                })
                dispatch({
                    type: PLAY_MODULES,
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: END_LOADING_SHOW_COURSE
                })
                dispatch({ type: STOPPED_WORKING })

                dispatch({
                    type: ERR_SHOW_COURSE,
                    payload: err.message
                })
            })


    } else {
        console.log('not signed in');

    }
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

export const getRecommendedByUser = (user) => dispatch => {

    dispatch({
        type: NULL_ERR_MAIN_CATEGORIES
    })
    Axios.get(`${BaseUrl}api/courses/recommendations/user/${user}`)
        .then(response => {
            console.log(response);
            dispatch({
                type: GET_RECOMMENDED_COURSES,
                payload: response.data
            })
        })
        .catch(err => dispatch({
            type: ERR_GET_RECOMMENDED_COURSES,
            payload: err.message
        }))
}