import React, { Component } from 'react';
import './App.css';
import productlist from "./mocks/products.json";
import Products from "./containers/products/products";
import Customer from "./containers/customer-page/customer";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Products />
        <Customer/>
      </div>
    );
  }
}

export default App;
