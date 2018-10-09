import * as Actions from '../actions'

const initialState = {
    counter: 0,
}

const reducer = ((state = initialState, { type, value }) => {
    switch (type) {
        case Actions.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }

        case Actions.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }

        case Actions.ADD:
            return {
                ...state,
                counter: state.counter + value
            }

        case Actions.SUBTRACT:
            return {
                ...state,
                counter: state.counter - value
            }
    }

    return state;
})


export default reducer;