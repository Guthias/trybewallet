import * as api from '../services/api';

const CREATE_EXPENSE_SUCESS = '@wallet/create-expense-sucess';
const CREATE_EXPENSE_ERROR = '@wallet/create-expense-error';

export const createExpenseSucess = (expenseValues, exchangeRates) => ({
  type: CREATE_EXPENSE_SUCESS,
  payload: {
    value: Number(expenseValues.value),
    description: expenseValues.description,
    currency: expenseValues.currency,
    method: expenseValues.method,
    tag: expenseValues.tag,
    exchangeRates,
  },
});

export const createExpenseError = (errorMessage) => ({
  type: CREATE_EXPENSE_ERROR,
  payload: { error: errorMessage },
});

export const createExpense = (expenseValues) => async (dispatch) => {
  try {
    const exchangeRates = await api.getExchangeRates();
    dispatch(createExpenseSucess(expenseValues, exchangeRates));
  } catch (error) {
    dispatch(createExpenseError(error));
  }
};

const getCurrenciesSucess = (currencies) => ({
  type: '@wallet/get-currencies',
  payload: { currencies },
});

export const fetchGetCurrencies = () => async (dispatch) => {
  const currencies = await api.getCurrencies();
  dispatch(getCurrenciesSucess(currencies));
};
