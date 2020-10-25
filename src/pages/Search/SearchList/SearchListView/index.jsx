import React from "react"
import Item from "./Item"
import "./style.less"

export default class SearchListView extends React.Component{

    /**
     * The data will be updated
     *      key: must not use index as unique index
     */
    render() {
        const data = this.props.data;
        return (
            <div className="list-container">
                {
                    data.map((element,index) => {
                        return <Item data={ element } key={index}/>
                    })
                }
            </div>
        )
    }
}