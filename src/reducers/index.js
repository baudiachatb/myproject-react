import ApplicationUser from "./user-reducer";
import { combineReducers} from "redux";

const allReducer = combineReducers({
    applicationUser : ApplicationUser
});

export default  allReducer;