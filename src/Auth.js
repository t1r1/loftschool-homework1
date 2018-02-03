import React, {Component} from 'react';
import {authorizeUser} from './AuthorizeApi'
import Redirect from 'react-router-dom/Redirect';

class Auth extends Component {

  state = {
    showError: false,
    email: "",
    password: "",
    isAuthorized: false
  }

  handleSubmit = (e) => {
    let { email, password } = this.state
    if (authorizeUser(email, password)) {
      this.setState({isAuthorized: true})
    }
    else {
      this.setState({showError: true})
    }
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    let {isAuthorized} = this.state
    return (
      isAuthorized ? <Redirect to="/"/> : 
      <div>
          <input value={this.state.email} name="email" onChange={this.handleChange} type="email" placeholder="e-mail"/>
          <input value={this.state.password} name="password" type="password" onChange={this.handleChange} placeholder="password"/>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        {this.state.showError && <p className="error">Неправильный логин или пароль</p>}
      </div>
    )
  }
}

export default Auth;
