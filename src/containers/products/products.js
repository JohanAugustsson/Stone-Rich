import React, {Component} from "react";
import "./products.css";
import Showproducts from "../../components/showproducts/showproducts";
import productlist from "../../mocks/products.json";

const products = () => {

    return (
      <div className="component products-container">
        <Showproducts productList={productlist}/>
      </div>
    );

}
export default products;
