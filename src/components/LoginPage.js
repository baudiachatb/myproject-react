import React, {Component} from "react";


class LoginPage extends Component {
    loginAction = () => {
        return this.props.login(
            {
                id: 'test',
                userName: 'test1',
                token: 'bearer abcdxyz',
                authorization: true
            }
        )
    };

    render() {
        return (
            <div className="b-loginpage">
                <p>
                    login page!
                </p>
                <p>
                    <button onClick={this.loginAction}>
                        login
                    </button>
                </p>
            </div>
        );
    }

}

export default LoginPage;