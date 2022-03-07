import React, { Component } from 'react';

export default class index extends Component {
  render() {
    const { labelText, id, name, handdleChange, value } = this.props;

    return (
      <label htmlFor={ id }>
        { labelText }
        <input
          id={ id }
          datatest-id={ id }
          name={ name }
          onChange={ handdleChange }
          value={ value }
        />
      </label>
    );
  }
}
