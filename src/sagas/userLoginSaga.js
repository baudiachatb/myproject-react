import {takeEvery } from 'redux-saga/effects'
import {USER_LOGIN} from "../actions/actionsType";
import UserResource from "../resources/UserResource";
import ApplicationUser from "../entities/ApplicationUser";

const userResource = new UserResource(ApplicationUser);
export function* userLoginSaga() {
    console.log('1*******************');
    yield userResource.getUserByUserName('testdemo4').then(res => {
        console.log(res);
    })
}

export function* getLogin(username, pass) {
    yield userResource.login('testdemo4', '1234').then(
        data => {
            console.log(data)
        }
    )
}

export function* login() {
    yield console.log('lang nghe su kieenj owr day!')
}

export function* watchUserLogin() {
    yield console.log('lang nghe su kieenj owr day!')
    // yield takeEvery(USER_LOGIN, login)
}