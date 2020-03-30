import {LOGIN_USER_GOOGLE, LOGIN_USER_GOOGLE_ERROR, LOGIN_USER_GOOGLE_SUCCESS} from "./actionsType";

const loginUserDetailGoole = (userDetailGoole) => {
    return {
        type: LOGIN_USER_GOOGLE,
        userDetailGoole: userDetailGoole
    }
};

const loginUserDetailGooleSuccess = (userDetailGoole_sucess) => {
    return {
        type: LOGIN_USER_GOOGLE_SUCCESS,
        userDetailGoole_sucess: userDetailGoole_sucess
    }
};

const loginUserDetailGooleError = (userDetailGoole_error) => {
    return {
        type: LOGIN_USER_GOOGLE_ERROR,
        userDetailGoole_error: userDetailGoole_error
    }
};

exports.loginUserDetailGoole = loginUserDetailGoole;
exports.loginUserDetailGooleSuccess = loginUserDetailGooleSuccess;
exports.loginUserDetailGooleError = loginUserDetailGooleError;