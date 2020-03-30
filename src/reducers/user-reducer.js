import {LOGIN_USER, LOGIN_USER_SUCESS} from "../actions/actionsType";
import ApplicationUser from "../entities/ApplicationUser";

/**
 * Create By BauNV on 21/03/2020
 */
const initialState = ApplicationUser;


export default (state, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return action.user;
        case LOGIN_USER_SUCESS:
            return  action.user_success;
        default:
            return initialState;
    }
}