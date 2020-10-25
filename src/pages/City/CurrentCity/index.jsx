import React from "react";
import "./style.less"

export default class CurrentCity extends React.Component{
    render() {
        return(
            <div className="current-city">
                <h2>Current Location: {this.props.city }</h2>
            </div>
        )
    }
}