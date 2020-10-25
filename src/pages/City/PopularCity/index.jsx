import React from 'react';
import "./style.less"

export default class PopularCity extends React.Component {

    clickHandler(cityName) {
        this.props.cityNameHandler(cityName);
    }

    render() {
        return (
            <div className="city-list-container">
                <h3>Popular City Recommendations</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick={this.clickHandler.bind(this, 'Washington')}>Washington</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this, 'Franklin')}>Franklin</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this, 'New York')}>New York</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this, 'Los Angeles')}>Los Angeles</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this, 'Chicago')}>Chicago</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this, 'Houston')}>Houston</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this, 'Phoenix')}>Phoenix</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this, 'Philadelphia')}>Philadelphia</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this, 'San Antonio')}>San Antonio</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this, 'San Diego')}>San Diego</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this, 'Dallas')}>Dallas</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this, 'Seattle')}>Seattle</span>
                    </li>
                </ul>
            </div>
        )
    }
}