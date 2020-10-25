import React from "react";
import { NavLink } from "react-router-dom";
import "./style.less"

export default class FootNav extends React.Component{
    render() {
        return(
            <div className="nav-footer">
                <ul className="clear-fix">
                    <li>
                        <NavLink exact to="/">
                            <i className="iconfont icon-home"></i>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">
                            <i className="iconfont icon-shop"></i>
                            Service
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">
                            <i className="iconfont icon-trophy"></i>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/mime">
                            <i className="iconfont icon-team"></i>
                            Mime
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}