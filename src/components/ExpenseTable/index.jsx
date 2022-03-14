import React, { Component } from 'react';
import { connect } from 'react-redux/';
import { string, arrayOf, shape, func } from 'prop-types';
import * as action from '../../actions/wallet';

class ExpenseTable extends Component {
  render() {
    const { expenses, deleteExpense, editExpense } = this.props;
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
                    <td>{ parseFloat(Number(value)).toFixed(2) }</td>
                    <td>{ exchangeRates[currency].name }</td>
                    <td>{ currencyValue.toFixed(2) }</td>
                    <td>{ expenseValue.toFixed(2) }</td>
                    <td>Real</td>
                    <td>
                      <button
                        type="button"
                        data-testid="delete-btn"
                        onClick={ () => { deleteExpense(id); } }
                      >
                        Excluir
                      </button>

                      <button
                        type="button"
                        data-testid="edot-btn"
                        onClick={ () => { editExpense(id); } }
                      >
                        Editar
                      </button>
                    </td>
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
  deleteExpense: func.isRequired,
  editExpense: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => {
    dispatch(action.deleteExpense(id));
  },

  editExpense: (id) => {
    dispatch(action.startEditExpense(id));
  },
});

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
