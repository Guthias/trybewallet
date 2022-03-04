import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

export default function Content() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/wallet" component={ Wallet } />
    </Switch>
  );
}
