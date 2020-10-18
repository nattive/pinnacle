import {
    GET_BLOG_POSTS,
    BLOG_POSTS,
    ERR_GETTING_BLOG_POST,
    GET_BLOG_POST,
    BLOG_POST,
    ERR_GETTING_BLOG_POSTS,
    GET_BLOG_CATEGORIES,
    BLOG_CATEGORIES,
    ERR_GETTING_BLOG_CATEGORIES,
} from "../Actions/types";

const initialState = {
    isGettingPosts: false,
    isGettingPost: false,
    posts: [],
    post: {},
    blogError: null,
    gettingCat: false,
    categories: [],
    catErrors: null
}

export default function(state = initialState, action) {
    switch (action.type) {

        case GET_BLOG_CATEGORIES:
            return {
                ...state,
                gettingCat: true,
                catErrors: null
            }
        case BLOG_CATEGORIES:
            return {
                ...state,
                gettingCat: false,
                categories: action.payload
            }
        case ERR_GETTING_BLOG_CATEGORIES:
            return {
                ...state,
                gettingCat: false,
                catErrors: action.payload
            }
        case GET_BLOG_POSTS:
            return {
                ...state,
                isGettingPosts: true,
                blogError: null
            }
        case BLOG_POSTS:
            return {
                ...state,
                isGettingPosts: false,
                posts: action.payload,
            }
        case ERR_GETTING_BLOG_POSTS:
            return {
                ...state,
                isGettingPosts: false,
                blogError: action.payload,
            }

        case GET_BLOG_POST:
            return {
                ...state,
                isGettingPost: true,
                blogError: null
            }
        case BLOG_POST:
            return {
                ...state,
                isGettingPost: false,
                post: action.payload,
            }
        case ERR_GETTING_BLOG_POST:
            return {
                ...state,
                isGettingPost: false,
                blogError: action.payload,
            }

        default:
            return state
    }
}