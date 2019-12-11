import { BUY_COFFE, ADD_COFFE } from './coffe_boxTypes'

const initialState = {
    numOfCoffe_boxes: 25
}

const coffeReducers = (state=initialState, action) => {
    switch(action.type) {
        case BUY_COFFE:
            return {
                ...state,
                numOfCoffe_boxes: state.numOfCoffe_boxes - action.payload
            }
        case ADD_COFFE:
            return {
                ...state,
                numOfCoffe_boxes: state.numOfCoffe_boxes + action.payload
            }
        default: return state
    }
}

export default coffeReducers