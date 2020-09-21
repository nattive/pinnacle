import {
    POST_COMMENT,
    COMMENT_POSTED,
    UPDATE_COMMENT,
    COMMENT_UPDATED,
    DELETE_COMMENT,
    COMMENT_DELETED,
    POSTING_COMMENT_ERROR,
    DELETING_COMMENT_ERROR,
    GET_COMMENT,
    GET_COMMENT_ERROR,
    COMMENT,
} from "../Actions/types";

const initialState = {
    isPostingComment: false,
    isUpdatingComment: false,
    commentPostError: null,
    deletingComment: false,
    isGettingComment: false,
    comments: [],
    commentError: null,
    errorDeletingComment: null,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case POST_COMMENT:
            return {
                ...state,
                isPostingComment: true,
                commentPostError: null,
            }
        case COMMENT_POSTED:
            return {
                ...state,
                isPostingComment: false,
                commentPostError: null,
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                isUpdatingComment: true,
                commentPostError: null,

            }
        case COMMENT_UPDATED:
            return {
                ...state,
                isUpdatingComment: false,
                commentPostError: null,
            }
        case DELETE_COMMENT:
            return {...state,
                deletingComment: true,
                errorDeletingComment: null,

            }
        case COMMENT_DELETED:
            return {...state,
                deletingComment: false,
                errorDeletingComment: null,

            }
        case POSTING_COMMENT_ERROR:
            return {...state,
                isPostingComment: false,
                commentPostError: action.payload
            }
        case DELETING_COMMENT_ERROR:
            return {...state,
                deletingComment: false,
                errorDeletingComment: action.payload
            }
        case GET_COMMENT:
            return {...state,
                isGettingComment: true,
                commentError: null,
            }
        case GET_COMMENT_ERROR:
            return {...state,
                isGettingComment: false,
                commentError: action.payload
            }
        case COMMENT:
            return {...state,
                isGettingComment: false,
                comments: action.payload
            }

        default:
            return state;
    }
}