import {FETCH_PRODUCTS, REMOVE_PRODUCT} from './types'

const initialState = {
    products: []
}

export default function reduce (state = initialState, action) {
    console.log('action = ', action)
    switch (action.type) {
        case FETCH_PRODUCTS:
            // We don't mutate the state. We create a copy with Object.assign().
            return Object.assign({}, state, {products: action.payload})
        case REMOVE_PRODUCT:
            return Object.assign({}, state, {products: action.payload})
        default:
            // We return the previous state in the default case. It's important to return the previous state for any unknown action.
            return state
    }
}