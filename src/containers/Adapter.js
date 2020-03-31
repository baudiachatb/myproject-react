import React, {Component} from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import loginUser from "../actions/User-action";
import LoginPage from "../components/LoginPage";

class Adapter extends Component {
    setDis() {
        if (this.props.appUser["authorization"] === true) {
            return this.props.children;
        } else {
            return <LoginPage/>
        }
    };

    render() {
        return (
            <div className="apdapter">
                {
                    this.setDis()
                }
            </div>

        );
    }
}

function setStateToProp(state) {
    return {
        appUser: state.applicationUser
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({loginUser: loginUser}, dispatch)
}

const AdapterContainer = connect(setStateToProp, mapDispatchToProps)(Adapter);

export default AdapterContainer;