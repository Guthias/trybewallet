import React, { Component } from 'react';
import { connect } from 'react-redux/';

class ExpenseTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
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

          {
            expenses.map(({ id, description, value, currency, method, tag, exchangeRates }) => {
              console.log(exchangeRates[currency]);
              return (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ parseFloat(value).toFixed(2) }</td>
                  <td>{ exchangeRates[currency].name }</td>
                  <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
                  <td>{ Number(exchangeRates[currency].ask * value).toFixed(2) }</td>
                  <td>Real</td>
                </tr>
              );
            })
          }
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpenseTable);
