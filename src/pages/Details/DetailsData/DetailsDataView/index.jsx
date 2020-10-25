import React from "react"
import Swiper from "../../../../components/Swiper";
import DetailsHeader from "../../../../components/Header"
import Tabs from "../../../../components/Tabs"
import CommentView from "../CommentView";
import StoreBuy from "../StoreBuy";
import "./style.less"

export default class DetailsDataView extends React.Component{
    render() {
        const data = this.props.data;
        const comments = this.props.comments;
        return (
            <div className="detail-info">
                <DetailsHeader title="Details" />
                <Swiper banners={data.imgs} />
                <Tabs>
                    <tab tabname="House Details">
                        <h3>{data.title}</h3>
                        <div className="box">
                            <ul>
                                <li>
                                    <p>Price:</p>
                                    <span>{data.price}/per month</span>
                                </li>
                                <li>
                                    <p>House Type:</p>
                                    <span>{data.info.type}/per month</span>
                                </li>
                                <li>
                                    <p>Area:</p>
                                    <span>{data.houseType}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="info">
                            <div className="info-list">
                                <p>Floor：{data.info.level}</p>
                                <p>Decoration：{data.info.style}</p>
                            </div>
                            <div className="info-list">
                                <p>Type：{data.info.type}</p>
                                <p>Face Direction：{data.info.orientation}</p>
                            </div>
                            <div className="info-list">
                                <p>Years：{data.info.years}</p>
                            </div>
                        </div>
                        <StoreBuy id={ this.props.id } history={this.props.history}/>
                    </tab>
                    <tab tabname="Comments">
                        <CommentView comments={comments}/>
                    </tab>
                </Tabs>
            </div>
        )
    }
}