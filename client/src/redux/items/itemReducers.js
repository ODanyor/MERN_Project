import { 
    GET_ITEMS,
    ADD_ITEM, 
    DELETE_ITEM, 
    EDIT_ITEM, 
    ITEMS_LOADING } from './itemTypes'


const initialState = {
    items: [],
    loading: false
}
const itemReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case EDIT_ITEM:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item._id === action.payload.id) {
                        return {
                            ...item, ...action.payload.item
                        }
                    }
                    return item
                })
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default: return state
    }
}

export default itemReducer