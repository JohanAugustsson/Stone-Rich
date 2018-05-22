import React, {Component} from "react";
import "./admin.css";
import 'font-awesome/css/font-awesome.min.css';


import productlist from "../../mocks/products.json"; // endast till testning ska byttas till state props
console.log(productlist);


var changeId = '';

function updateChangeId(id) {
  changeId=id;
}

function getAllProducts(productlist, qurrentId) {
  let list = productlist;
  let chosenProducts = list.map(obj=>{
    if(obj.id !== changeId){
      return (<div key={obj.id} className='admin-article-object'>
            <div className='change-content'>
                <h3>id: {obj.id}</h3>
                <p id='1' onClick={()=>updateChangeId(obj.id)}><i className="far fa-edit"></i> Ändra</p>
            </div>
            <div className='main-content'>
                <div className='img-name-instore'>
                    <div className='img-container'>
                      <img src='img/stones/hjärta.jpg' alt='product bild' title='ädelsten'/>
                    </div>
                    <div>
                      <p className='miniHeader'>Produkt info</p>
                      <p>hart</p>
                      <p className='isInStore'>Finns i lager</p>
                    </div>
                </div>
                <div className='admin-amount'>
                    <p className='miniHeader'>Antal på lager</p>
                    <p>2</p>
                </div>
                <div className='admin-price'>
                  <p className='miniHeader'>Pris</p>
                  <p>25 kr</p>
                </div>
            </div>
        </div>);
    }else {
      return (  <div className='admin-article-object'>
              <div className='change-content'>
                  <h3>id: 1</h3>
                  <div className='save-content'>
                    <p>&times; Ta bort</p>
                    <p><i className="far fa-edit"></i> Spara</p>
                  </div>
              </div>
              <div className='main-content'>
                  <div className='img-name-instore'>
                      <div className='img-container'>
                        <img src='img/stones/hjärta.jpg' alt='product bild' title='ädelsten'/>
                      </div>
                      <div>
                        <p className='miniHeader'>Produkt info</p>
                        <textarea onChange={(e)=>console.log(e.target)} name="name" rows="8" cols="80"></textarea>
                        <p className='isInStore'>Finns i lager</p>
                      </div>
                  </div>
                  <div className='admin-amount'>
                      <p className='miniHeader'>Antal på lager</p>
                      <div className='admin-amount-update'>
                        <button onClick={()=>console.log('minus knapp')}>-</button>
                        <input onChange={(e)=>console.log(e.target)} type="text" name="" value="1"/>
                        <button onClick={()=>console.log('plus knapp')}>+</button>
                      </div>
                  </div>
                  <div className='admin-price'>
                    <p className='miniHeader'>Pris</p>
                    <label><input onChange={(e)=>console.log(e.target)} type="text" name="" value="12"/>kr</label>
                  </div>
              </div>
          </div>);
    }


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
                        <div className='change-content'>
                            <h3>id: 1</h3>
                            <p id='1' onClick={()=>console.log('ändra')}><i className="far fa-edit"></i> Ändra</p>
                        </div>
                        <div className='main-content'>
                            <div className='img-name-instore'>
                                <div className='img-container'>
                                  <img src='img/stones/hjärta.jpg' alt='product bild' title='ädelsten'/>
                                </div>
                                <div>
                                  <p className='miniHeader'>Produkt info</p>
                                  <p>hart</p>
                                  <p className='isInStore'>Finns i lager</p>
                                </div>
                            </div>
                            <div className='admin-amount'>
                                <p className='miniHeader'>Antal på lager</p>
                                <p>2</p>
                            </div>
                            <div className='admin-price'>
                              <p className='miniHeader'>Pris</p>
                              <p>25 kr</p>
                            </div>
                        </div>
                    </div>

                  <div className='admin-article-object'>
                          <div className='change-content'>
                              <h3>id: 1</h3>
                              <div className='save-content'>
                                <p>&times; Ta bort</p>
                                <p><i className="far fa-edit"></i> Spara</p>
                              </div>
                          </div>
                          <div className='main-content'>
                              <div className='img-name-instore'>
                                  <div className='img-container'>
                                    <img src='img/stones/hjärta.jpg' alt='product bild' title='ädelsten'/>
                                  </div>
                                  <div>
                                    <p className='miniHeader'>Produkt info</p>
                                    <textarea onChange={(e)=>console.log(e.target)} name="name" rows="8" cols="80"></textarea>
                                    <p className='isInStore'>Finns i lager</p>
                                  </div>
                              </div>
                              <div className='admin-amount'>
                                  <p className='miniHeader'>Antal på lager</p>
                                  <div className='admin-amount-update'>
                                    <button onClick={()=>console.log('minus knapp')}>-</button>
                                    <input onChange={(e)=>console.log(e.target)} type="text" name="" value="1"/>
                                    <button onClick={()=>console.log('plus knapp')}>+</button>
                                  </div>
                              </div>
                              <div className='admin-price'>
                                <p className='miniHeader'>Pris</p>
                                <label><input onChange={(e)=>console.log(e.target)} type="text" name="" value="12"/>kr</label>
                              </div>
                          </div>
                      </div>

            </div>
        </div>);
}
export default admin;
