import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker App</h1>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;
