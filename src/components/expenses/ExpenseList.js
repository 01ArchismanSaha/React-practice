import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import { useState } from "react";

function ExpenseList(props) {
  const expenses = props.expenses;

  const [selectedYearInFilter, setSelectedYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear)
  };
  // console.log(expenses);
  return (
    <Card className="expenses">
      <ExpensesFilter selectedYearValue={selectedYearInFilter} onFilterChange={filterChangeHandler} />
      {expenses.map((expense) => {
        // console.log(expense.id)
        return (
          <ExpenseItem
            id={expense.id}
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default ExpenseList;
