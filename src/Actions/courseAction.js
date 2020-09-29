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
    WORKING,
    ALL_COURSES,
    ENROLLING_COURSE,
    ERROR_ENROLLING_COURSE,
    CHECK_IF_USER_TOOK_COURSE,
    DISPLAY_QUESTIONS,
    RESULT,
    SUB_CATEGORIES,
    ERR_SUB_CATEGORIES,
    START_SEARCH,
    SEARCH_RESULT,
    SEARCH_RESULT_ERROR,
} from '../Actions/types'
import { recommended } from "../Patials/constant";

export const fetchCourses = (number) => dispatch => {
    console.log(number);
    dispatch({
        type: NULL_ERR_FETCH_COURSES
    })
    dispatch({
        type: WORKING
    })
    Axios.get(`${BaseUrl}courses/get/${number}`)
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

export const searchCourses = (query) => dispatch => {
    dispatch({
        type: START_SEARCH
    })
    Axios.get(`${BaseUrl}course/search/${query}`)
        .then(response => {
            dispatch({
                type: SEARCH_RESULT,
                payload: response.data
            })
        })
        .catch(err => {
            console.log(err.message);
            dispatch({
                type: SEARCH_RESULT_ERROR,
                payload: err.response ? err.response.message : err.message ? err.message : 'error occurred'
            })
        })


}

export const allCourses = () => dispatch => {
    const token = localStorage.getItem('P_access_token')

    dispatch({
        type: NULL_ERR_FETCH_COURSES
    })
    dispatch({
        type: WORKING
    })
    Axios.get(`${BaseUrl}user/course`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then(response => {
            dispatch({
                type: ALL_COURSES,
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
                payload: err.response ? err.response.data &&
                    err.response.data.message : err.message ?
                    JSON.stringify(err.message) : 'error occurred'
            })
        })


}

export const fetchPOCourses = (number) => dispatch => {
    console.log(number);

    dispatch({ type: WORKING })
    Axios.get(`${BaseUrl}courses/get/PO/${number}`)
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
    Axios.get(`${BaseUrl}courses/get/COTF/${number}`)
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
    Axios.get(`${BaseUrl}courses/get/FREE/${number}`)
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

    Axios.get(`${BaseUrl}user/course/enroll`, {
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

    const token = localStorage.getItem('P_access_token')



    dispatch({ type: ENROLLING_COURSE })
    Axios.post(`${BaseUrl}user/course/enroll`, {
            user_id: user,
            course_id: course,
        }, { headers: { Authorization: `Bearer ${token}` } }, )
        .then(response => {
            dispatch({ type: COURSE_IS_ENROLLED })
            dispatch({
                type: ENROLLED_COURSES,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({ type: STOPPED_WORKING })
                // alert(err.response.data)
            dispatch({
                type: ERROR_ENROLLING_COURSE,
                payload: err.response ? err.response.data : 'error occurred'

            })
        })


}

export const playCourse = (id) => dispatch => {
    dispatch({ type: WORKING })
    const token = localStorage.getItem('P_access_token')
    dispatch({
        type: NULL_ERR_PLAY_COURSE
    })
    Axios.get(`${BaseUrl}user/course/play/${id}`, { headers: { Authorization: `Bearer ${token}` } }, )
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
    const token = localStorage.getItem('P_access_token')

    dispatch({
        type: WORKING
    })
    console.log(user + ' ' + course);

    Axios.post(`${BaseUrl}user/course/enroll/check`, {
            user_id: user,
            course_id: course,
        }, { headers: { Authorization: `Bearer ${token}` } }, )
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
    Axios.post(`${BaseUrl}courses/check_progress`, {
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
    Axios.get(`${BaseUrl}courses/` + course)
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

        Axios.get(`${BaseUrl}courses/material/show/` + courseId, { headers: { Authorization: `Bearer ${token_to_verify}` } })
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
    const token = localStorage.getItem('P_access_token')
    dispatch({
        type: NULL_ERR_MAIN_CATEGORIES
    })
    Axios.get(`${BaseUrl}course/category/main`, {
            headers: { Authorization: `Bearer ${token}` }
        })
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

export const fetchSubCategory = () => dispatch => {
    const token = localStorage.getItem('P_access_token')
    dispatch({
        type: NULL_ERR_MAIN_CATEGORIES
    })
    Axios.get(`${BaseUrl}course/category/sub`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            console.log(response);
            dispatch({
                type: SUB_CATEGORIES,
                payload: response.data
            })
        })
        .catch(err => dispatch({
            type: ERR_SUB_CATEGORIES,
            payload: err.message
        }))
}

export const userHasTakenQuiz = (id) => dispatch => {
    const token = localStorage.getItem('P_access_token')
    dispatch({
        type: CHECK_IF_USER_TOOK_COURSE
    })
    Axios.get(`${BaseUrl}user/course/quiz/userHasTakenQuiz/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            console.log(response);
            if (response.data.id) {
                dispatch({
                    type: RESULT,
                    payload: response.data
                })
                dispatch({
                    type: DISPLAY_QUESTIONS,
                    payload: false
                })
            } else {
                dispatch({
                    type: DISPLAY_QUESTIONS,
                    payload: true
                })
            }

        })
        .catch(err => {
            console.log(err.response)
        })
}

export const getRecommendation = () => dispatch => {
    const slugArray = localStorage.getItem(recommended)
    dispatch({
        type: NULL_ERR_MAIN_CATEGORIES
    })
    Axios.post(`${BaseUrl}courses/recommendations`, {
            slugArray: JSON.parse(slugArray)
        })
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