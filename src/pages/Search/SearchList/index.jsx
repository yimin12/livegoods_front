import React from "react"
import api from "../../../api"
import SearchListView from "./SearchListView";
import LoadMore from "../../../components/LoadMore";

export default class SearchList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            searchData: [],
            hasMore: false,
            page: 0
        }
    }

    componentDidMount() {
        // get the location
        // get the searching content
        const city = this.props.city || localStorage.getItem("city") || "Boston";
        const content = this.props.content;
        this.http(city, content, 0);
    }

    http(city, content, page){
        api.search.searchData(city, content, page)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    searchData: this.state.searchData.concat(data.data),
                    hasMore:data.hasMore,
                    page:this.state.page + 1
                })
            })
    }

    componentWillUpdate(prevProps, prevState) {
        // request again
        const city = this.props.city || localStorage.getItem("city") || "Boston";
        const content = this.props.content;
        console.log(prevProps.city);
        if(prevProps.content === content){
            return;
        }
        this.http(city, content, 0)
    }

    loadMoreHandler = () => {
        const city = this.props.city;
        const content = this.props.content;
        this.http(city,content,this.state.page);
    }

    render(){
        return(
            <div>
                {
                    this.state.searchData ?
                        <SearchListView data={this.state.searchData}/> : <div> Loading.....</div>
                }
                {
                    this.state.hasMore ?
                        <LoadMore onLoadMore={this.loadMoreHandler}/>
                        : <div>There is no more....</div>
                }
            </div>
        )
    }
}