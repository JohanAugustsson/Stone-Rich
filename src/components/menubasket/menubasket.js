import React from "react";
import "./menubasket.css";
const menuBasket = () => {
    return (<div className="menubasket-container" onClick={()=>console.log('menubasket')}>
                  <p>Kundvagn</p>
                  <div className="menubasket-logo-container">
                    <img src='img/icons/baseline-shopping_cart-24px.svg' alt="logohere"/>
                  </div>
                <p>(0)</p>
          </div>)
        }
export default menuBasket;
