import React, { Component } from 'react';
import './App.css';
//import productlist from "./mocks/products.json";
import Products from "./containers/products/products";
import Customer from "./containers/customer-page/customer";
import Menu from "./components/menu/menu";
import Admin from "./containers/admin/admin";
import Login from "./components/login/login";
import { connect } from 'react-redux';

class App extends Component {

  render() {

    let showPage;
    switch (this.props.currentPage) {
      case "basket" :
        showPage = (<Customer />)
        break;
      case "products" :
        showPage = ( <Products /> )
        break;
      case "admin" :
        showPage = ( <Admin/> )
        break;
      default:
        showPage =  ( <Products /> )
    }


    return (
      <div className="App">
        <Menu/>
        { showPage }
        {this.props.showLogin ? <Login />: "" }
      </div>
    );
  }
}


let mapStateToProps = (state) => {
  return {
    showLogin: state.user.showLogin,
    currentPage : state.currentPage
  }
}

export default connect(mapStateToProps)(App);
