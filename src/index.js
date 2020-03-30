import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import allReducer from "./reducers";
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import rootsaga from "./sagas/rootsaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducer, applyMiddleware(sagaMiddleware));
ReactDOM.render(
    <Provider store={store}>
        <App1/>
    </Provider>,
    document.getElementById('root')
);
sagaMiddleware.run(rootsaga)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
