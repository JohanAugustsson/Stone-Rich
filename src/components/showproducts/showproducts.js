import React, {Component} from "react";
import propTypes from "prop-types";
import "./showproducts.css";
class showProducts extends Component {
    componentDidMount() {}

    render() {
        const products = [...this.props.productList];
        const productList = products.map(product => <li key={product.id}>{product.name}</li>)

        return (<div className="component showproducts-container">
            <div>
                <h1>Product-List-Component</h1>
            </div>
            <div>
                <ul>
                    {productList}
                </ul>
            </div>
        </div>)
    }
}

// Defining proptypes for this component
showProducts.propTypes = {
    productList: propTypes.array
}
export default showProducts;
