import React, { Component } from 'react';
import './App.css';
import productlist from "./mocks/products.json";
import Products from "./containers/products/products";
import Customer from "./containers/customer-page/customer";
import Menu from "./components/menu/menu";
import Admin from "./containers/admin/admin";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Menu/>
        <Products />
        <Customer/>
        <Admin/>
      </div>
    );
  }
}

export default App;
