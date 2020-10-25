import React from "react"
import Star from "../../../../../components/Star";
import "./style.less"

export default class CommentItem extends React.Component{

    render() {
        // acquire the data
        const item = this.props.data
        return(
            <div className="comment-item">
                <h3 className="xxx">
                    <i className="icon-user"></i>
                    &nbsp;
                    {item.username}
                </h3>
                <Star star={item.star}/>
                <p>{item.comment}</p>
            </div>
        )
    }
}