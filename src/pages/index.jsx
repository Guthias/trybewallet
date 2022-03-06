import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Wallet from './Wallet';

export default function Content() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/carteira" component={ Wallet } />
    </Switch>
  );
}
