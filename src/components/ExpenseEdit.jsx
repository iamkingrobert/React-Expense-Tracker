import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateExpense } from "../redux/expensesSlice";

const ExpenseEdit = ({ expenseId, onClose }) => {
  const expense = useSelector((state) =>
    state.expenses.find((expense) => expense.id === expenseId)
  );

  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount);
  const [date, setDate] = useState(expense.date);
  const [category, setCategory] = useState(expense.category);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedExpense = {
      id: expenseId,
      description,
      amount,
      date,
      category,
    };

    dispatch(updateExpense({ id: expenseId, updatedExpense }));
    onClose();
  };

  return (
    <div>
      <h2>Edit Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ExpenseEdit;
