import * as ActionTypes from './actionTypes'

export const saveResult = value => {
    return {
        type: ActionTypes.STORE_RESULT,
        value
    };
}

export const storeResult = (value) => {
    //getState - optional for accessing state
    return (dispatch, getState) => {
        setTimeout(() => {
            // get some old state
            //const oldCounter = getState().ctr.counter;
            dispatch(saveResult(value))
        }, 2000)
    }
}

export const deleteResult = (value) => {

    return {
        type: ActionTypes.DELETE_RESULT,
        value
    };
}