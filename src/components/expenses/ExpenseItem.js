import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

export function ExpenseItem(props) {
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setAmount(100)
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={amount} localtion={props.location}/>
      <button onClick={clickHandler}>Update Expense</button>
    </Card>
  );
}

export default ExpenseItem;
