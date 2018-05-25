import React, {Component} from "react";
import "./admin.css";
import 'font-awesome/css/font-awesome.min.css';
import {connect} from "react-redux";
import {removeProduct} from '../../actions/actions.js';
import {addProduct, saveChangedProduct, undoProduct, redoProduct } from '../../actions/actions.js'


// import productlist from "../../mocks/products.json"; // endast till testning ska byttas till state props
// console.log(productlist);

class admin extends Component {
  constructor(props) {
        super(props);

        this.state={
          currentPage:'allProducts',
          edit:false,
          editId:'',
          addAproduct:{
            id: 100,
            name: '',
            img: '',
            numberinstore: 1,
            productinfo:'',
            price: ''
          }
        }
  }

  removeAdminProduct = (id)=>{
    this.props.dispatch(removeProduct(id));
  }


  switchToChange=(id)=>{
    this.setState({edit:true, editId:id});
  }


  componentDidUpdate(){
    // uppdataterar staten med produkt info när vi klickat på ändra
    let index = this.state.editId;
    let currentIndex = this.state.addAproduct.id

    if(index !== '' && index !== currentIndex ) {  // uppdaterar endast när vald produkt ändras
      let productList = this.props.products.present
      let productToEdit = productList[index];

        let editObj = {
          id: productToEdit.id,
          name: productToEdit.name,
          img:  productToEdit.img,
          numberinstore: productToEdit.numberinstore,
          productinfo: productToEdit.productinfo,
          price : productToEdit.price
        }

      this.setState({
        addAproduct : editObj
      })
    }
  }

  validateKeyPress = (e,type) => {
    let checkKey = e.keyCode;
    let limitMax = 58; //9
    let limitMin = 48; //0
    let keyReturn = 8; // radera knapp
    let keyDelete = 46; // delte knapp

    if( (checkKey >= limitMin && checkKey <= limitMax ) || (checkKey === keyReturn) || (checkKey === keyDelete) ){


    }else {
      e.preventDefault();
    }
  }

  addAdminProduct = (e, type) => {

    let obj = this.state.addAproduct;
    obj[type] = e.target.value;
    if(e.target.value  === ""){
      obj[type] = 0;
    }

    this.setState({
        addAproduct: obj
    })
  }

  submitToStore = (obj) =>{

    let d = new Date();
    let id = d.getTime();
    id  -= 1527158630000  //minskar till mer hanterbart nummer.. framtiden så hämtar vi ett id från tex firebase
    let newProduct = {
      id ,
      name : obj.name,
      img : obj.img,
      numberinstore : obj.numberinstore,
      productinfo : obj.productinfo,
      price : obj.price
    }

    let action = addProduct(newProduct);
    this.props.dispatch(action);
  }


  numberOfProducts = (nb) => {
    let number = Number(this.state.addAproduct.numberinstore);
      number+= nb
      if(number< 0)
      number = 0

      let obj = this.state.addAproduct;
      obj.numberinstore = number
      this.setState({addAproduct : obj})
  }

  saveProduct = () => {
    let obj = this.state.addAproduct;
    let action = saveChangedProduct(obj)
    this.props.dispatch(action);
    this.setState({edit: false})
  }


  getAllProducts=(allProducts, qurrentId='')=> {
    let list = allProducts;



    let chosenProducts = list.map(obj=>{

        return ((this.state.edit && this.state.editId===obj.id) ?
        <div key={obj.id} className='admin-article-object'>
                <div className='change-content'>
                    <h3>id: {obj.id}</h3>
                    <div className='save-content'>
                      <p className='admin-pointer-btn' onClick={()=>this.removeAdminProduct(obj.id)}>&times; Ta bort</p>
                      <p className='admin-pointer-btn' onClick={()=>this.saveProduct()}><i className="far fa-edit"></i> Spara</p>
                    </div>
                </div>
                <div className='main-content'>
                    <div className='img-name-instore mobile'>
                        <div className='changeUrl'>
                          <div className='img-container'>
                            <img src={(this.state.addAproduct.img) ? this.state.addAproduct.img :'img/placeholder.png'} alt='product bild' title='ädelsten'/>
                          </div>
                          <input onChange={(e)=> this.addAdminProduct(e,"img")} type="text" name="" value={this.state.addAproduct.img}/>
                        </div>
                        <div className='textAreaContainer'>
                          <p className='miniHeader'>Namn</p>
                          <input onChange={(e)=> this.addAdminProduct(e,"name")} type="text" name="" value={this.state.addAproduct.name}/>
                          <p className='miniHeader'>Produkt info</p>
                          <textarea onChange={(e)=> this.addAdminProduct(e,"productinfo")} value={this.state.addAproduct.productinfo} name="name" rows="8" cols="80"></textarea>
                          {(obj.numberinstore>0) ? <p className='isInStore'>Finns i lager</p>:<p className='notInStore'>slutsåld</p>}
                        </div>
                    </div>
                    <div className='admin-amount'>
                        <p className='miniHeader'>Antal på lager</p>
                        <div className='admin-amount-update'>
                          <button onClick={()=> this.numberOfProducts(-1)}>-</button>
                          <input onChange={(e)=>this.addAdminProduct(e,"numberinstore")} onKeyDown = { (e) => this.validateKeyPress(e) } type="number" name="" value={this.state.addAproduct.numberinstore}/>
                          <button onClick={()=> this.numberOfProducts(1)}>+</button>
                        </div>
                    </div>
                    <div className='admin-price'>
                      <p className='miniHeader'>Pris</p>
                      <label><input onChange={(e)=> this.addAdminProduct(e,"price")}  onKeyDown = { (e) => this.validateKeyPress(e)} type="number" name="" value={this.state.addAproduct.price}/>kr</label>
                    </div>
                </div>
            </div>

          :<div key={obj.id} className='admin-article-object'>
              <div className='change-content'>
                  <h3>id: {obj.id}</h3>
                  <p className='admin-pointer-btn' onClick={()=>this.switchToChange(obj.id)}><i className="far fa-edit"></i> Ändra</p>
              </div>
              <div className='main-content'>
                  <div className='img-name-instore'>
                      <div className='img-container'>
                        <img src={(obj.img)? obj.img:'img/placeholder.png'} alt='product bild' title='productbild'/>
                      </div>
                      <div>
                        <p className='miniHeader'>Namn</p>
                          <p>{obj.name}</p>
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


  handleClickUndoProducts = () => {
    let action = undoProduct();
    this.props.dispatch(action);
  }

  handleClickRedoProducts = () => {
    let action = redoProduct();
    this.props.dispatch(action);
  }

  render(){


    let allProducts = this.props.products.present;
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
                              <img src={(
                                      this.state.addAproduct.img)
                                      ? this.state.addAproduct.img
                                      : 'img/placeholder.png'} alt='product bild' title='ädelsten'/>
                          </div>
                          <input onChange={(e) => this.addAdminProduct(e, "img")} type="text" name="" value={this.state.addAproduct.img}/>
                      </div>
                      <div className='textAreaContainer'>
                          <p className='miniHeader'>Namn</p>
                          <input onChange={(e) => this.addAdminProduct(e, "name")} type="text" name="" value={this.state.addAproduct.name}/>
                          <p className='miniHeader'>Produkt info</p>
                          <textarea onChange={(e) => this.addAdminProduct(e, "productinfo")} name="name" rows="8" cols="80" value={this.state.addAproduct.productinfo}></textarea>
                      </div>
                  </div>
                  <div className='admin-amount'>
                      <p className='miniHeader'>Antal på lager</p>
                      <div className='admin-amount-update'>

                      <button onClick={() => this.numberOfProducts(-1)}>-</button>
                            <input onChange={(e) => this.addAdminProduct(e, "numberinstore")} onKeyDown = { (e) => this.validateKeyPress(e)} type="text" name="" value={this.state.addAproduct.numberinstore}/>
                            <button onClick={() => this.numberOfProducts(1)}>+</button>
                        </div>
                    </div>
                    <div className='admin-price'>
                        <p className='miniHeader'>Pris</p>
                        <label><input onChange={(e) => this.addAdminProduct(e, "price")} onKeyDown = { (e) => this.validateKeyPress(e) } type="text" name="" value={this.state.addAproduct.price}/>kr</label>
                  </div>
              </div>

              <div className='add-product-conatainer'>
                <button onClick={() =>
                    this.submitToStore(this.state.addAproduct)}>Lägg till produkt</button>
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
                  <div className="undoRedo">
                    <button disabled = {!this.props.products.past.length > 0 } onClick = {this.handleClickUndoProducts}>undo <i className ="fa fa-undo" aria-hidden="true"></i></button>
                    <button disabled = {!this.props.products.future.length > 0} onClick = {this.handleClickRedoProducts}>Redo <i className ="fa fa-repeat" aria-hidden="true"></i></button>
                  </div>

                   <div className='admin-instore'>
                      {(this.state.currentPage==='allProducts')?<p>Produkter på lager</p>: <p>Lägg till produkt</p>}
                    </div>
                      {qurrentPage}

              </div>
          </div>);//return
  }// render
}// class admin

let mapStateToProps=(state)=>{
  return {
    products: state.products

  } // ger mig initialstate används längre upp som props
}


export default connect(mapStateToProps)(admin);
