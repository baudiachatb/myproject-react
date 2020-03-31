import {ofType} from "redux-observable";
import actionsType from "../actions/actionsType";
import {map, mapTo} from 'rxjs/operators';
import ApplicationUser from "../entities/ApplicationUser";
import UserResource from "../resources/UserResource";

const userResource = new UserResource(ApplicationUser)
export const loginEpic = action$ => action$.pipe(
    ofType(actionsType.LOGIN_USER),
    map(action => action.type),
    mapTo(payload => {
        return {
            type: actionsType.LOGIN_USER_SUCESS,
            user_sucess: {
                authorization: true,
                token: null
            }
        }
    })
);