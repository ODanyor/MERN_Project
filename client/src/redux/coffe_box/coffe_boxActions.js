import { BUY_COFFE, ADD_COFFE } from './coffe_boxTypes'

export const buyCoffe = (number = 1) => {
    return {
        type: BUY_COFFE,
        payload: number
    }
}
export const addCoffe = (number = 1) => {
    return {
        type: ADD_COFFE,
        payload: number
    }
}