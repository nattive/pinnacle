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
    ACCOUNT_TYPE
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

    Axios.post(`${BaseUrl}api/login`, credentials)
        .then(data => {
            // var token = jwt.sign({...data.data }, 'gk0ra6IcLrAmexlr4tZip9bmRXvRoXtDNNsEQnF1HIT0dI4tNaVbyg6ZhFvffqga');
            const { user } = data.data;
            console.log(data);
            localStorage.removeItem('P_access_token')
            localStorage.setItem('P_access_token', data.data.access_token)
            switch (user.account_type) {
                case 'isPO':
                    dispatch({
                        type: GET_USER_FROM_RESPONSE,
                        payload: user
                    })
                    dispatch({
                        type: ACCOUNT_TYPE,
                        payload: 'isPO'
                    })
                    break;
                    dispatch({
                        type: GET_USER_FROM_RESPONSE,
                        payload: data.data.user
                    })
                    dispatch({
                        type: ACCOUNT_TYPE,
                        payload: 'isCareer'
                    })
                    break;

                default:
                    break;
            }
        })
        .catch(err => {
            // const 
            console.log(err);

            // dispatch({
            //     type: ERR_LOGIN_USER,
            //     payload: err.response.data.error || err.message
            // })
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
        type: NULL_ERRORS
    })

    Axios.post(`${BaseUrl}api/logout`)
        .then(data => {
            localStorage.removeItem("P_access_token");

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

    if (token_to_verify) {

        Axios.get(`${BaseUrl}api/user`, { headers: { Authorization: `Bearer ${token_to_verify}` } })
            .then(res => {
                dispatch({
                    type: GET_USER_FROM_RESPONSE,
                    payload: res.data
                })
                dispatch({
                    type: res.data.account_type,
                    payload: 'isPO'
                })
                console.log(res)
            })
            .catch(err => console.log(err))
    } else {
        console.log('no in');

    }
}