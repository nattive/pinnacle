import {
    AUTH_LOADING_STATE,
    APP_IS_BUSY,
    APP_IS_NOT_BUSY,
    END_LOADING_SHOW_COURSE,
    LOADING_SHOW_COURSE,
    START_COURSE_REVIEW,
    END_COURSE_REVIEW,
    WORKING,
    STOPPED_WORKING,
    GETTING_PROGRESS_STATUS,
    STOPPED_PROGRESS_STATUS,
} from "../Actions/types";

const initialState = {
    isSendingReview: false,
    authLoadingState: false,
    isFetchingShowCourse: false,
    busy: false,
    appIsBusy: false,
    isLoadingUserProgress: false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOADING_STATE:
            return {...state,
                authLoadingState: action.payload
            }
        case WORKING:
            return {...state,
                busy: true,
            }
        case STOPPED_WORKING:
            return {...state,
                busy: false,
            }

        case START_COURSE_REVIEW:
            return {...state,
                isSendingReview: true
            }
        case END_COURSE_REVIEW:
            return {...state,
                isSendingReview: false

            }
        case END_LOADING_SHOW_COURSE:
            return {...state,
                isFetchingShowCourse: false

            }
        case LOADING_SHOW_COURSE:
            return {...state,
                isFetchingShowCourse: true
            }
        case APP_IS_BUSY:
            return {...state,
                appIsBusy: true,
            }
        case APP_IS_NOT_BUSY:
            return {...state,
                appIsBusy: false,
            }
        case GETTING_PROGRESS_STATUS:
            return {...state,
                isLoadingUserProgress: true,

            }
        case STOPPED_PROGRESS_STATUS:
            return {...state,
                isLoadingUserProgress: false,

            }

        default:
            return state;
    }
}