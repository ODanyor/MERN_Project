import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './itemTypes'
import uuid from 'uuid'

const initialState = {
    items: [
        {id: uuid(), name: "Chocolate"},
        {id: uuid(), name: "Milk"},
        {id: uuid(), name: "Bread"},
        {id: uuid(), name: "Meat"},
        {id: uuid(), name: "Cheese"},
        {id: uuid(), name: "Snacks"},
        {id: uuid(), name: "Eggs"}
    ]
}

const itemReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state // One object (items)
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items] // ...state.items is sepporating items in state
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}

export default itemReducer