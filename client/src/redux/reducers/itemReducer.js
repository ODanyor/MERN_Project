const uuid = require('uuid');

const initialState = {
    items: [
        {id: uuid(), name: "Milk"},
        {id: uuid(), name: "Milk"},
        {id: uuid(), name: "Milk"},
        {id: uuid(), name: "Milk"},
        {id: uuid(), name: "Milk"}
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case "GET_ITEMS":
            return {
                ...state
            }
        default:
            return state
    }
};