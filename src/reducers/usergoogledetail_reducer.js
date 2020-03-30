import {LOGIN_USER} from "../actions/actionsType";
import ApplicationUser from "../entities/ApplicationUser";

/**
 * Create By BauNV on 21/03/2020
 */
const initialState = ApplicationUser;


export default (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    if(action.type === LOGIN_USER){
        return action.payload;
    }
    return state;
}