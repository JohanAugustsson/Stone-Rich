import React, {Component} from "react";
import propTypes from "prop-types";
import "./showproducts.css";
import 'font-awesome/css/font-awesome.min.css';


class showProducts extends Component {
    componentDidMount() {

    }

    makeProductUl = (products) => {
      const newProductsList =  products.map( product => {
        return (
          <li key={product.id}>
            <div>
              <img src={product.img} alt ="produkt bild" titel="ädelsten" />
            </div>
            <div>
              {product.name}
            </div>
            <div>
              <span>{ product.price }kr</span>
              <button onClick={ () => console.log("köp för fn :)" )}>Köp <i className="fa fa-shopping-cart" aria-hidden="true"></i>  </button>
            </div>
          </li>
        )
      })

      return (<ul> { newProductsList } </ul>)
    }

    render() {
        const products = this.props.productList;
        let productList = this.makeProductUl(products);


        return (
          <div className="component showproducts-container">
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
