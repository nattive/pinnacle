// import { ERR_LOGIN_USER, GET_USER_FROM_RESPONSE, ACCOUNT_TYPE } from "./types"
// var jwt = require('jsonwebtoken');

// export const verifyUserTokenAction = (token = null) => async dispatch => {

//     var token_to_verify;
//     if (token === null) {
//         token_to_verify = localStorage.getItem('user_as_token')
//     } else {
//         token_to_verify = token
//     }
//     // const user = jwt.verify(token_to_verify) /
//     try {
//         var decoded = await jwt.verify(token_to_verify, 'gk0ra6IcLrAmexlr4tZip9bmRXvRoXtDNNsEQnF1HIT0dI4tNaVbyg6ZhFvffqga');
//         localStorage.removeItem('user_as_token')
//         localStorage.setItem('user_as_token', token_to_verify)
//         console.log(decoded);

//         switch (decoded.user.account_type) {
//             case 'isPO':
//                 dispatch({
//                     type: GET_USER_FROM_RESPONSE,
//                     payload: decoded
//                 })
//                 dispatch({
//                     type: ACCOUNT_TYPE,
//                     payload: 'isPO'
//                 })
//                 break;
//             case 'isCareer':
//                 dispatch({
//                     type: GET_USER_FROM_RESPONSE,
//                     payload: decoded
//                 })
//                 dispatch({
//                     type: ACCOUNT_TYPE,
//                     payload: 'isCareer'
//                 })
//                 break;

//             default:
//                 break;
//         }
//         dispatch({
//             type: GET_USER_FROM_RESPONSE,
//             payload: decoded
//         })

//     } catch (err) {
//         dispatch({
//             type: ERR_LOGIN_USER,
//             payload: 'An error occurred' + err.message
//         })
//     }
// }