import {
    FETCH_COURSES,
    FETCH_PO_COURSES,
    FETCH_COTF_COURSES,
    ENROLLED_COURSES,
    FETCH_FREE_COURSES,
    PLAY_COURSE,
    NULL_ERR_MAIN_CATEGORIES,
    MAIN_CATEGORIES,
    ERR_MAIN_CATEGORIES,
    NULL_ERR_PLAY_COURSE,
    ERR_PLAY_COURSE,
    SAVE_PLAYING_MODULES,
    COURSE_IS_ENROLLED,
    START_COURSE_REVIEW,
    END_COURSE_REVIEW,
    CHECK_COURSE_PROGRESS,
    ERR_COURSE_IS_ENROLLED,
    ERR_FETCH_COURSES,
    SHOW_COURSE,
    PLAY_MODULES,
    NULL_ERR_FETCH_COURSES
} from "../Actions/types";

const initialState = {
    showCourse: {},
    moduleToPlay: {},
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
    items: {},
    item: {},
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_COURSES:
            return {...state,
                items: action.payload
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
                playModuleQueue: action.payload
            }
        case PLAY_MODULES:
            return {
                ...state,
                moduleToPlay: action.payload
            }
        case NULL_ERR_PLAY_COURSE:
            return {...state,
                playError: ''
            }
        case COURSE_IS_ENROLLED:
            return {...state,
                isEnrolled: action.payload
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
                showCourse: action.payload
            }
        case ERR_FETCH_COURSES:
            return {...state,
                fetchCourseError: action.payload
            }
        case NULL_ERR_FETCH_COURSES:
            return {...state,
                fetchCourseError: null
            }

        default:
            return state;
    }
}