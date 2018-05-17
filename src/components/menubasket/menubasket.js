import React, {Component} from "react";
import "./menubasket.css";
const menuBasket = () => {
    return (<div className="component menubasket-container">
        <div>
        <h1>Menubasket-Component</h1>
    </div>
    <div>
        <div>
            <p>Kundvagn</p>
        </div>
        <div className="menubasket-logo-container"><img alt="logohere"/></div>
        <div>
            <p>(0)</p>
        </div>
    </div>
</div>)
}
export default menuBasket;
