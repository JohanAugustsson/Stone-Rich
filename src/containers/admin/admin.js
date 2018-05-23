import React, {Component} from "react";
import "./admin.css";
import 'font-awesome/css/font-awesome.min.css';


import productlist from "../../mocks/products.json"; // endast till testning ska byttas till state props
console.log(productlist);

class admin extends Component {
  constructor(props) {
        super(props);
  }

  changeProduct=(allProducts,id)=>{
    // let list = allProducts;
    // let chosenProducts= list.map(obj=>{
    //     return (<div className='admin-article-object'>
    //             <div className='change-content'>
    //                 <h3>id: {obj.id}</h3>
    //                 <div className='save-content'>
    //                   <p>&times; Ta bort</p>
    //                   <p><i className="far fa-edit"></i> Spara</p>
    //                 </div>
    //             </div>
    //             <div className='main-content'>
    //                 <div className='img-name-instore mobile'>
    //                     <div className='changeUrl'>
    //                       <div className='img-container'>
    //                         <img src='img/stones/hjärta.jpg' alt='product bild' title='ädelsten'/>
    //                       </div>
    //                       <input onChange={(e)=>console.log(e.target)} type="text" name="" value="url"/>
    //                     </div>
    //                     <div className='textAreaContainer'>
    //                       <p className='miniHeader'>Produkt info</p>
    //                       <textarea onChange={(e)=>console.log(e.target)} name="name" rows="8" cols="80"></textarea>
    //                       <p className='isInStore'>Finns i lager</p>
    //                     </div>
    //                 </div>
    //                 <div className='admin-amount'>
    //                     <p className='miniHeader'>Antal på lager</p>
    //                     <div className='admin-amount-update'>
    //                       <button onClick={()=>console.log('minus knapp')}>-</button>
    //                       <input onChange={(e)=>console.log(e.target)} type="text" name="" value="1"/>
    //                       <button onClick={()=>console.log('plus knapp')}>+</button>
    //                     </div>
    //                 </div>
    //                 <div className='admin-price'>
    //                   <p className='miniHeader'>Pris</p>
    //                   <label><input onChange={(e)=>console.log(e.target)} type="text" name="" value="12"/>kr</label>
    //                 </div>
    //             </div>
    //         </div>)
    //
    // });
    //
    // return chosenProducts;
    console.log(id);
  }

  getAllProducts=(allProducts, qurrentId='')=> {
    let list = allProducts;
    console.log(list);
    let chosenProducts = list.map(obj=>{
        return (<div key={obj.id} className='admin-article-object'>
              <div className='change-content'>
                  <h3>id: {obj.id}</h3>
                  <p onClick={()=>this.changeProduct(obj,obj.id)}><i className="far fa-edit"></i> Ändra</p>
              </div>
              <div className='main-content'>
                  <div className='img-name-instore'>
                      <div className='img-container'>
                        <img src={(obj.img)? obj.img:'img/placeholder.png'} alt='product bild' title='productbild'/>
                      </div>
                      <div>
                        <p className='miniHeader'>Produkt info</p>
                        <p>{obj.productinfo}</p>
                        {(obj.numberinstore>0) ? <p className='isInStore'>Finns i lager</p>:<p className='notInStore'>slutsåld</p>}

                      </div>
                  </div>
                  <div className='admin-amount'>
                      <p className='miniHeader'>Antal på lager</p>
                      <p>{obj.numberinstore}</p>
                  </div>
                  <div className='admin-price'>
                    <p className='miniHeader'>Pris</p>
                    <p>{obj.price} kr</p>
                  </div>
              </div>
          </div>);
    });
    return chosenProducts;
  }

  render(){
    let allProducts = productlist;
    let all = this.getAllProducts(allProducts);

    return (<div className="admin-container">
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
                                <div className='img-name-instore mobile'>
                                    <div className='changeUrl'>
                                      <div className='img-container'>
                                        <img src='img/stones/hjärta.jpg' alt='product bild' title='ädelsten'/>
                                      </div>
                                      <input onChange={(e)=>console.log(e.target)} type="text" name="" value="url"/>
                                    </div>
                                    <div className='textAreaContainer'>
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

                        {all}

              </div>
          </div>);//return
  }// render
}// class admin
// var changeId = '';

// function updateChangeId(id) {
//   changeId=id;
// }






// const adminObj = () =>{
//   return();
// }
export default admin;
