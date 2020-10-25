import React from "react"
import "./style.less"

export default class Tabs extends React.Component{

    constructor(){
        super();
        this.state = {
            currentIndex:0
        }
    }

    /**
     * The content is not fixed, we need gain the constructor of div
     *      params: <div></div>
     * <tabs>
     *     <tab tabname="type 1">
     *         <div></div>
     *     </tab>
     *     <tab tabname="type 2">
     *         <div></div>
     *     </tab>
     * </tabs>
     *
     * ways to get the constructor : props.children
     * <div>title</div>
     * <div>content</div>
     */

    check_title_index(index){
        // 0 1
        return index === this.state.currentIndex ? "Tab_title active" : "Tab_title"
    }

    check_item_index(index){
        return index === this.state.currentIndex ? "show" : "hide"
    }

    tabHandler(index) {
        this.setState({
            currentIndex:index
        })
    }

    render() {
        return (
            <div>
                <div className="Tab_title_wrap">
                    {
                        React.Children.map(this.props.children, (element, index) => {
                            return (
                                <div className={this.check_title_index(index) } onClick={ this.tabHandler.bind(this,index) }>
                                    {element.props.tabname}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="Tab_item_wrap">
                    {
                        React.Children.map(this.props.children, (element, index) => {
                            return (
                                <div className={ this.check_item_index(index) }>{element.props.children}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}