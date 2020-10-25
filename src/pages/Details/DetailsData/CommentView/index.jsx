import React from "react"
import Item from "./Item";
import "./style.less"

export default class CommentView extends React.Component{

    render(){
        const data = this.props.comments;
        return(
            <div className="comment-list">
                {data.map((item, index) =>{
                    return <Item key={index} data={item}/>
                })}
            </div>
        )
    }
}