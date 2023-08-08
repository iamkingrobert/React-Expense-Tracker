import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    updateExpense: (state, action) => {
      const { id, updatedExpense } = action.payload;
      const expenseToUpdate = state.find((expense) => expense.id === id);
      if (expenseToUpdate) {
        Object.assign(expenseToUpdate, updatedExpense);
      }
    },
    deleteExpense: (state, action) => {
      const idToDelete = action.payload;
      return state.filter((expense) => expense.id !== idToDelete);
    },
  },
});

export const { addExpense, updateExpense, deleteExpense } =
  expensesSlice.actions;
export default expensesSlice.reducer;
