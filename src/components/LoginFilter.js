import React, {Component} from "react";
import LoginPageContainer from "../containers/LoginPage-container";


class LoginPageFilter extends Component {
    render() {
        console.log(this.props.loginUser.authorization);
        return (
            <div>
                {this.props.loginUser.authorization && this.props.children}
                {!this.props.loginUser.authorization && <LoginPageContainer>
                </LoginPageContainer>}
            </div>
        );
    }
}

export default LoginPageFilter;