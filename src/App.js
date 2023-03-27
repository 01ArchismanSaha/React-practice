import { useState } from "react";
import ExpenseList from "./components/expenses/ExpenseList";
import NewExpense from "./components/newExpense/newExpense";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: "India",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    location: "India",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: "India",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    location: "India",
  },
];

function App() {

  const [updatedExpenses, setUpdatedExpenses] = useState(expenses)

  const addExpenseHandler = (expense) => {
    // console.log("expense in app.js: ", expense);
    setUpdatedExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpenseList expenses={updatedExpenses} />
    </div>
  );
}

export default App;
