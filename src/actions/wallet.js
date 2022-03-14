import * as api from '../services/api';

const CREATE_EXPENSE_SUCESS = '@wallet/create-expense-sucess';
const CREATE_EXPENSE_ERROR = '@wallet/create-expense-error';
const DELETE_EXPENSE = '@wallet/delete-expense';

export const createExpenseSucess = (expenseValues, exchangeRates) => ({
  type: CREATE_EXPENSE_SUCESS,
  payload: {
    value: expenseValues.value,
    description: expenseValues.description,
    currency: expenseValues.currency,
    method: expenseValues.method,
    tag: expenseValues.tag,
    exchangeRates,
  },
});

export const createExpenseError = (error) => ({
  type: CREATE_EXPENSE_ERROR,
  payload: { error },
});

export const createExpense = (expenseValues) => async (dispatch) => {
  const exchangeRates = await api.getExchangeRates();
  dispatch(createExpenseSucess(expenseValues, exchangeRates));
};

const getCurrenciesSucess = (currencies) => ({
  type: '@wallet/get-currencies',
  payload: { currencies },
});

export const fetchGetCurrencies = () => async (dispatch) => {
  try {
    const currencies = await api.getCurrencies();
    dispatch(getCurrenciesSucess(currencies));
  } catch (error) {
    dispatch(createExpenseError(error));
  }
};

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: { id },
});

export const startEditExpsne = (id) => ({
  type: '@wallet/start-edit-expense',
  payload: { id },
});
