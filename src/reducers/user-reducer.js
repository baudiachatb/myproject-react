import actionTypes from "../actions/actionsType";
import LoginState from "../entities/LoginState";

/**
 * Create By BauNV on 21/03/2020
 */
const initialState = LoginState;


export default (state, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return action.user;
        case actionTypes.LOGIN_USER_SUCESS:
            return  action.user_sucess;
        default:
            return initialState;
    }
}