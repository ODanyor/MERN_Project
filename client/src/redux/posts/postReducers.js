import { GET_POSTS, DELETE_POST, EDIT_POSTS, POSTS_LOADING } from './postTypes'

const initialState = {
    posts: [],
    loading: false
}

const postReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case POSTS_LOADING:
            return {
                ...state,
                loading: true
            }
        default: return state
    }
}

export default postReducer