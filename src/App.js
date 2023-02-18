import ExpenseItem from "./components/ExpenseItem";

function App() {
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

  const expenseList = expenses.map((expense) => {
    return <ExpenseItem
      key = {expense.id}
      title = {expense.title}
      amount = {expense.amount}
      date = {expense.date}
      location = {expense.location}
    ></ExpenseItem>;
  });

  return (
    <div>
      <h2>Expense Items</h2>
      {expenseList}
    </div>
  );
}

export default App;
