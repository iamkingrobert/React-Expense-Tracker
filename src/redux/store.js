import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expensesSlice";

const store = configureStore({
  reducer: {
    expenses: expensesReducer,
  },
});

export default store;
