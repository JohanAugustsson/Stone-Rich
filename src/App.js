import React, { Component } from 'react';
import './App.css';
import productlist from "./mocks/products.json";
import Products from "./containers/products/products"

class App extends Component {

  render() {
    return (
      <div className="App">
        <Products />
      </div>
    );
  }
}

export default App;
