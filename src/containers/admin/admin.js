import React, {Component} from "react";
import "./admin.css";


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


const admin = () =>{
  return(<div className="admin-container">
            <h1>Lager</h1>
              <div className='admin-button-container'>
                    <button className='admin-chosen-category'>Produkter på lager</button>
                    <button className=''>Lägg till produkt</button>
              </div>

              <div className='admin-products-container'>
                 <div className='admin-instore'>
                      <p>Produkter på lager</p>
                  </div>

                  <div className='admin-article-object'>
                      <div className='id-changeButton'>
                        <h3>id: 1</h3>
                        <p>Ändra</p>
                      </div>
                      <div className='img-info-instore-price-status'>
                            <div className='img-info-product-container'>
                              <div className='admin-product-img-container'>
                                <img src='img/stones/ametist.png' alt='product bild' title='ädelsten'/>
                              </div>
                              <div className='info-product'>
                                <p className='mini-header'>Produkt info</p>
                                <p>namn på sten</p>
                              </div>
                            </div>

                            <div className='antal-price'>
                              <div>
                                <p className='mini-header'>Antal på lager</p>
                                <p>1</p>
                              </div>
                              <div>
                                <p className='mini-header'>pris</p>
                                <p>19kr</p>
                              </div>
                            </div>

                            <div className='status'>
                              <p className='mini-header'>Status</p>
                              <p>Finns på lager</p>
                            </div>
                      </div>
                  </div>

                  <div className='admin-article-object'>
                      <div className='id-changeButton'>
                        <h3>id: 1</h3>
                        <p>Spara</p>
                      </div>
                      <div className='img-info-instore-price-status'>
                            <div className='img-info-product-container'>
                              <div className='admin-product-img-container'>
                                <img src='img/stones/ametist.png' alt='product bild' title='ädelsten'/>
                                <input onChange={(e)=>console.log(e.target.value)} type='text' value='img/stones/ametist.png'/>
                              </div>
                              <div className='info-product'>
                                <p className='mini-header'>Produkt info</p>
                                <textarea value='' onChange={(e)=>console.log(e.target.value)}>namn på sten</textarea>
                              </div>
                            </div>

                            <div className='antal-price'>
                              <div>
                                <p className='mini-header'>Antal på lager</p>
                                <input onChange={(e)=>console.log(e.target.value)} type='text' value='1'/>
                              </div>
                              <div>
                                <p className='mini-header'>pris</p>
                                <input onChange={(e)=>console.log(e.target.value)} type='text' value='19'/> <span>kr</span>
                              </div>
                            </div>

                            <div className='status'>
                              <p className='mini-header'>Status</p>
                              <select>
                                    <option onChange={(e)=>console.log(e.target.value)} value="finns på lager">finns på lager</option>
                                    <option onChange={(e)=>console.log(e.target.value)} value="slutsållt">Saab</option>
                              </select>
                            </div>
                      </div>
                  </div>

            </div>
        </div>);
}
export default admin;
