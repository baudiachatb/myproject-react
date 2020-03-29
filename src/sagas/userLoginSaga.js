import {takeEvery } from 'redux-saga/effects'
import {USER_LOGIN} from "../actions/actionsType";

export function* userLoginSaga() {
    yield console.log('saga')
}

export function* login() {
    yield console.log('lang nghe su kieenj owr day!')
}

export function* watchUserLogin() {
    yield takeEvery(USER_LOGIN, login)
}