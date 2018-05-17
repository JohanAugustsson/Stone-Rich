import React, {Component} from "react";
import "./menu.css";
import MenuBasket from "../menubasket/menubasket";
const menu = () => {
    return (<div className="component menu-container">
        <div>
            <h1>Menu-Container</h1>

        </div>
        <div>
            <div><img alt="StoneRich-Img"/></div>
            <div><MenuBasket/></div>
            <div><p>Logga in</p></div>
        </div>
    </div>)
}
export default menu;
