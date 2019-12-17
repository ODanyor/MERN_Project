import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from './itemTypes'

export const getItems = () => {
    return {
        type: GET_ITEMS
    }
}
export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}
export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}
export const editItem = (id, name) => {
    return {
        type: EDIT_ITEM,
        payload: {
            id: id,
            name: name
        }
    }
}