import React, { Component } from 'react';
import createOptions from '../../helpers/createOptions';
import Input from '../Input';
import Select from '../Select';

const currencyList = ['USD', 'BRL', 'EUR'];
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

  render() {
    const { value, description, currency, tag, method } = this.state;

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
          options={ createOptions(currencyList) }
          dataList
        />

        <Select
          labelText="Método"
          id="method-input"
          name="method"
          value={ method }
          handdleChange={ this.handdleChange }
          options={ createOptions(methodList) }
          textArea
        />

        <Select
          labelText="Categoria"
          id="tag-input"
          name="tag"
          value={ tag }
          handdleChange={ this.handdleChange }
          options={ createOptions(tagList) }
          dataList
        />

        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

export default ExpenseInput;
