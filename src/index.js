import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducer from "./reducers/allReducer";
import AppContainer from "./containers/App-container";
import createSagaMiddleware from 'redux-saga'
import rootsaga from "./sagas/rootsaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducer, applyMiddleware(sagaMiddleware));
ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>

    , document.getElementById('root')
);
sagaMiddleware.run(rootsaga);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
