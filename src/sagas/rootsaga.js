import { all } from 'redux-saga/effects';
import {getLogin, userLoginSaga, watchUserLogin} from "./userLoginSaga";

export default function* () {
yield all([
    userLoginSaga(),
    watchUserLogin(),
    getLogin()
])
}