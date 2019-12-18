import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, EDIT_ITEM, ITEMS_LOADING } from './itemTypes'
import axios from 'axios'
import { getErrors } from '../actions/errorActions'

export const getItems = () => dispatch => {
    dispatch(itemsLoading())
    axios.get('/api/items')
        .then(res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
                }
            )
        )
        .catch(err =>
            dispatch(getErrors(err.response.data, err.response.status))
          );
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
export const itemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}