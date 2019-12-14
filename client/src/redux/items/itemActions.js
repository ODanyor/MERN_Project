import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './itemTypes'

export const getItems = () => {
    return {
        type: GET_ITEMS
    }
}

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        paylaod: item
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        paylaod: id
    }
}