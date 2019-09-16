import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shoppage/shop';
import Header from './components/header/header';
import Login from './pages/loginpage/login';

function App(){
  return(
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  )
}


export default App;