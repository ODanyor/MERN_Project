import { GET_POSTS, DELETE_POST, EDIT_POSTS, POSTS_LOADING, ADD_TO_CART, REMOVE_FROM_CART } from '../types'
import axios from 'axios'
import { getErrors } from './errorActions'

export const getPosts = () => dispatch => {
    dispatch(postsLoading())
    axios.get('/api/posts')
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        })
        .catch(err =>
            dispatch(getErrors(err.res.data, err.res.status))
        );
}
export const addToCart = (post) => {
    return {
        type: ADD_TO_CART,
        payload: post
    }
}
export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}
export const postsLoading = () => {
    return {
        type: POSTS_LOADING
    }
}