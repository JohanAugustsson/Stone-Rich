import React from "react";
import "./menu.css";
import MenuBasket from "../menubasket/menubasket";
import Login from "../login/login";
import { connect } from 'react-redux';
import { toggleLoginMenu } from '../../actions/actions.js'

class Menu extends React.Component {

  handleClickLogin = () => {
    let action = toggleLoginMenu();
    this.props.dispatch(action);
  }

  render(){
    return (<div className="menu-container">
                <img src='img/stone-rich-logo.png' alt="StoneRich-Img"/>
                <div className='menubasket-adminlogin-holder'>
                  <MenuBasket onClick={()=>console.log('menubasket')}/>
                  <p>|</p>
                  <p className='adminlogin' onClick={this.handleClickLogin}>Logga in</p>
                </div>
            </div>)
  }
}


let mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(Menu);
