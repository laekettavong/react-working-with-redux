import * as Actions from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    counter: 0,
}

const reducer = ((state = initialState, { type, value }) => {
    switch (type) {
        case Actions.INCREMENT:
            return updateObject(state, { counter: state.counter + 1 })

        case Actions.DECREMENT:
            return updateObject(state, { counter: state.counter - 1 })

        case Actions.ADD:
            return updateObject(state, { counter: state.counter + value })

        case Actions.SUBTRACT:
            return updateObject(state, { counter: state.counter - value })

        default:
            return state;
    }

})


export default reducer;