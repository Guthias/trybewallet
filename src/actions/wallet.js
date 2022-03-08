export const CREATE_EXPENSE = '@wallet/create-expense';

export const createExpense = (expenseValues) => ({
  type: CREATE_EXPENSE,
  payload: {
    value: Number(expenseValues.value),
    description: expenseValues.description,
    currency: expenseValues.currency,
    method: expenseValues.method,
    tag: expenseValues.tag,
  },
});
