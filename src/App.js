import React, { Component } from 'react';
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import AppBar from 'material-ui/AppBar'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem';
import Login from './component/login'
import Event_List from './component/eventList'
import About from './component/about'
import Logout from './component/logout'

const Private=({...props})=>{
    return localStorage.getItem('token')?<div><Route {...props}/></div>
        :<Redirect to="/"/>
};

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppBar title={'Redux Saga Demo'}>
              <MenuItem><NavLink to="/eventList">Events</NavLink></MenuItem>
              <MenuItem><NavLink to="/about">About Us</NavLink></MenuItem>
              {
                  (localStorage.getItem('email'))?<MenuItem><NavLink to="/logout">Sign out</NavLink></MenuItem>:<MenuItem><NavLink to="/">Sign In</NavLink></MenuItem>
              }

          </AppBar>
          <div>
              <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/about" component={About}/>

              <Private exact path="/eventList" component={Event_List}/>
              <Private exact path="/logout" component={Logout}/>
              </Switch>
          </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
    return{

    }
}
export default withRouter(connect(mapStateToProps)(App));
