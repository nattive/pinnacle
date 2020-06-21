import Axios from "axios"
import { BaseUrl } from "../Patials/BaseUrl"
import {
    DISPLAY_QUESTIONS,
    HIDE_DISPLAY_QUESTIONS,
} from '../Actions/types'

export const displayQuestions = () => dispatch => {
    console.log(dispatch);

    dispatch({
        type: DISPLAY_QUESTIONS,
    })
}

export const hideQuestions = () => dispatch => {
    dispatch({
        type: HIDE_DISPLAY_QUESTIONS,
    })

}