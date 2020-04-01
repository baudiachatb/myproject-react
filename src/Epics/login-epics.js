import actionsType from "../actions/actionsType";
import {filter, switchMap, tap} from 'rxjs/operators';
import LoginState from "../entities/LoginState";
import {of} from "rxjs";

export const loginEpic = action$ => action$.pipe(
    filter(action => action.type === actionsType.LOGIN_USER),
    tap(data => {
        console.log(data);
    }),
    switchMap(data => {
        const statelogin = LoginState;
        statelogin.authorization = true;
        return of({
            type: actionsType.LOGIN_USER_SUCESS,
            user_sucess: {a:1}
        })
    })
);

export const loginSucessEpic = action$ => action$.pipe(
    filter(action => action.type === actionsType.LOGIN_USER_SUCESS),
    tap(data => {
        console.log(data);
    }),
    switchMap(data => {
        const statelogin = LoginState;
        statelogin.authorization = true;
        return of({
            type: null,
            user_error: statelogin
        })
    })
);