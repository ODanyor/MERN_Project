import { GET_POSTS, DELETE_POST, EDIT_POSTS, POSTS_LOADING } from '../types'
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
            dispatch(getErrors(err.response.data, err.response.status))
        );
}
export const postsLoading = () => {
    return {
        type: POSTS_LOADING
    }
}