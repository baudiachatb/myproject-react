import { all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {userLoginSaga, watchUserLogin} from "./userLoginSaga";

export default function* () {
yield all([
    userLoginSaga(),
    watchUserLogin()
])
}