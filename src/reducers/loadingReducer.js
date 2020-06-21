import { AUTH_LOADING_STATE } from "../Actions/types";

const initialState = {
    authLoadingState: false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOADING_STATE:
            return {...state,
                authLoadingState: action.payload
            }

        default:
            return state;
    }
}