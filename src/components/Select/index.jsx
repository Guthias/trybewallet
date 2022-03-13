import React, { Component } from 'react';
import { string, func, bool, arrayOf } from 'prop-types';

export default class Select extends Component {
  renderOptions = () => {
    const { options } = this.props;
    return options.map((value) => (
      <option key={ value } value={ value }>{ value }</option>));
  }

  render() {
    const { labelText, id, name, handdleChange, value, dataList } = this.props;

    return (
      <label htmlFor={ id }>
        { labelText }
        { dataList
          ? (
            <>
              <input
                id={ id }
                list={ `${id}-list` }
                data-testid={ id }
                name={ name }
                onChange={ handdleChange }
                value={ value }
              />
              <datalist id={ `${id}-list` }>
                { this.renderOptions() }
              </datalist>
            </>
          )
          : (
            <select
              id={ id }
              data-testid={ id }
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
  options: [],
};

Select.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  labelText: string.isRequired,
  handdleChange: func.isRequired,
  options: arrayOf(string),
  dataList: bool,
};
