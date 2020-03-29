import {combineReducers} from "redux";
import userReducer from "./User-reducer";


const allReducer = combineReducers({
    userReducer: userReducer
});


export default allReducer;