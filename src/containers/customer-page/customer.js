import React, {Component} from "react";
import "./customer.css";
import {connect} from "react-redux";

class customer extends Component {

    componentDidMount() {}
    getTotalProductPrice = (nb,price) =>{
      let total = 0;
      total = nb*price;
      return total;
    }

    getTotalPrice = (productList,basket) =>{
      let total = 0;
      for(let i = 0; i < productList.length; i++){
        for(let j = 0; j < basket.length; j++){
          if(productList[i].id === basket[j].id){
            total += productList[i].price * basket[j].numberInBasket;
          }
        }
      }
      return total;
    }

    getChosenProducts = (productList, basket) => {
        let basketList = basket.map(product => {
            let productInfo = productList.filter(item => product.id === item.id);

            productInfo = productInfo[0];

            return (<div key={product.id} className='chosen-article-object'>
                <div className='img-name-instore'>
                    <div className='product-img-container'>
                        <img src={productInfo.img} alt='product bild' title='ädelsten'/>
                    </div>
                    <div>
                        <p>{productInfo.name}</p>
                        <p className='isInStore'>Finns i lager</p>
                    </div>
                </div>
                <div className='amount-minus-plus'>
                    <button onClick={() => console.log('minus knapp')}>-</button>
                    <input type="text" onChange={() => console.log("")} name="" value={product.numberInBasket} placeholder='1'/>
                    <button onClick={() => console.log('plus knapp')}>+</button>
                </div>
                <p>{this.getTotalProductPrice(product.numberInBasket,productInfo.price)}</p>
            </div>)
        });
        return basketList
    }

    render() {
        let chosenProducts = this.getChosenProducts(this.props.productlist, this.props.basket);
        let totalPrice = this.getTotalPrice(this.props.productlist, this.props.basket);

        return (<div className="customer-container">
            <h1>Din Varukorg</h1>
            <div className='chosen-products-container'>
                <div className='product-number-sum'>
                    <p>Produkt</p>
                    <span>
                        <p>Antal</p>
                        <p>Summa</p>
                    </span>
                </div>

                {chosenProducts}

                <div className='totalsum'>
                    <h3>Total summan:
                        <span>{totalPrice}</span>
                    </h3>
                </div>
                <div className='pay-or-emty-basket'>
                    <button onClick={() => console.log('Töm varukorg')}>Töm varukorg</button>
                    <button onClick={() => console.log('Gå till kassan')}>Gå till kassan</button>
                </div>

            </div>
        </div>);
    }
}
let mapStateToProps = state => {
    return {basket: state.basket, productlist: state.products}
}
export default connect(mapStateToProps)(customer);
