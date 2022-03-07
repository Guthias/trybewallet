import React, { Component } from 'react';
import Input from '../Input';
import Select from '../Select';

class ExpenseInput extends Component {
  render() {
    return (
      <form>
        <Input
          labelText="Valor"
          id="value-input"
          name="value"
          value={ value }
          handdleChange={ handdleChange }
        />

        <Input
          labelText="Descrição"
          id="description-input"
          name="description"
          value={ description }
          handdleChange={ handdleChange }
          textArea
        />

        <Select
          labelText="Moeda"
          id="currency-input"
          name="currency"
          value={ currency }
          handdleChange={ handdleChange }
          dataList
        />

        <Select
          labelText="Método"
          id="method-input"
          name="method"
          value={ method }
          handdleChange={ handdleChange }
          textArea
        />

        <Select
          labelText="Categoria"
          id="tag-input"
          name="tag"
          value={ tag }
          handdleChange={ handdleChange }
          dataList
        />
      </form>
    );
  }
}

export default ExpenseInput;
