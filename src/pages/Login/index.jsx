import React from "react"
import LoginView from "./LoginView";
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import * as userInfoActions from "../../actions/userinfo"

class Login extends React.Component{

    loginHandler(user){
        /**
         * user is the token return by the backend server
         * Store the user's info in redux/localStorage
         */
        console.log(user)
        this.props.userInfoActions.loginUser({
            name:user
        })
        window.history.back(-1);
    }

    render() {
        return(
            <div>
                <LoginView onLoginHandler={ this.loginHandler.bind(this)}/>
            </div>
        )
    }
}
function mapStateToProps(state) {

    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch) {

    return {
        userInfoActions:bindActionCreators(userInfoActions, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)