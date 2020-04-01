import actionTypes from "./actionsType";

const loginUser = (user) => {
    return {
        type: actionTypes.LOGIN_USER,
        user: user
    }
};

const loginUserSuccess = (user_sucess) => {
    return {
        type: actionTypes.LOGIN_USER_SUCESS,
        user_sucess: user_sucess
    }
};

const loginUserError = (user_error) => {
    return {
        type: actionTypes.LOGIN_USER_SUCESS,
        user_error: user_error
    }
};

export default {loginUser, loginUserSuccess, loginUserError};