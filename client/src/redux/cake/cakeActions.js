import { BUY_CAKE, ADD_CAKE } from './cakeTypes'

export const buyCake = (number) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}
export const addCake = (number) => {
    return {
        type: ADD_CAKE,
        payload: number
    }
}