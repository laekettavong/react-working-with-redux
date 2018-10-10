import * as ActionTypes from './actionTypes'

export const increment = () => {

    return {
        type: ActionTypes.INCREMENT
    };
}

export const decrement = () => {

    return {
        type: ActionTypes.DECREMENT
    };
}

export const add = (value) => {

    return {
        type: ActionTypes.ADD,
        value
    };
}

export const subtract = (value) => {

    return {
        type: ActionTypes.SUBTRACT,
        value
    };
}