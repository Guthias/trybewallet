import React, { Component } from 'react';
import { connect } from 'react-redux/';
import { string, arrayOf, shape } from 'prop-types';

class ExpenseTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              expenses.map(({
                id, description, value, currency, method, tag, exchangeRates,
              }) => {
                const currencyValue = Number(exchangeRates[currency].ask);
                const expenseValue = Number(currencyValue * value);
                return (
                  <tr key={ id }>
                    <td>{ description }</td>
                    <td>{ tag }</td>
                    <td>{ method }</td>
                    <td>{ parseFloat(value).toFixed(2) }</td>
                    <td>{ exchangeRates[currency].name }</td>
                    <td>{ currencyValue.toFixed(2) }</td>
                    <td>{ expenseValue.toFixed(2) }</td>
                    <td>Real</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: arrayOf(shape({
    value: string.isRequired,
    description: string.isRequired,
    currency: string.isRequired,
    method: string.isRequired,
    tag: string.isRequired,
    exchangeRates: shape({
      name: string.isRequired,
      ask: string.isRequired,
    }).isRequired,
  })).isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpenseTable);
