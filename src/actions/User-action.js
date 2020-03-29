import {USER_LOGIN} from "./actionsType";

export default (user) => {
    return {
        type: USER_LOGIN,
        payload: user
    }
}