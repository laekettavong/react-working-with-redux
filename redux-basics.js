const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer (updates the state)
const rootReducer = (curState = initialState, { type, value }) => {
    if (type === 'INC_COUNTER') {
        return {
            ...curState,
            counter: curState.counter + 1
        }
    } else if (type === 'ADD_COUNTER') {
        return {
            ...curState,
            counter: curState.counter + value
        }
    }
    return curState;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('Subscription', store.getState())
});

// Dispatching an action
store.dispatch({ type: 'INC_COUNTER' }) //takes an action
store.dispatch({ type: 'ADD_COUNTER', value: 10 }) //takes an action
console.log(store.getState());

