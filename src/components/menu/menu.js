import React from "react";
import "./menu.css";
import MenuBasket from "../menubasket/menubasket";

const menu = () => {
    return (<div className="menu-container">

                <img src='img/stone-rich-logo.png' alt="StoneRich-Img"/>
                <div className='menubasket-adminlogin-holder'>
                  <MenuBasket onClick={()=>console.log('menubasket')}/>
                  <p>|</p>
                  <p className='adminlogin' onClick={()=>console.log('login admin')}>Logga in</p>
                </div>
            </div>)
}
export default menu;
