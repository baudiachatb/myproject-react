import LoginAction from '../actions/User-action'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import LoginPage from "../components/LoginPage";

function mapDispathToProps(dispatch) {
    return {
        loginUser: bindActionCreators(LoginAction.loginUser, dispatch)
    }

}

const LoginPageContainer = connect(null, mapDispathToProps)(LoginPage);

export default LoginPageContainer;