import {LOGIN_USER} from "./actionsType";

const loginUser = (user) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
};

export default loginUser;