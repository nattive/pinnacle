import {
    LOGIN_USER,
    NULL_ERRORS,
    ERR_LOGIN_USER,
    REGISTER_USER,
    VERIFY_USER,
    GET_USER_FROM_RESPONSE,
    ASYNC_ERROR,
    ASYNC_ERRORS,
    ACCOUNT_TYPE,
    TOGGLE_LOGIN_FORM,
    NULL_AUTH_ERRORS,
} from "../Actions/types";

const initialState = {
    user: {},
    token: '',
    error: '',
    AuthError: null,
    loginError: null,
    errors: {},
    account_type: '',
    showLogin: true,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload
            };
        case GET_USER_FROM_RESPONSE:
            return {
                ...state,
                user: action.payload
            };
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload
            };
        case ERR_LOGIN_USER:
            return {
                ...state,
                loginError: action.payload
            }
        case VERIFY_USER:
            return {
                ...state,
                token: action.payload
            }
        case ASYNC_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case ASYNC_ERRORS:
            return {
                ...state,
                errors: action.payload
            }
        case NULL_ERRORS:
            return {
                ...state,
                errors: {},
                error: '',
            }
        case NULL_AUTH_ERRORS:
            return {
                ...state,
                AuthError: null,
                loginError: null,
            }
        case ACCOUNT_TYPE:
            return {
                ...state,
                account_type: action.payload
            }
        case TOGGLE_LOGIN_FORM:
            return {
                ...state,
                showLogin: action.payload
            }

        default:
            return state;
    }
}