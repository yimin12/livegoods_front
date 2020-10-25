import React from "react"
import { connect } from "react-redux"
import OrderView from "./OrderView";
import UserView from "./UserView";
import ShopCarHeader from "../../components/Header"
import api from "../../api"

class ShopCar extends React.Component{

    constructor() {
        super();
        this.state = {
            order:[]
        }
    }

    componentDidMount() {
        // whether it is login
        const userinfo = this.props.userinfo.name
        if(userinfo){
            // request
            api.order.orderData(userinfo)
                .then(res=>res.json())
                .then(data => {
                    this.setState({
                        order:data
                    })
                })
        } else {
            // redirect
            this.props.history.push("/login")
        }
    }
    render(){
        return(
            <div>
                <ShopCarHeader title="Shopping Cart"/>
                {/*grab the info from redux and display the userinfo in its sub-page*/}
                <UserView user={this.props.userinfo.name} city={this.props.city.cityName}/>
                {
                    this.state.order.length > 0 ?
                        <OrderView data={ this.state.order}/> : <div>Loading Data...</div>
                }
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        userinfo:state.userinfo,
        city:state.city
    }
}

export default connect(
    mapStateToProps
)(ShopCar)