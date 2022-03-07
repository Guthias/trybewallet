import React, { Component } from 'react';
import Input from '../Input';

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
      </form>
    );
  }
}

export default ExpenseInput;
