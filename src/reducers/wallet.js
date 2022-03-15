const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editId: null,
};

const walletReducer = (state = INITIAL_STATE, { type, payload }) => {
  let newExpenses;
  let editItem;
  let itemIndex;
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

  case '@wallet/start-edit-expense':
    return { ...state, editId: payload.id };

  case '@wallet/save-edit':
    newExpenses = [...state.expenses];
    editItem = newExpenses.find(({ id }) => state.editId === id);
    itemIndex = newExpenses.indexOf(editItem);
    newExpenses[itemIndex] = {
      ...editItem,
      value: payload.value,
      description: payload.description,
      currency: payload.currency,
      method: payload.method,
      tag: payload.tag,
    };

    return { ...state, editId: null, expenses: newExpenses };
  default:
    return state;
  }
};

export default walletReducer;
