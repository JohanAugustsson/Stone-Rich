import React, {Component} from "react";
import "./customer.css";
import {connect} from "react-redux";
import {addToBasket} from '../../actions/actions.js';
import {removeFromBasket} from "../../actions/actions";
import {removeFromNumberInstore} from "../../actions/actions.js";
import {addBackToNumberInStore} from "../../actions/actions";
import {emptyBasket} from "../../actions/actions";
import HistoryContainer from "../../components/history/history";

class customer extends Component {

    componentDidMount() {}
    getTotalProductPrice = (nb, price) => {
        let total = 0;
        total = nb * price;
        return total;
    }

    getTotalPrice = (productList, basket) => {
        let total = 0;
        for (let i = 0; i < productList.length; i++) {
            for (let j = 0; j < basket.length; j++) {
                if (productList[i].id === basket[j].id) {
                    total += productList[i].price * basket[j].numberInBasket;
                }
            }
        }
        return total;
    }

    isProductsInStore = (productList, id) => {
        let isInStore = true;
        for (let i = 0; i < productList.length; i++) {

            if (productList[i].id === id) {
                if (!productList[i].numberinstore > 0) {
                    isInStore = false;
                }
            }
        }
        return isInStore;
    }

    handleClickBasket = (id, products, add) => {
        if (add) {
            if (this.isProductsInStore(products, id)) {
                let actionAddBasket = addToBasket(1, id);
                let actionInStoreDecrease = removeFromNumberInstore(1, id);
                this.props.dispatch(actionAddBasket);
                this.props.dispatch(actionInStoreDecrease);
            }
        } else {
            let actionDecreaseBasket = removeFromBasket(1, id);
            let actionInStoreAdd = addBackToNumberInStore(1, id)
            this.props.dispatch(actionDecreaseBasket);
            this.props.dispatch(actionInStoreAdd);
        }
    }

    handleClickEmptyYourBasket = () =>{
      let basket = this.props.basket;

      basket.forEach( product => { // lägger tillbaka alla till storen
        let action = addBackToNumberInStore(product.numberInBasket, product.id)
        this.props.dispatch(action);
      })

      let actionEmpty = emptyBasket();
      this.props.dispatch(actionEmpty);
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
                    <button onClick={() => this.handleClickBasket(product.id, this.props.productlist, false)} disabled={!product.numberInBasket}>-</button>
                    <input type="text" onChange={() => console.log("")} name="" value={product.numberInBasket} placeholder='1'/>
                    <button onClick={() => this.handleClickBasket(product.id, this.props.productlist, true)} disabled={!productInfo.numberinstore}>+</button>
                </div>
                <p>{this.getTotalProductPrice(product.numberInBasket, productInfo.price)}</p>
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
                    <button onClick={() => this.handleClickEmptyYourBasket()}>Töm varukorg</button>
                    <button onClick={() => console.log('Gå till kassan')}>Gå till kassan</button>
                </div>

            </div>
            <HistoryContainer/>
        </div>);

    }
}
let mapStateToProps = state => {
    return {basket: state.basket.present , productlist: state.products.present}
}
export default connect(mapStateToProps)(customer);
