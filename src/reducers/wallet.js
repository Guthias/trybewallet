const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  const newExpense = state.expenses;

  switch (action.type) {
  case '@wallet/create-expense':
    newExpense.push({ ...action.payload });
    return {
      ...state,
      expense: newExpense,
    };
  default:
    return state;
  }
};

export default walletReducer;
