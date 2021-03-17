import Axios from "axios";
import { BaseUrl } from "../Patials/BaseUrl";
import {
    SHOW_COURSE_REVIEW,
    START_SHOW_COURSE_REVIEW,
    END_SHOW_COURSE_REVIEW,
    START_DELETE_REVIEW,
    END_DELETE_REVIEW,
    START_COURSE_REVIEW,
    END_COURSE_REVIEW
} from '../Actions/types'

export const fetchReview = course_id => dispatch => {
    dispatch({
        type: START_SHOW_COURSE_REVIEW
    })

    const url = `${BaseUrl}user/course/review/${course_id}`;
    Axios.get(url).then((comments) => {
        console.log(comments);

        dispatch({
            type: SHOW_COURSE_REVIEW,
            payload: comments.data
        })
    })
    dispatch({
        type: END_SHOW_COURSE_REVIEW
    })
}


export const postReview = ({ data }) => dispatch => {


    dispatch({
        type: START_COURSE_REVIEW
    })

    Axios.post(`${BaseUrl}user/course/review`, {
            review: data.review,
            rating: data.rating,
            user_name: data.user_name,
            user_id: data.user_id,
            course_id: data.course_id,
        })
        .then(response => {
            console.log(response);
            dispatch({
                type: END_COURSE_REVIEW,
                payload: response.data
            })
            dispatch(fetchReview(data.course_id))

        })
        .catch(err => {
            dispatch({
                type: END_COURSE_REVIEW,
                payload: err.message
            })
            console.error(err)
        });

}

export const deleteReview = (id, course_id) => dispatch => {

    /**
     * TODO: Add swal popup
     */
    dispatch({
        type: START_DELETE_REVIEW
    })

    Axios.delete(`${BaseUrl}user/course/review/${id}`)
        .then(response => {
            console.log(response);
            dispatch(fetchReview(course_id))
            dispatch({
                type: END_DELETE_REVIEW
            })

        })
        .catch(err => {
            console.error(err)
            dispatch({
                type: END_DELETE_REVIEW
            })

        });

}