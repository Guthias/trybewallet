import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <h1>TrybeWallet</h1>
        </div>
        <div>
          <span data-testid="email-field">{ email }</span>
        </div>
        <div>
          <span>Despesas totais: </span>
          <span data-testid="header-currency-field">{ currency }</span>
          &nbsp
          <span data-testid="total-field">{ expenses.toFixed(2) }</span>
        </div>
      </header>
    );
  }
}
