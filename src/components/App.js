import React from 'react';
import './App.css';
import AdapterContainer from "../containers/Adapter";
import {connect} from "react-redux";

function App(props) {
    return (
        <div className="App">
            <AdapterContainer>
                Hello world
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
