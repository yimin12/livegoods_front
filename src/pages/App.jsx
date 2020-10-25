import React from "react"
import { connect } from "react-redux"
import * as cityActions from "../actions/city"
import { bindActionCreators } from "redux"


class App extends React.Component{

    /**
     * init the location by using redux
     * @returns {*}
     */

    componentDidMount() {
        const city = localStorage.getItem("city"); // return the last location you have login
        // Boston
        this.props.cityActions.initCity({
            cityName:city||"Boston"
        })
    }

    render() {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return{
        city:state.city
    }
}

function mapDispatchToProps (dispatch){
    return {
        cityActions:bindActionCreators(cityActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
