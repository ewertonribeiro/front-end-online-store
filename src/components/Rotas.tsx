import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ShopCart from '../pages/ShopCart';
import ProductDetails from '../pages/ProductDetails';

export default class Rotas extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shopcart" component={ShopCart} />
        <Route exact path="/product/:id" component={ProductDetails} />
      </Switch>
    );
  }
}
