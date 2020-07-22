import Axios from "axios"
import { BaseUrl } from "../Patials/BaseUrl"
import {
    REGISTER_USER,
    ERR_LOGIN_USER,
    GET_USER_FROM_RESPONSE,
    AUTH_LOADING_STATE,
    ASYNC_ERRORS,
    ASYNC_ERROR,
    NULL_ERRORS,
    ACCOUNT_TYPE
} from "./types"
import { verifyToken } from "./verifyTokenAction"
var jwt = require('jsonwebtoken');

export const register = credentials => dispatch => {
    dispatch({
        type: AUTH_LOADING_STATE,
        payload: true
    })
    dispatch({
        type: NULL_ERRORS,
        payload: false
    })

    Axios.post(`${BaseUrl}api/register`, credentials)
        .then(data => {
            const { user } = data.data;
            dispatch({
                type: AUTH_LOADING_STATE,
                payload: false
            })
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
                case 'isCareer':

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
            // console.log(JSON.stringify(err));
            if (err.errors) {
                dispatch({
                    type: ASYNC_ERRORS,
                    payload: err.errors
                })
            } else {
                dispatch({
                    type: ASYNC_ERROR,
                    payload: err.message
                })
            }
            dispatch({
                type: AUTH_LOADING_STATE,
                payload: false
            })
        })

}