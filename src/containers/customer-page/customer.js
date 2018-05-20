import React from "react";
// import productlist from "../mocks/products.json";
import "./customer.css";
import productlist from "../../mocks/products.json"; // endast till testning ska byttas till state props

function getChosenProducts(productlist) {
  let list = productlist;
  let chosenProducts = list.map(obj=>{
    return (<div key={obj.id} className='chosen-article-object'>
              <div className='img-name-instore'>
                <div className='product-img-container'>
                  <img src={obj.img} alt='product bild' title='ädelsten'/>
                </div>
                <div>
                  <p>{obj.name}</p>
                  <p className='isInStore'>Finns i lager</p>
                </div>
              </div>
              <div className='amount-minus-plus'>
                  <button onClick={()=>console.log('minus knapp')}>-</button>
                  <input type="text" name="" value="" placeholder='1'/>
                  <button  onClick={()=>console.log('plus knapp')}>+</button>
                </div>
                <p>{obj.price}</p>
          </div>);
  });
  return chosenProducts;
}

const customer = () =>{
  let chosenProducts = getChosenProducts(productlist);
  console.log(chosenProducts);
  return(<div className="customer-container">
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
                      <h3>Total summan: <span>19kr</span> </h3>
                  </div>
                  <div className='pay-or-emty-basket'>
                      <button onClick={()=>console.log('Töm varukorg')}>Töm varukorg</button>
                      <button onClick={()=>console.log('Gå till kassan')}>Gå till kassan</button>
                  </div>

              </div>
        </div>);
}
export default customer;
