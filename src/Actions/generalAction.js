import {
    SENDING_VOLUNTEER_FORM,
    VOLUNTEER_FORM_ERROR,
    ADDED_TO_CART,
    ERROR_ADDING_TO_CART,
    VOLUNTEER_FORM_SUCCESS,
    SENDING_COACHEE_FORM,
    COACHEE_FORM_SUCCESS,
    COACHEE_FORM_ERROR,
    GET_NOTIFICATION,
    NOTIFICATION,
    ERR_GETTING_NOTIFICATION,
    ADD_TO_CART,
    ERROR_ENROLLING_COURSE,
    GET_CART_ITEMS,
    CART_ITEMS,
    ERROR_GETTING_CART,
    GET_TESTIMONIALS,
    TESTIMONIALS,
    TESTIMONIALS_ERRORS,
} from "./types"
import { BaseUrl } from "../Patials/BaseUrl"
import Axios from "axios";

export const volunteerSignup = (data) => dispatch => {

    dispatch({
        type: SENDING_VOLUNTEER_FORM
    })

    Axios.post(`${BaseUrl}volunteer`, {
            name: data.name,
            email: data.email,
            motivation: data.motivation,
            Interest: data.Interest,
            Availability: data.Availability,
            Educational: data.Educational,
            tool: data.tool,
        })
        .then(response => {
            console.log(response);
            dispatch({
                type: VOLUNTEER_FORM_SUCCESS,
            })

        })
        .catch(err => {
            dispatch({
                type: VOLUNTEER_FORM_ERROR,
                payload: err.response ? err.response.data.message : JSON.stringify(err.message)
            })
            console.error(err)
        });
}

export const coacheeSignup = (data) => dispatch => {
    const token = localStorage.getItem('P_access_token')
    dispatch({
        type: SENDING_COACHEE_FORM
    })

    Axios.post(`${BaseUrl}user/Coachee`, {
            name: data.name,
            email: data.email,
            motivation: data.motivation,
            category: data.category,
            Interest: data.Interest,
            Availability: data.Availability,
            CoachPreference: data.CoachPreference,
        }, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
            console.log(response);
            dispatch({
                type: COACHEE_FORM_SUCCESS,
            })
        })
        .catch(err => {
            dispatch({
                type: COACHEE_FORM_ERROR,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err.message)
            })
            console.error(err)
        });
}

export const userNotification = () => dispatch => {
    const token = localStorage.getItem('P_access_token')
    dispatch({
        type: GET_NOTIFICATION
    })

    Axios.get(`${BaseUrl}user/notification`, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
            console.log(response);
            dispatch({
                type: NOTIFICATION,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERR_GETTING_NOTIFICATION,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err.message)
            })
            console.error(err)
        });
}

export const readNotification = (id) => dispatch => {
    const token = localStorage.getItem('P_access_token')
    dispatch({
        type: GET_NOTIFICATION
    })

    Axios.get(`${BaseUrl}user/notification/read/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
            console.log(response);
            dispatch(userNotification())
        })
        .catch(err => {
            dispatch({
                type: ERR_GETTING_NOTIFICATION,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err.message)
            })
            console.error(err)
        });
}

export const addCart = (id) => dispatch => {
    const token = localStorage.getItem('P_access_token')
    dispatch({
        type: ADD_TO_CART
    })

    Axios.get(`${BaseUrl}user/cart/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
            console.log(response);
            dispatch({
                type: ADDED_TO_CART,
            })
        })
        .catch(err => {
            console.log(err.response.data)
            dispatch({
                type: ERROR_ENROLLING_COURSE,
                payload: err.response ? err.response.data.errors || err.response.data.message || err.response.data : JSON.stringify(err.message)
            })
            dispatch({
                type: ERROR_ADDING_TO_CART,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err.message)
            })

            console.error(err)
        });
}



export const getCartItems = () => dispatch => {
    const token = localStorage.getItem('P_access_token')
    dispatch({ type: GET_CART_ITEMS })

    Axios.get(`${BaseUrl}user/cart`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then(response => {

            dispatch({
                type: CART_ITEMS,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR_GETTING_CART,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err.message)
            })
        })
}

export const getTestimonials = (location) => dispatch => {
    dispatch({ type: GET_TESTIMONIALS })

    Axios.get(`${BaseUrl}testimonial/${location}`)
        .then(response => {
            dispatch({
                type: TESTIMONIALS,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: TESTIMONIALS_ERRORS,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err.message)
            })
        })
}