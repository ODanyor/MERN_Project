            // THREE CORE CONCEPTS
const redux = require('redux');
const createStore = redux.createStore;
// 1) ACTIONS
const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
    return {
        type: "BUY_CAKE"
    }
}

// 2) PREVIOUS STATE
const initialState = {
    numOfCakes: 10
};

// 3) REDUCERS
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const store = createStore(reducer);
console.log(store.getState());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
console.log(store.getState());