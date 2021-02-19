import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop-page/shop-page.component'
import React from 'react';
import './App.css';
import { Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Route exact path='/' component = { HomePage }/>
      <Route exact path='/shop' component = { ShopPage }/>
    </div>
  );
}

export default App;
