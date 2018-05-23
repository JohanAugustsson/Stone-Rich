import React, {Component} from "react";
import "./admin.css";
import 'font-awesome/css/font-awesome.min.css';


import productlist from "../../mocks/products.json"; // endast till testning ska byttas till state props
console.log(productlist);

class admin extends Component {
  constructor(props) {
        super(props);

        this.state={
          currentPage:'allProducts',
          edit:false,
          editId:''
        }
  }

  changeProduct=(id)=>{
    this.setState({edit:true, editId:id});
  }

  getAllProducts=(allProducts, qurrentId='')=> {
    let list = allProducts;

    console.log(list);
    let chosenProducts = list.map(obj=>{
        return ((this.state.edit && this.state.editId===obj.id) ?
        <div key={obj.id} className='admin-article-object'>
                <div className='change-content'>
                    <h3>id: {obj.id}</h3>
                    <div className='save-content'>
                      <p className='admin-pointer-btn' onClick={()=>console.log('ta bort')}>&times; Ta bort</p>
                      <p className='admin-pointer-btn' onClick={()=>console.log('spara')}><i className="far fa-edit"></i> Spara</p>
                    </div>
                </div>
                <div className='main-content'>
                    <div className='img-name-instore mobile'>
                        <div className='changeUrl'>
                          <div className='img-container'>
                            <img src={(obj.img)? obj.img:'img/placeholder.png'} alt='product bild' title='ädelsten'/>
                          </div>
                          <input onChange={(e)=>console.log(e.target)} type="text" name="" value={obj.img}/>
                        </div>
                        <div className='textAreaContainer'>
                          <p className='miniHeader'>Produkt info</p>
                          <textarea onChange={(e)=>console.log(e.target)} value={obj.productinfo} name="name" rows="8" cols="80"></textarea>
                          {(obj.numberinstore>0) ? <p className='isInStore'>Finns i lager</p>:<p className='notInStore'>slutsåld</p>}
                        </div>
                    </div>
                    <div className='admin-amount'>
                        <p className='miniHeader'>Antal på lager</p>
                        <div className='admin-amount-update'>
                          <button onClick={()=>console.log('minus knapp')}>-</button>
                          <input onChange={(e)=>console.log(e.target)} type="text" name="" value={obj.numberinstore}/>
                          <button onClick={()=>console.log('plus knapp')}>+</button>
                        </div>
                    </div>
                    <div className='admin-price'>
                      <p className='miniHeader'>Pris</p>
                      <label><input onChange={(e)=>console.log(e.target)} type="text" name="" value={obj.price}/>kr</label>
                    </div>
                </div>
            </div>

          :<div key={obj.id} className='admin-article-object'>
              <div className='change-content'>
                  <h3>id: {obj.id}</h3>
                  <p className='admin-pointer-btn' onClick={()=>this.changeProduct(obj.id)}><i className="far fa-edit"></i> Ändra</p>
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

  updatePage=(page='allProducts')=>{
    this.setState({currentPage: page});
  }

  render(){

    let allProducts = productlist;
    let all = this.getAllProducts(allProducts);
    let qurrentPage;
    if (this.state.currentPage==='allProducts') {
      qurrentPage=all;
    }
    if(this.state.currentPage==='addProducts'){
      qurrentPage=(<div className='admin-article-object'>
              <div className='main-content add-products-main'>
                  <div className='img-name-instore mobile'>
                      <div className='changeUrl'>
                      <p className='miniHeader'>Bild URL</p>
                        <div className='img-container'>
                          <img src='img/stones/hjärta.jpg' alt='product bild' title='ädelsten'/>
                        </div>
                        <input onChange={(e)=>console.log(e.target)} type="text" name="" value="url"/>
                      </div>
                      <div className='textAreaContainer'>
                        <p className='miniHeader'>Produkt info</p>
                        <textarea onChange={(e)=>console.log(e.target)} name="name" rows="8" cols="80"></textarea>
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

              <div className='add-product-conatainer'>
                <button>Lägg till produkt</button>
              </div>
          </div>);
    }



    return (<div className="admin-container">
              {(this.state.currentPage==='allProducts')?<h1>Lager</h1>: <h1>Lägg till produkt</h1>}
                <div className='admin-button-container'>
                      <button onClick={()=>this.updatePage('allProducts')} className={(this.state.currentPage==='allProducts')?'admin-chosen-category': ''}>Produkter på lager</button>
                      <button onClick={()=>this.updatePage('addProducts')} className={(this.state.currentPage==='addProducts')?'admin-chosen-category': ''}>Lägg till produkt</button>
                </div>

                <div className='admin-products-container'>
                   <div className='admin-instore'>
                      {(this.state.currentPage==='allProducts')?<p>Produkter på lager</p>: <p>Lägg till produkt</p>}
                    </div>

                      {qurrentPage}

              </div>
          </div>);//return
  }// render
}// class admin


export default admin;
