import React, {Component}from "react";
import "./products.css";
import Showproducts from "../../components/showproducts/showproducts";
// import productlist from "./mocks/products.json";

const products = () =>{

  return(<div className="component products-container"><h1>Productspage-container</h1><Showproducts/></div>);

}
export default products;
