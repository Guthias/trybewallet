import React, { Component } from 'react';
import { string, func, bool } from 'prop-types';

export default class Input extends Component {
  render() {
    const { labelText, id, name, handdleChange, value, textArea } = this.props;

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

Input.defaultProps = {
  textArea: false,
};

Input.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  labelText: string.isRequired,
  handdleChange: func.isRequired,
  textArea: bool,
};
