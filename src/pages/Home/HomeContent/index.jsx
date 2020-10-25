import React from "react";
import api from "../../../api"
import HomeContentView from "./HomeContentView";

export default class HomeContent extends React.Component{

    constructor() {
        super();
        this.state ={
            homeContent1:[],
            homeContent2:[]
        }
    }

    componentDidMount() {
        const city = this.props.city || localStorage.getItem("city") || "Boston";
        api.homeContent.homeContent1Data(city)
            .then(res => res.json())
            .then(data =>{
                this.setState({
                    homeContent1:data
                })
            })
        api.homeContent.homeContent2Data(city)
            .then(res => res.json())
            .then(data =>{
                this.setState({
                    homeContent2:data
                })
            })
    }

    render(){
        const { homeContent1, homeContent2} = this.state;
        return(
            <div>
                {
                    homeContent1.length > 0 ?
                        <HomeContentView data={homeContent1} title={'Recommendations'}/> : <div>Requesting Data</div>
                }
                {
                    homeContent2.length > 0 ?
                        <HomeContentView data={homeContent2} title={'Guess you like'}/> : <div>Requesting Data</div>
                }
            </div>
        )
    }
}