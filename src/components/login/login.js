import React from 'react';
import './login.css';


class Login extends React.Component {
  state = {
    inputValue : "",
    msg : ""
  }

  handleLogin = (e) => {
    if(this.state.inputValue === "LoggaIn"){
      this.setState({msg:"inloggad"})
    } else {
      this.setState({msg:"Fel lösenord"})
    }
    setTimeout( ()=> {
        this.setState({msg:""})
    }, 3000);  // 3 seconds
  }

  handleInput = (e) => {
    this.setState({
      inputValue : e.target.value
    })
  }

  render(){

    return (
      <div className="component login-container">

          <div className="wrapper-main">
            <i className="fa fa-times fa-2x closeLogin" aria-hidden="true"></i>
            <span> { this.state.msg }</span>
            <span>Logga in som admin, ange lösenord</span>
            <div>
              <input onChange={this.handleInput} value={this.state.inputValue} type="text" placeholder="Lösenord" />
              <button  onClick={this.handleLogin}>Logga in</button>
            </div>

          </div>
      </div>
    )
  }
}

export default Login;
