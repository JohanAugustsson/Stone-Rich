import React from "react";
import "./menu.css";
import MenuBasket from "../menubasket/menubasket";
import Login from "../login/login";
import { connect } from 'react-redux';
import { toggleLoginMenu , isAdmin, changePage } from '../../actions/actions.js'

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

  handleClickChangePage = (page) => {
    let action = changePage(page);
    this.props.dispatch(action);

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
                  <button className="btnMenu" onClick={ ()=> this.handleClickChangePage("products") }>Home</button>
                  {this.props.isAdmin ? <button className="btnMenu" onClick={ ()=> this.handleClickChangePage("admin") }>Admin</button>  : ""}
                  <div onClick={ ()=> this.handleClickChangePage("basket") }>
                    <MenuBasket numberInBasket={ count } />
                  </div>
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
