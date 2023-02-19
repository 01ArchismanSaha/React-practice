import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";

function ExpenseList(props) {
  const expenses = props.expenses;
  // console.log(expenses);
  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
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
