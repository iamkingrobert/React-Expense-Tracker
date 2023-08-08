import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../redux/expensesSlice";
import ExpenseEdit from "./ExpenseEdit";

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  const [editingExpenseId, setEditingExpenseId] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };

  const handleEdit = (id) => {
    setEditingExpenseId(id);
  };

  const handleEditClose = () => {
    setEditingExpenseId(null);
  };

  return (
    <div>
      <h2>All My Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} - {expense.amount} - {expense.date} -{" "}
            {expense.category}
            <button onClick={() => handleDelete(expense.id)}>Delete</button>
            <button onClick={() => handleEdit(expense.id)}>Edit</button>
          </li>
        ))}
      </ul>
      {editingExpenseId && (
        <ExpenseEdit expenseId={editingExpenseId} onClose={handleEditClose} />
      )}
    </div>
  );
};

export default ExpenseList;
