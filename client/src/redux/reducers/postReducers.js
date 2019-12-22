import { GET_POSTS, DELETE_POST, EDIT_POSTS, POSTS_LOADING, ADD_TO_CART, REMOVE_FROM_CART } from '../types'

export const postState = {
    posts: [],
    cartPosts: [],
    counter: 0,
    loading: false
}

const postReducer = (state=postState, action) => {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case ADD_TO_CART:
            let checkCart = state.cartPosts.find(post => post._id === action.payload._id)
            if (!checkCart) {
                return {
                    ...state,
                    counter: state.counter + 1,
                    cartPosts: [...state.cartPosts, action.payload]
                }
            }
            else if (checkCart) {
                return {
                    ...state
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                counter: state.counter - 1,
                cartPosts: state.cartPosts.filter(post => post._id !== action.payload)
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