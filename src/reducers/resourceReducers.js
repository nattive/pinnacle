import {
    GET_FREE_RESOURCE,
    FREE_RESOURCES,
    FREE_RESOURCES_ERROR,
    GET_FREE_RESOURCE_CATEGORIES,
    FREE_RESOURCE_CATEGORIES,
    ERR_FREE_RESOURCE_CATEGORIES,
    FREE_RESOURCE
} from "../Actions/types";

const initialState = {
    isGettingFRs: false,
    isGettingFR: false,
    FRs: [],
    FR: {},
    FR_Error: null,
    gettingCat: false,
    categories: [],
    catErrors: null
}

export default function(state = initialState, action) {
    switch (action.type) {

        case GET_FREE_RESOURCE_CATEGORIES:
            return {
                ...state,
                gettingCat: true,
                catErrors: null
            }
        case FREE_RESOURCE_CATEGORIES:
            return {
                ...state,
                gettingCat: false,
                categories: action.payload
            }
        case ERR_FREE_RESOURCE_CATEGORIES:
            return {
                ...state,
                gettingCat: false,
                catErrors: action.payload
            }
        case GET_FREE_RESOURCE:
            return {
                ...state,
                isGettingFRs: true,
                FR_Error: null
            }
        case FREE_RESOURCES:
            return {
                ...state,
                isGettingFRs: false,
                FRs: action.payload,
            }
        case FREE_RESOURCES_ERROR:
            return {
                ...state,
                isGettingFRs: false,
                FR_Error: action.payload,
            }

        case FREE_RESOURCE:
            return {
                ...state,
                FR: action.payload,
                isGettingFRs: false,
            }
        default:
            return state
    }
}