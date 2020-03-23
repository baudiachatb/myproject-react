import {USER_LOGIN} from "../actions/actionsType";

const init = {
    id: null,
    userName: null,
    token: null,
    authorization: false
};

const userReducer = (state, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return action.payload;
        default:
            return init;
    }
};

export default userReducer;