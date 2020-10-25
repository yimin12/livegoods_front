import React from "react"
import CityHeader from "../../components/Header"
import CurrentCity from "./CurrentCity";
import PopularCity from "./PopularCity";
import { connect } from "react-redux"
import * as cityActions from "../../actions/city"
import { bindActionCreators } from "redux";

/**
 * init th location first
 */

class City extends React.Component{

    onCityNameHandler = (cityName) =>{
        this.props.cityActions.updateCity({
            cityName:cityName
        })
        // return to previous page
        window.history.back(-1);
        // need to store the use's choice for future analysis
        localStorage.setItem("city", cityName);
    }

    render() {
        return(
            <div>
                <CityHeader title="Location"/>
                <CurrentCity city={this.props.city.cityName}/>
                <PopularCity cityNameHandler={ this.onCityNameHandler }/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        city:state.city
    }
}

function mapDispatchToProps(dispatch){
    return{
        cityActions:bindActionCreators(cityActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)