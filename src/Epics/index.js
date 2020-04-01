import { combineEpics } from 'redux-observable';
import {loginEpic, loginSucessEpic} from "./login-epics";


export const rootEpic = combineEpics(
    loginEpic,
    loginSucessEpic
);