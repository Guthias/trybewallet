import React, { Component } from 'react';
import { string, func, bool } from 'prop-types';

export default class Select extends Component {
  render() {
    const { labelText, id, name, handdleChange, value, dataList } = this.props;

    return (
      <label htmlFor={ id }>
        { labelText }
        { dataList
          ? (
            <datalist
              id={ id }
              datatest-id={ id }
              name={ name }
              onChange={ handdleChange }
              value={ value }
            >
              { this.renderOptions() }
            </datalist>
          )
          : (
            <select
              id={ id }
              datatest-id={ id }
              name={ name }
              onChange={ handdleChange }
              value={ value }
            >
              { this.renderOptions() }
            </select>
          )}
      </label>
    );
  }
}

Select.defaultProps = {
  dataList: false,
};

Select.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  labelText: string.isRequired,
  handdleChange: func.isRequired,
  dataList: bool,
};
