import App from "../components/App";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        userLogin: state.userReducer
    }
}

const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;