import * as Actions from '../actions'

const initialState = {
    results: []
}

const reducer = ((state = initialState, { type, value }) => {
    switch (type) {
        case Actions.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: value })
            }

        case Actions.DELETE_RESULT:

            return {
                ...state,
                results: state.results.filter(elem => elem.id !== value)
            }

        default:
            break;
    }

    return state;
})


export default reducer;