import React from "react"
import "./style.less"
export default class LoadMore extends React.Component{

    constructor() {
        super();
        this.load = React.createRef()
    }

    /**
     * monitoring the page rolling event
     */

    componentDidMount() {
        const _this = this;
        let timer = null;
        const winHeight = document.documentElement.clientHeight;
        window.onscroll = function (event) {
            // getBoundingClientRect: Object
            if(timer){
                clearTimeout(timer);
            }
            timer = setTimeout(function(){
                if(_this.load.current.getBoundingClientRect().top < winHeight){
                    _this.props.onLoadMore();
                }
            }, 100)
        }
    }

    componentWillUnmount() {
        window.onscroll = null;
    }

    render(){
        return(
            <div ref={this.load}>
                Downloading more
            </div>
        )
    }
}