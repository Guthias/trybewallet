const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case '@wallet/create-expense-sucess':
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        value: payload.value,
        description: payload.description,
        currency: payload.currency,
        method: payload.method,
        tag: payload.tag,
        exchangeRates: payload.exchangeRates,
      }],
    };

  case '@wallet/get-currencies':
    return {
      ...state,
      currencies: payload.currencies,
    };

  case '@wallet/delete-expense':
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== payload.id),
    };

  default:
    return state;
  }
};

export default walletReducer;
