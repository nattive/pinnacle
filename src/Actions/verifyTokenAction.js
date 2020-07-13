import { ERR_LOGIN_USER, STORE_TOKEN } from "./types"
var jwt = require('jsonwebtoken');

export const verifyToken = (token = null) => async dispatch => {

    var token_to_verify;
    if (token === null) {
        token_to_verify = localStorage.getItem('P_access_token')
    } else {
        token_to_verify = token
    }
    // const user = jwt.verify(token_to_verify) /
    try {
        var decoded = await jwt.verify(token_to_verify, 'gk0ra6IcLrAmexlr4tZip9bmRXvRoXtDNNsEQnF1HIT0dI4tNaVbyg6ZhFvffqga');
        localStorage.setItem('P_access_token', token_to_verify)
        console.log(decoded);

        dispatch({
            type: STORE_TOKEN,
            payload: decoded
        })

    } catch (err) {
        dispatch({
            type: ERR_LOGIN_USER,
            payload: err
        })
    }
}