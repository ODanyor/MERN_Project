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
export const addItem = (item) => dispatch => {
    dispatch(itemsLoading())
    axios.post('/api/items', item)
        .then(res => {
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(getErrors(err.response.data, err.response.status))
        })
}
export const deleteItem = (id) => dispatch => {
    dispatch(itemsLoading())
    axios.delete(`/api/items/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        })
        .catch(err => {
            dispatch(getErrors(err.response.data, err.response.status))
        })
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