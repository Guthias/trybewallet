import React, { Component } from 'react';
import { number, string } from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, currency, expenses } = this.props;

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
          &nbsp;
          <span data-testid="total-field">{ expenses.toFixed(2) }</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

Header.defaultProps = {
  currency: 'BRL',
  expenses: 0,
};

Header.propTypes = {
  email: string.isRequired,
  currency: string,
  expenses: number,
};

export default connect(mapStateToProps)(Header);
