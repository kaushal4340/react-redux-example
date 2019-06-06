import {FETCH_PRODUCTS, REMOVE_PRODUCT} from './types'
import fetch from 'isomorphic-fetch'
 
export function fetchProducts() {
    return dispatch => {
        fetch('http://localhost:3002/api/productlist')
        .then(response => {
            response.json().then(json => {
            // this.setState({ products: json.data })
            dispatch(setProducts(json.data))
            })
        })
    }
}

export function removeProduct (productId) {
    return dispatch => {
        fetch(`http://localhost:3002/api/removeProduct/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            response.json().then(json => {
                dispatch(productDeleted(json.data))
            })
        })
    }
}

function setProducts(products) {
    return ({
        type: FETCH_PRODUCTS,
        payload: products
    })
}

function productDeleted (products) {
    return ({
        type: REMOVE_PRODUCT,
        payload: products
    })
}
