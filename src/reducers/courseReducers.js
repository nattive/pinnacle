import {
    FETCH_COURSES,
    FETCH_PO_COURSES,
    FETCH_COTF_COURSES,
    FETCH_FREE_COURSES,
    PLAY_COURSE,
    NULL_ERR_MAIN_CATEGORIES,
    MAIN_CATEGORIES,
    ERR_MAIN_CATEGORIES,
    NULL_ERR_PLAY_COURSE,
    ERR_PLAY_COURSE,
    SAVE_PLAYING_MODULES,
    COURSE_IS_ENROLLED,
    END_LOADING_SHOW_COURSE,
    START_COURSE_REVIEW,
    ENROLLING_COURSE,
    ENROLLED_COURSES,
    LOAD_SUB,
    LOADING_SHOW_COURSE,
    END_COURSE_REVIEW,
    EMPTY_PLAY_MODULES,
    CHECK_COURSE_PROGRESS,
    ERR_COURSE_IS_ENROLLED,
    ERR_FETCH_COURSES,
    SHOW_COURSE,
    PLAY_MODULES,
    NULL_ERR_FETCH_COURSES,
    GET_RECOMMENDED_COURSES,
    ALL_COURSES,
    ERROR_ENROLLING_COURSE,
    ERR_GET_RECOMMENDED_COURSES
} from "../Actions/types";

const initialState = {
    showCourse: {},
    modulePlaying: {},
    fetchCourseError: null,
    mainCategories: {},
    mainCategoriesFetchError: null,
    PO_courses: {},
    playCourse: {},
    FREE_courses: {},
    COTF_courses: {},
    ALL_courses: {},
    playModuleQueue: {},
    ENROLLED_courses: {},
    playError: '',
    isEnrolledError: '',
    isEnrolled: false,
    courseProgress: 0,
    moduleLength: 0,
    items: {},
    item: {},
    loadSub: {},
    recommendedCourses: {},
    recommendedCoursesFetchError: null,
    showingCourse: false,
    errShowingCourse: {},
    isEnrollingCourse: false,
    enrollCourseError: null,
    courseIsEnrolled: false,

}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_COURSES:
            return {...state,
                items: action.payload
            }
        case LOAD_SUB:
            return {
                ...state,
                loadSub: action.payload
            }
        case FETCH_PO_COURSES:
            return {...state,
                PO_courses: action.payload
            }
        case FETCH_COTF_COURSES:
            return {...state,
                COTF_courses: action.payload
            }
        case FETCH_FREE_COURSES:
            return {...state,
                FREE_courses: action.payload
            }
        case ENROLLED_COURSES:
            return {...state,
                ENROLLED_courses: action.payload
            }
        case PLAY_COURSE:
            return {...state,
                playCourse: action.payload
            }
        case ERR_PLAY_COURSE:
            return {...state,
                playError: action.payload
            }
        case SAVE_PLAYING_MODULES:
            return {...state,
                playModuleQueue: action.payload,
                moduleLength: action.payload.length
            }
        case PLAY_MODULES:
            /**
             * get/load course module to play
             * Present playing module
             */
            return {
                ...state,
                modulePlaying: action.payload
            }
        case EMPTY_PLAY_MODULES:
            /**
             * Present playing module
             */
            return {
                ...state,
                modulePlaying: {}
            }

        case NULL_ERR_PLAY_COURSE:
            return {...state,
                playError: ''
            }
        case ENROLLING_COURSE:
            return {...state,
                isEnrollingCourse: true,
                enrollCourseError: null
            }
        case ERROR_ENROLLING_COURSE:
            return {...state,
                enrollCourseError: action.payload,
                isEnrollingCourse: false,

            }

        case COURSE_IS_ENROLLED:
            return {...state,
                isEnrollingCourse: false,
                courseIsEnrolled: action.payload
            }
        case ERR_COURSE_IS_ENROLLED:
            return {...state,
                isEnrolledError: action.payload
            }
        case CHECK_COURSE_PROGRESS:
            return {...state,
                courseProgress: action.payload
            }
        case NULL_ERR_MAIN_CATEGORIES:
            return {...state,
                mainCategoriesFetchError: null
            }
        case MAIN_CATEGORIES:
            return {...state,
                mainCategories: action.payload
            }
        case ERR_MAIN_CATEGORIES:
            return {...state,
                mainCategoriesFetchError: action.payload
            }
        case SHOW_COURSE:
            return {...state,
                showCourse: action.payload,
                showingCourse: false
            }
        case LOADING_SHOW_COURSE:
            return {...state,
                showingCourse: true
            }
        case END_LOADING_SHOW_COURSE:
            return {...state,
                showingCourse: false,
                errShowingCourse: action.payload,
            }

        case ERR_FETCH_COURSES:
            return {...state,
                fetchCourseError: action.payload
            }
        case NULL_ERR_FETCH_COURSES:
            return {...state,
                fetchCourseError: null
            }
        case GET_RECOMMENDED_COURSES:
            return {...state,
                recommendedCourses: action.payload
            }
        case ERR_GET_RECOMMENDED_COURSES:
            return {...state,
                recommendedCoursesFetchError: action.payload
            }
        case ALL_COURSES:
            return {...state,
                ALL_courses: action.payload
            }

        default:
            return state;
    }
}