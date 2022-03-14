import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, string } from 'prop-types';

import { createExpense } from '../../actions';
import Input from '../Input';
import Select from '../Select';

const methodList = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagList = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class ExpenseInput extends Component {
  state = {
    value: '',
    description: '',
    currency: '',
    tag: '',
    method: '',
  }

  handdleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  saveExpense = (event) => {
    const { saveExpense } = this.props;
    event.preventDefault();
    saveExpense(this.state);
    this.setState({
      value: '',
      description: '',
      currency: '',
      tag: '',
      method: '',
    });
  };

  render() {
    const { value, description, currency, tag, method } = this.state;
    const { currencyList } = this.props;

    return (
      <form>
        <Input
          labelText="Valor"
          id="value-input"
          name="value"
          value={ value }
          handdleChange={ this.handdleChange }
        />

        <Input
          labelText="Descrição"
          id="description-input"
          name="description"
          value={ description }
          handdleChange={ this.handdleChange }
          textArea
        />

        <Select
          labelText="Moeda"
          id="currency-input"
          name="currency"
          value={ currency }
          handdleChange={ this.handdleChange }
          options={ currencyList }
        />

        <Select
          labelText="Método"
          id="method-input"
          name="method"
          value={ method }
          handdleChange={ this.handdleChange }
          options={ methodList }
          textArea
        />

        <Select
          labelText="Categoria"
          id="tag-input"
          name="tag"
          value={ tag }
          handdleChange={ this.handdleChange }
          options={ tagList }
        />

        <button type="submit" onClick={ this.saveExpense }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencyList: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (...expenseValue) => {
    dispatch(createExpense(...expenseValue));
  },
});

ExpenseInput.propTypes = {
  saveExpense: func.isRequired,
  currencyList: arrayOf(string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseInput);