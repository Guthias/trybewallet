import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import { fetchGetCurrencies } from '../actions/wallet';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    return (
      <>
        <Header />
        <ExpenseForm />
        <ExpenseTable />
      </>
    );
  }
}

Wallet.propTypes = {
  getCurrencies: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => {
    dispatch(fetchGetCurrencies());
  },
});

export default connect(null, mapDispatchToProps)(Wallet);
