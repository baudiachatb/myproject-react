import React, {Component} from "react";


class LoginPage extends Component {
    render() {
        return (
            <div className="b-loginpage">
                <p>
                    login page!
                </p>
                <p>
                    <button onClick={() => {
                        this.props.login(
                            {
                                id: 'test',
                                userName: 'test1',
                                token: 'bearer abcdxyz',
                                authorization: true
                            }
                        )
                    }}>
                        login
                    </button>
                </p>
            </div>
        );
    }

}

export default LoginPage;