import React from 'react';
import logo from '../logo.svg';
import './App.css';
import AdapterContainer from "../containers/Adapter";
import {connect} from "react-redux";

function App(props) {
    return (
        <div className="App">
            <AdapterContainer>
                Hello World!
                <p>
                {
                    // props.user.id
                }
            </p>
                <p>
                    {
                        // props.user.authorization.toString()
                    }
                </p>
            </AdapterContainer>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        user: state.applicationUser
    }
}

const App1 = connect(mapStateToProps)(App)
export default App1;
