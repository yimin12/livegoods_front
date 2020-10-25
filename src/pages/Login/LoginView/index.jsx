import React from "react"
import "./style.less"

export default class LoginView extends React.Component{

    constructor(){
        super()
        this.state = {
            value:""
        }
    }

    userNameHandler(event){
        this.setState({
            value:event.target.value
        })
    }

    loginHandler(){
        this.props.onLoginHandler(this.state.value);
    }

    render(){
        return(
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input
                        placeholder="Enter phone number"
                        value={ this.state.username }
                        onChange={ this.userNameHandler.bind(this) }
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>Send</button>
                    <input type="text" placeholder="Enter verification Code" />
                </div>
                <button className="btn-login" onClick={ this.loginHandler.bind(this) }>Login</button>
            </div>
        )
    }
}