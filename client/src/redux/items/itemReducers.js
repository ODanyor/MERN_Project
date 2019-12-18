import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from './itemTypes'
import uuid from 'uuid'
const initialState = {
    items: [
        {id: uuid(), name: 'Milk'},
        {id: uuid(), name: 'Cokies'},
        {id: uuid(), name: 'Pizza'},
        {id: uuid(), name: 'CocaCola'},
        {id: uuid(), name: 'Meat'},
        {id: uuid(), name: 'Box of water'}
    ]
}
const itemReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        case EDIT_ITEM:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item, ...action.payload
                        }
                    }
                    return item
                })
            }
        default: return state
    }
}

export default itemReducer