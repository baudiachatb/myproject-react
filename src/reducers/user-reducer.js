import {LOGIN_USER} from "../actions/actionsType";

/**
 * Create By BauNV on 21/03/2020
 */
const initialState = {
    id: null,
    userName: null,
    token: null,
    authorization: false
};
export default (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    if(action.type === LOGIN_USER){
        return action.payload;
    }
    return state;
}