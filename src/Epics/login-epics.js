import actionsType from "../actions/actionsType";
import {filter, switchMap, take, tap} from 'rxjs/operators';
import LoginState from "../entities/LoginState";
import {of} from "rxjs";

export const loginEpic = action$ => action$.pipe(
    filter(action => action.type === actionsType.LOGIN_USER),
    take(1),
    tap(data => {
        console.log(data);
    }),
    switchMap(data => {
        const statelogin = LoginState;
        statelogin.authorization = true;
        return of({
            type: actionsType.LOGIN_USER_SUCESS,
            user_sucess: {
                authorization: true
            }
        })
    })
);