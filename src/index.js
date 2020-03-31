import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import allReducer from "./reducers";
import {Provider} from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import {rootEpic} from "./Epics";
import AppContainer from "./containers/App-container";
const epicMiddleware = createEpicMiddleware();
const store = createStore(allReducer, applyMiddleware(epicMiddleware));
ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
);
epicMiddleware.run(rootEpic)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
