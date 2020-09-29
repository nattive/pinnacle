import {
    DISPLAY_QUESTIONS,
    HIDE_DISPLAY_QUESTIONS,
    SHOW_RESULT,
    RESULT,
    HIDE_RESULT,
    ERR_RESULT,
    GET_USER_COURSE_PROGRESS,

} from "../Actions/types";

const initialState = {
    showQuestions: true,
    showResult: false,
    errResult: false,
    result: {},
    userProgress: {},
}
export default function(state = initialState, action) {
    switch (action.type) {
        case DISPLAY_QUESTIONS:
            return {
                ...state,
                showQuestions: Boolean(action.payload)
            }
        case RESULT:
            return {
                ...state,
                result: action.payload
            }
        case HIDE_DISPLAY_QUESTIONS:
            return {
                ...state,
                showQuestions: false
            }
        case SHOW_RESULT:
            return {
                ...state,
                showResult: true
            }
        case HIDE_RESULT:
            return {
                ...state,
                showResult: false
            }
        case ERR_RESULT:
            return {
                ...state,
                errResult: action.payload
            }
        case GET_USER_COURSE_PROGRESS:
            return {
                ...state,
                userProgress: action.payload
            }

        default:
            return state;
    }
}