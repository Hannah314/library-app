import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Header from './Header';
import Library from '../libraryComponents/Library';
import MyAccount from '../accountComponents/MyAccount';
import data from '../../data';

class Layout extends React.Component {
  
  constructor(){
    super();

    this.state = {
      user: data.user,
    }
  }

  render() {
    return (
    <React.Fragment>
        <Header user={this.state.user} />
        <Switch>
            <Route exact path={"/"} component={Library}/>
            <Route exact path="/my-account" component={MyAccount} />
            <Redirect path='*' to='/404' />
        </Switch>
    </React.Fragment>
    );
  }
}

export default Layout;
