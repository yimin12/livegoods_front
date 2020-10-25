import React from "react";
import "./style.less"

export default class Header extends React.Component{

    clickBackHandler(){
        /**
         * three ways to return to the previous page
         *    window.history.back(-1);
         *    this.props.history.push("/home");
         *    this.props.history.replace("/home");
         */
        window.history.back(-1);

    }

    render() {
        return(
            <div id="common-header">
                <span className="back-icon" onClick={ this.clickBackHandler }>
                    <i className="icon-chevron-left"/>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}