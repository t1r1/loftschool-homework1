import React, {Component} from 'react';
import './App.css';
import {addListener, removeListener, isAuthorized} from './AuthorizeApi';
import Auth from './Auth'
import Private from './Private'
import Public from './Public'
import Home from './Home'
import {Route, Link, Switch, Redirect} from 'react-router-dom'

class App extends Component {
  state = {
    isAuthorized
  };

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({isAuthorized});
  };

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/auth">Войти</Link></li>
            <li><Link to="/private">Секретная страница</Link></li>
            <li><Link to="/public">Публичная страница</Link></li>
            <li><Link to="/">Главная</Link></li>
          </ul>
        </nav>

        <hr/>
        <Switch>
          <Route exact path="/" component={Home}/>
          {
            this.state.isAuthorized ? 
            <Route path="/private" component={Private}/>
            :
            <Redirect from="/private" to="/auth"/>
          }
          <Route path="/public" component={Public}/>
          <Route path="/auth" component={Auth}/>
          <Redirect from="*" to="/"/>
        </Switch>
      </div>
    )
  }
}

export default App;
