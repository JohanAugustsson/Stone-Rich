import React, {Component} from "react";
import propTypes from "prop-types";
import "./showproducts.css";
import 'font-awesome/css/font-awesome.min.css';
import { connect } from 'react-redux';
import { addToBasket } from '../../actions/actions.js'

class showProducts extends Component {
    componentDidMount() {

    }

    handleClickAddToBasket = (id) => {
      let action = addToBasket(1,id);
      this.props.dispatch(action);
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
              <button onClick={ () => this.handleClickAddToBasket(product.id) }>Köp <i className="fa fa-shopping-cart" aria-hidden="true"></i>  </button>
            </div>
          </li>
        )
      })

      return (<ul> { newProductsList } </ul>)
    }

    render() {
        const products = this.props.products;
        let productList = "empty"
        if(products.length > 0)
          productList = this.makeProductUl(products);


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


let mapStateToProps = state => {
  return {
    products : state.products
  }
}

export default connect(mapStateToProps)(showProducts);
