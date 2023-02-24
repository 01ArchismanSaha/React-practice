import "./ExpenseItem.css";
// import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

export function ExpenseItem(props) {
  // console.log(props);
  // const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    console.log(props.id);
    let toDelete = document.getElementById(props.id);
    toDelete.remove();
    // console.log(toDelete);
  };
  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} localtion={props.location}/>
      <button onClick={clickHandler}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
