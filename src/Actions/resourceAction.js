import Axios from "axios"
import { BaseUrl } from "../Patials/BaseUrl"
import {
    GET_FREE_RESOURCE,
    FREE_RESOURCES,
    FREE_RESOURCES_ERROR,
    GET_FREE_RESOURCE_CATEGORIES,
    FREE_RESOURCE_CATEGORIES,
    ERR_FREE_RESOURCE_CATEGORIES,
    FREE_RESOURCE,
} from "./types"

export const getResources = () => dispatch => {

    dispatch({
        type: GET_FREE_RESOURCE
    })

    Axios.get(`${BaseUrl}library`)
        .then(res => {
            dispatch({
                type: FREE_RESOURCES,
                payload: res.data && res.data.data
            })
        })
        .catch(err => {
            dispatch({
                type: FREE_RESOURCES_ERROR,
                payload: err.response ? err.response.data &&
                    err.response.data.message : err.message ?
                    JSON.stringify(err.message) : 'error occurred'
            })
        })
}

// export const searchPosts = (query) => dispatch => {

//     dispatch({
//         type: GET_BLOG_POSTS
//     })

//     Axios.get(`${BaseUrl}post/search/${query}`)
//         .then(res => {
//             dispatch({
//                 type: BLOG_POSTS,
//                 payload: res.data && res.data.data || res.data
//             })
//         })
//         .catch(err => {
//             dispatch({
//                 type: ERR_GETTING_BLOG_POSTS,
//                 payload: err.response ? err.response.data &&
//                     err.response.data.message : err.message ?
//                     JSON.stringify(err.message) : 'error occurred'
//             })
//         })
// }

export const getResourceCategories = () => dispatch => {

    dispatch({
        type: GET_FREE_RESOURCE_CATEGORIES
    })

    Axios.get(`${BaseUrl}library/category/all`)
        .then(res => {
            dispatch({
                type: FREE_RESOURCE_CATEGORIES,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERR_FREE_RESOURCE_CATEGORIES,
                payload: err.response ? err.response.data &&
                    err.response.data.message : err.message ?
                    JSON.stringify(err.message) : 'error occurred'
            })
        })
}

export const getResource = (slug) => dispatch => {

    dispatch({ type: GET_FREE_RESOURCE })

    Axios.get(`${BaseUrl}library/${slug}`)
        .then(res => {
            dispatch({
                type: FREE_RESOURCE,
                payload: res.data && res.data.data
            })
        })
        .catch(err => {
            dispatch({
                type: FREE_RESOURCES_ERROR,
                payload: err.response ? err.response.data &&
                    err.response.data.message : err.message ?
                    JSON.stringify(err.message) : 'error occurred'
            })
        })
}