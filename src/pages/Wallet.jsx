import React from 'react';
import Header from '../components/Header';
import ExpenseInput from '../components/ExpenseInput';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpenseInput />
      </>
    );
  }
}

export default Wallet;
