import { GET_ERRORS, CLEAR_ERRORS } from '../items/itemTypes'

// RETURN ERRORS
export const getErrors = (msg, status, id=null) => {
    return {
        type: GET_ERRORS,
        payload: {msg, status, id}
    }
}

// CLEAR ERRORS
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}