import React, { Component } from 'react';
import './App.css';
import productlist from "./mocks/products.json";
import Products from "./containers/products/products";
import Customer from "./containers/customer-page/customer";
import Menubasket from "./components/menubasket/menubasket";
import Admin from "./containers/admin/admin";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Menubasket />
        <Products />
        <Customer/>
        <Admin/>
      </div>
    );
  }
}

export default App;
