import React, {Component} from 'react';
import './App.css';
import LoginFilterContainer from "../containers/LoginFiter-container";

class App extends Component{
    render() {
        return (
            <div className="App">
                <LoginFilterContainer>
                    <p>
                        id:  {this.props.userLogin.id}
                    </p>
                    <p>
                        userame:  {this.props.userLogin.userName}
                    </p>
                    <p>
                        token:  {this.props.userLogin.token}
                    </p>
                    login success
                </LoginFilterContainer>
            </div>
        );
    }


}

export default App;
