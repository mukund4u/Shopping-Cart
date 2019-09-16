import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shoppage/shop';
import Header from './components/header/header';
import Login from './pages/loginpage/login';
import { auth } from './firebase/firebase.utils';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      currentUser:null
    }

  }

  unsubscribeFromAuth = null;

  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>  {
      this.setState({currentUser: user});
    })
  }

  componentWillUnMoint() {
    this.unsubscribeFromAuth();
  }

  render(){
    return(
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    )
  }
}


export default App;
