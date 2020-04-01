import actionTypes from "../actions/actionsType";
import LoginState from "../entities/LoginState";

/**
 * Create By BauNV on 21/03/2020
 */
const initialState = LoginState;


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            console.log(action);
            return action.user;
        case actionTypes.LOGIN_USER_SUCESS:
            console.log(action);
            return  action.user_sucess;
        default:
            console.log(state);
            return state;
    }
}