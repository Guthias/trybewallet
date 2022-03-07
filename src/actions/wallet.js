export const CREATE_EXPENSE = '@wallet/create-expense';

export const createExpense = (...expenseValues) => ({
  type: CREATE_EXPENSE,
  payload: { ...expenseValues },
});
