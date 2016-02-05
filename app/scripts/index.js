import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
require('../styles/main.scss');

/*
 *store
 * holds app state
 * allows access via get state
 * allows update via dispatch
 * registers listeners via subscribe
 * handles unregistering of listeners via subscribe
 * ONLY ONE STORE IN REDUX APPLICATION
 *
 * stores are created using reducers
 * option to specify inital state as second arg
 * createStore(todoApp, window.STATE_FROM_SERVER)
 * useful for matching state from server
 * */


let store = createStore(todoApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);