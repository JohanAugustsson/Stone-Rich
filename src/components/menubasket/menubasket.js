import React from "react";
import "./menubasket.css";
const menuBasket = (props) => {

    return (<div className="menubasket-container">
                  <p>Kundvagn</p>
                  <div className="menubasket-logo-container">
                    <img src='img/icons/baseline-shopping_cart-24px.svg' alt="logohere"/>
                  </div>
                <p>({props.numberInBasket})</p>
          </div>)
        }
export default menuBasket;
