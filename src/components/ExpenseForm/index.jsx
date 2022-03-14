import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, string } from 'prop-types';

import { createExpense, saveEdit } from '../../actions';
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
    isEditing: false,
  }

  handdleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  saveExpense = (event) => {
    const { isEditing } = this.state;
    const { saveExpense, saveEditOnState } = this.props;
    event.preventDefault();

    if (isEditing) {
      saveEditOnState(this.state);
    } else {
      saveExpense(this.state);
    }

    this.setState({
      value: '',
      description: '',
      currency: '',
      tag: '',
      method: '',
      isEditing: false,
    });
  };

  startEdit = () => {
    const { editExpense} = this.props;
    const { value, description, currency, tag, method } = editExpense;
    this.setState({ value, description, currency, tag, method, isEditing: true });
  }

  render() {
    const { value, description, currency, tag, method, isEditing } = this.state;
    const { currencyList, editId } = this.props;

    if (!isEditing && editId) {
      this.startEdit();
    }

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

        <button type="submit" onClick={ this.saveExpense }>
          { isEditing ? 'Editar despesa' : 'Adicionar despesa' }
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencyList: wallet.currencies,
  editId: wallet.editId,
  editExpense: wallet.expenses.find(({ id }) => id === wallet.editId),
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (...expenseValue) => {
    dispatch(createExpense(...expenseValue));
  },

  saveEditOnState: (...expenseValue) => {
    dispatch(saveEdit(...expenseValue));
  },
});

ExpenseInput.propTypes = {
  saveExpense: func.isRequired,
  currencyList: arrayOf(string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseInput);
