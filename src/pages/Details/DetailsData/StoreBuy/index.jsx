import React from "react"
import StoreBuyView from "./StoreBuyView";
import { connect } from "react-redux"
import { bindActionCreators} from "redux";
import * as collectActions from "../../../../actions/collect"
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

class StoreBuy extends React.Component{
    /**
     * Page for details -> saved and purchase's logic implementation -> save and purchase's view
     */

    constructor() {
        super();
        this.state={
            collected:false
        }
    }

    componentDidMount() {
        // items for saved
        this.setState({
            collected:this.isStore()
        })
    }

    isStore(){
        const id = this.props.id;
        const collects = this.props.collect;
        return collects.some((element) => {
            return element.id === id;
        })
    }

    storeHandler(){
        const username = this.props.userinfo.name;
        const goods_id = this.props.id;
        if(username){
            // true: already saved
            // false: not yet save
            if(this.isStore()){
                this.props.collectActions.cancelCollect({
                    id:goods_id
                })
                this.setState({
                    collected:false
                })
            } else {
                // implementation for save
                this.props.collectActions.setCollect({
                    id:goods_id
                })
                this.setState({
                    collected:true
                })
            }
        } else {
            // Login
            this.props.history.push("/login")
        }
    }

    buyHandler(){
        console.log("Already purchase")
    }

    render() {
        return(
            <div>
                <StoreBuyView
                    collected={this.state.collected}
                    onStoreHandler={this.storeHandler.bind(this)}
                    onBuyHandler={this.buyHandler.bind(this)}
                />
            </div>
        )
    }
}

function mapStateTopProps(state) {
    return {
        userinfo: state.userinfo,
        collect: state.collect
    }
}

function mapDispatchToProps(dispatch) {
    return {
        collectActions: bindActionCreators(collectActions, dispatch)
    }
}

export default connect(
    mapStateTopProps,
    mapDispatchToProps
)(StoreBuy)