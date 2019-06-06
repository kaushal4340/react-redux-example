import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.css'

import configureStore from './client/store/configureStore'
import { Provider } from 'react-redux'

// keep the store configuration separately to keep this clean
const store = configureStore()

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
