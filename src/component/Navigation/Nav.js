import React from "react";
import './Nav.scss';
import { NavLink } from "react-router-dom";
function Nav() {


    return (
        <div className="Nav-container">
            <div className="logo">
                <div className="logo-name">duong.dev</div>
                <div className="logo-name-before">
                    <div className="logo-name-after">duong.dev</div>
                </div>
            </div>
            <ul className="menu">
                <NavLink className="menu-option" to="/" exact>Trang chủ</NavLink>
                <NavLink className="menu-option" to="/product">Sản phẩm</NavLink>
                <NavLink className="menu-option" to="/game">Minigame</NavLink>
            </ul>
            <div>user</div>
        </div>
    )
};

export default Nav;