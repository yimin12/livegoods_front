import React from "react"
import api from "../../../api"
import DetailsDataView from "./DetailsDataView";

export default class DetailsData extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            datas:{},
            comments:[]
        }
    }

    componentDidMount() {
        const id = this.props.id;
        // details
        api.details.getDetailsData(id)
            .then(res => res.json())
            .then(data =>{
                this.setState({
                    datas:data
                })
            })
        // comments

        api.comment.getCommentData(id)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    comments: data.data
                })
            })
    }

    render() {
        return(
            <div>
                {
                    this.state.datas.imgs && this.state.comments ?
                        <DetailsDataView id={this.props.id} data={this.state.datas} comments={this.state.comments} history={this.props.history}/>
                        : <div>Requesting Data</div>
                }
            </div>
        )
    }
}