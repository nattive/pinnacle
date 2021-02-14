import Axios from "axios"
import { BaseUrl } from "../Patials/BaseUrl"
import {
    LOGIN_USER,
    ERR_LOGIN_USER,
    GET_USER_FROM_RESPONSE,
    AUTH_LOADING_STATE,
    ASYNC_ERRORS,
    ASYNC_ERROR,
    NULL_ERRORS,
    TOGGLE_LOGIN_FORM,
    ACCOUNT_TYPE,
    WORKING,
    STOPPED_WORKING,
    MENTEE
} from "./types"
import { verifyToken } from "./verifyTokenAction"
var jwt = require('jsonwebtoken');

export const login = credentials => dispatch => {
    dispatch({
        type: AUTH_LOADING_STATE,
        payload: true
    })
    dispatch({
        type: NULL_ERRORS
    })
    dispatch({
        type: WORKING
    })

    Axios.post(`${BaseUrl}login`, credentials)
        .then(data => {
            dispatch({
                type: STOPPED_WORKING
            })
            dispatch({
                type: AUTH_LOADING_STATE,
                payload: false
            })
            const { user, mentee } = data.data;
            console.log(data);
            localStorage.removeItem('P_access_token')
            localStorage.setItem('P_access_token', data.data.access_token)
            dispatch({
                type: GET_USER_FROM_RESPONSE,
                payload: user
            })
            dispatch({
                type: MENTEE,
                payload: mentee
            })

        })
        .catch(err => {
            // const 
            console.log(err);
            dispatch({
                type: STOPPED_WORKING
            })
            dispatch({
                type: AUTH_LOADING_STATE,
                payload: false
            })
            dispatch({
                type: ERR_LOGIN_USER,
                payload: err.response ? err.response.data.error : JSON.stringify(err.message)
            })
            dispatch({
                type: AUTH_LOADING_STATE,
                payload: false
            })
        })

}

export const logout = () => dispatch => {

    dispatch({
        type: AUTH_LOADING_STATE,
        payload: true
    })
    dispatch({
        type: WORKING
    })
    dispatch({
        type: NULL_ERRORS
    })
    const token_to_verify = localStorage.getItem('P_access_token')
    Axios.get(`${BaseUrl}logout`, { headers: { Authorization: `Bearer ${token_to_verify}` } })
        .then(data => {
            localStorage.removeItem("P_access_token");
            dispatch({
                type: STOPPED_WORKING
            })
            dispatch({
                type: GET_USER_FROM_RESPONSE,
                payload: {}
            })
            dispatch({
                type: ACCOUNT_TYPE,
                payload: ''
            })
        })
        .catch(err => {
            // const err
            dispatch({
                type: ASYNC_ERRORS,
                payload: err
            })
            dispatch({
                type: AUTH_LOADING_STATE,
                payload: false
            })
            dispatch({
                type: STOPPED_WORKING
            })
        })
}

export const toggleForm = (value) => dispatch => {

    dispatch({
        type: TOGGLE_LOGIN_FORM,
        payload: value
    })

}

export const getUser = () => dispatch => {
    const token_to_verify = localStorage.getItem('P_access_token')
    dispatch({
        type: WORKING
    })
    dispatch({
        type: AUTH_LOADING_STATE,
        payload: false
    })
    if (token_to_verify) {

        Axios.get(`${BaseUrl}me`, { headers: { Authorization: `Bearer ${token_to_verify}` } })
            .then(res => {
                dispatch({
                    type: GET_USER_FROM_RESPONSE,
                    payload: res.data.user
                })
                dispatch({
                    type: AUTH_LOADING_STATE,
                    payload: false
                })
                dispatch({
                    type: MENTEE,
                    payload: res.data.mentee
                })

            })
            .catch(err => {
                alert(err.response ? err.response.message || err.response.data : JSON.stringify(err))
                dispatch({
                    type: AUTH_LOADING_STATE,
                    payload: false
                })
            })
    } else {
        console.log('no in');

    }
}