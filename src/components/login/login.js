import React from 'react';
import './login.css';
import { connect } from 'react-redux';
import { toggleLoginMenu, isAdmin } from '../../actions/actions.js'


class Login extends React.Component {
  state = {
    inputValue : "",
    msg : ""
  }

  handleLogin = (e) => {
    if(this.state.inputValue === this.props.adminPassword ){
      this.setState({msg:"inloggad"})
      let action = toggleLoginMenu()
      this.props.dispatch(action);

      let actionAdmin = isAdmin(true);
      this.props.dispatch(actionAdmin);

    } else {
      this.setState({msg:"Fel lösenord"})
    }

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
            <i className="fa fa-times fa-2x closeLogin" aria-hidden="true" onClick={ () => this.props.dispatch(toggleLoginMenu())}></i>
            <span className="loginInfo">Logga in som admin, ange lösenord</span>
            <div>
              <span className="loginMsg"> { this.state.msg }</span>
              <div>
                <input onChange={this.handleInput} value={this.state.inputValue} type="text" placeholder="Lösenord" />
                <button  onClick={this.handleLogin}>Logga in</button>
              </div>
            </div>
          </div>
      </div>
    )
  }
}


let mapStateToProps = (state) => {
  return {
    adminPassword : state.user.password,
  }
}

export default connect(mapStateToProps)(Login);
