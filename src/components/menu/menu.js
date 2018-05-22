import React from "react";
import "./menu.css";
import MenuBasket from "../menubasket/menubasket";
import Login from "../login/login";
import { connect } from 'react-redux';
import { toggleLoginMenu , isAdmin } from '../../actions/actions.js'

class Menu extends React.Component {

  handleClickLogin = () => {
    let action = toggleLoginMenu();
    this.props.dispatch(action);
  }

  handleClickLogout = () => {
    let action = isAdmin(false)
    this.props.dispatch(action);
  }

  countProductInBasket = () => {
    let basket = this.props.basket;
    let count = 0;
    basket.forEach(item => count += item.numberInBasket)
    return count;
  }

  render(){
    let count = this.countProductInBasket();

    let btn;
    if(this.props.isAdmin){
      btn = (<p className='adminlogin' onClick={this.handleClickLogout}>Logga ut</p>)
    } else {
      btn = (<p className='adminlogin' onClick={this.handleClickLogin}>Logga in</p>)

    }

    return (<div className="menu-container">
                <img src='img/stone-rich-logo.png' alt="StoneRich-Img"/>
                <div className='menubasket-adminlogin-holder'>
                  <MenuBasket numberInBasket={ count } onClick={()=>console.log('menubasket')}/>
                  <p>|</p>
                  { btn }
                </div>
            </div>)
  }
}


let mapStateToProps = (state) => {
  return {
    basket : state.basket,
    isAdmin : state.user.isAdmin
  }
}

export default connect(mapStateToProps)(Menu);
