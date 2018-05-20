import React, {Component} from "react";
import propTypes from "prop-types";
import "./showproducts.css";


class showProducts extends Component {
    componentDidMount() {

    }

    makeProductUl = (products) => {
      const newProductsList =  products.map( product => {
        return <li key={product.id}>{product.name}</li>
      })

      return (<ul> { newProductsList } </ul>)
    }

    render() {
        const products = this.props.productList;
        let productList = this.makeProductUl(products);


        return (
          <div className="component showproducts-container">
            <div>
              <h1>Product-List-Component</h1>
            </div>
            <div className="wrapper-products">
              {productList}
            </div>
          </div>
        );
    };
};

// Defining proptypes for this component
showProducts.propTypes = {
    productList: propTypes.array
}
export default showProducts;
