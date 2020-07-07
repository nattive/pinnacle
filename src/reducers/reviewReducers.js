import {
    START_COURSE_REVIEW,
    START_SHOW_COURSE_REVIEW,
    SHOW_COURSE_REVIEW,
    END_SHOW_COURSE_REVIEW,
    END_COURSE_REVIEW,
    START_DELETE_REVIEW,
    END_DELETE_REVIEW,
} from "../Actions/types";

const initialState = {
    isLoadingReview: false,
    isPostingReview: false,
    isDeletingReview: false,
    showedCourseReview: {},
}

export default function(state = initialState, action) {
    switch (action.type) {
        case START_COURSE_REVIEW:
            return {
                ...state,
                isPostingReview: true
            };
        case END_COURSE_REVIEW:
            return {
                ...state,
                isPostingReview: false
            };
        case START_SHOW_COURSE_REVIEW:
            return {
                ...state,
                isPostingReview: true
            };
        case SHOW_COURSE_REVIEW:
            return {
                ...state,
                showedCourseReview: action.payload
            }
        case END_SHOW_COURSE_REVIEW:
            return {
                ...state,
                isPostingReview: false
            }
        case START_DELETE_REVIEW:
            return {
                ...state,
                isDeletingReview: true
            }
        case END_DELETE_REVIEW:
            return {
                ...state,
                isDeletingReview: false
            }

        default:
            return state;
    }
}