import {
    SENDING_VOLUNTEER_FORM,
    VOLUNTEER_FORM_ERROR,
    VOLUNTEER_FORM_SUCCESS,
    SENDING_COACHEE_FORM,
    COACHEE_FORM_ERROR,
    COACHEE_FORM_SUCCESS,
    GET_NOTIFICATION,
    NOTIFICATION,
    ERR_GETTING_NOTIFICATION,
    ADD_TO_CART,
    ADDED_TO_CART,
    ERROR_ADDING_TO_CART,
    GET_CART_ITEMS,
    CART_ITEMS,
    ERROR_GETTING_CART,
    GET_TESTIMONIALS,
    TESTIMONIALS,
    TESTIMONIALS_ERRORS,
    TUTOR_MOVE_TO_NEXT,
} from "../Actions/types";

const initialState = {
    /**
     * Volunteer
     */
    isSendingVF: false,
    errorSendingVF: null,
    hasSentVF: null,
    /**
     * Volunteer
     */
    isSendingCF: false,
    errorSendingCF: null,
    hasSentCF: null,
    /** notification */
    notificationError: null,
    notification: {},
    /** Cart */
    addingToCart: false,
    addedToCart: false,
    errorAddingToCart: null,
    gettingCart: false,
    cart: [],
    errorGettingCart: null,
    /*** Testimonial **/
    gettingTestimonies: false,
    testimonies: [],
    testimonialError: null,
    /*** Tutor signup Page  ***/
    moveToNext: false
}

export default function (state = initialState, action) {
    switch (action.type) {

        /************************* TESTIMONIALS ***************** */

        case GET_TESTIMONIALS:
            return {
                ...state,
                gettingTestimonies: true,
                testimonialError: null
            }
        case TESTIMONIALS:
            return {
                ...state,
                gettingTestimonies: false,
                testimonies: action.payload,
            }
        case TESTIMONIALS_ERRORS:
            return {
                ...state,
                gettingTestimonies: false,
                testimonialError: action.payload,
            }

        /************************* VOLUNTEER REDUCER ***************** */

        case SENDING_VOLUNTEER_FORM:
            return {
                ...state,
                isSendingVF: true,
                errorSendingVF: null,
                hasSentVF: null
            }
        case VOLUNTEER_FORM_ERROR:
            return {
                ...state,
                isSendingVF: false,
                errorSendingVF: action.payload,
                hasSentVF: null
            }
        case VOLUNTEER_FORM_SUCCESS:
            return {
                ...state,
                isSendingVF: false,
                errorSendingVF: null,
                hasSentVF: true
            }

        /************************* COACHEE REDUCER ***************** */

        case SENDING_COACHEE_FORM:
            return {
                ...state,
                isSendingCF: true,
                errorSendingCF: null,
                hasSentCF: null
            }
        case COACHEE_FORM_ERROR:
            return {
                ...state,
                isSendingCF: false,
                errorSendingCF: action.payload,
                hasSentCF: null
            }
        case COACHEE_FORM_SUCCESS:
            return {
                ...state,
                isSendingCF: false,
                errorSendingCF: null,
                hasSentCF: true
            }
        /************************* COACHEE REDUCER ***************** */
        case GET_NOTIFICATION:
            return {
                ...state,
                notificationError: null
            }
        case NOTIFICATION:
            return {
                ...state,
                notification: action.payload,
            }
        case ERR_GETTING_NOTIFICATION:
            return {
                ...state,
                notificationError: action.payload,
            }
        case ADD_TO_CART:
            return {
                ...state,
                addingToCart: true,
                errorAddingToCart: null
            }
        case ADDED_TO_CART:
            return {
                ...state,
                addingToCart: false,
                addedToCart: true,
            }
        case ERROR_ADDING_TO_CART:
            return {
                ...state,
                addingToCart: false,
                errorAddingToCart: action.payload,
            }
        case GET_CART_ITEMS:
            return {
                ...state,
                gettingCart: true,
                cart: [],
                errorGettingCart: null
            }
        case CART_ITEMS:
            return {
                ...state,
                gettingCart: false,
                cart: action.payload,
            }
        case ERROR_GETTING_CART:
            return {
                ...state,
                gettingCart: false,
                errorGettingCart: action.payload,
            }

        /***** MOVE TO NEXT *******/
        case TUTOR_MOVE_TO_NEXT:
            return {
                ...state,
                moveToNext: true
            }
        default:
            return state
    }
}