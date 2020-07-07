import { AUTH_LOADING_STATE, START_COURSE_REVIEW, END_COURSE_REVIEW } from "../Actions/types";

const initialState = {
    isSendingReview: false,
    authLoadingState: false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOADING_STATE:
            return {...state,
                authLoadingState: action.payload
            }
        case START_COURSE_REVIEW:
            return {...state,
                isSendingReview: true
            }
        case END_COURSE_REVIEW:
            return {...state,
                isSendingReview: false

            }

        default:
            return state;
    }
}