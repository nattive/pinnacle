import {
    DISPLAY_QUESTIONS,
    HIDE_DISPLAY_QUESTIONS
} from "../Actions/types";

const initialState = {
    showQuestions: false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case DISPLAY_QUESTIONS:
            return {...state,
                showQuestions: true
            }
        case HIDE_DISPLAY_QUESTIONS:
            return {...state,
                showQuestions: false
            }

        default:
            return state;
    }
}