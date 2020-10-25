import React from "react";
import Pagination from "./Pagination";
import SwipeableViews from 'react-swipeable-views';
import "./style.less"
import { autoPlay  } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class Swiper extends React.Component{


    constructor() {
        super();
        this.state={
            currentIndex:0
        }
    }

    handleChangeIndex = index =>{
        this.setState({
            currentIndex:index
        })
    }

    render() {
        const banners = this.props.banners;
        return(
            <div className="swiper">
                <AutoPlaySwipeableViews onChangeIndex={this.handleChangeIndex}>
                    {
                        banners.map((element, index) => {
                            return (
                                <div className="swiper-view" key={index}>
                                    <img src={ element } alt=""/>
                                </div>
                            )
                        })
                    }
                </AutoPlaySwipeableViews>
                <Pagination index={this.state.currentIndex} dots={banners.length} />
            </div>
        )
    }
}