import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop-page/shop-page.component';
import Header from "./component/header/header.component";
import React from 'react';
import './App.css';
import { Switch,Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
       <Route exact path='/' component = { HomePage }/>
       <Route exact path='/shop' component = { ShopPage }/>
      </Switch> 
    </div>
  );
}

export default App;
