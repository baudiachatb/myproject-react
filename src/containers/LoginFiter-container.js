import {connect} from "react-redux";
import LoginPageFilter from "../components/LoginFilter";


function mapStateToProps(state){
    return {
        loginUser: state.userReducer
    }
}

const LoginFilterContainer = connect(mapStateToProps)(LoginPageFilter);

export default LoginFilterContainer;