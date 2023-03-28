import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import { useState } from "react";

function ExpenseList(props) {
  const expenses = props.expenses;

  const [selectedYearInFilter, setSelectedYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYearInFilter
  );

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      // console.log(expense.id)
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYearValue={selectedYearInFilter}
        onFilterChange={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
}

export default ExpenseList;
