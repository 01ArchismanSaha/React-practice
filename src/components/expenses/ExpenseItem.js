import "./ExpenseItem.css";
// import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

export function ExpenseItem(props) {
  // console.log(props);
  // const [amount, setAmount] = useState(props.amount);
  // console.log(props.key);

  // const clickHandler = () => {
  //   // console.log(props.id);
  //   let toDelete = document.getElementById(props.id);
  //   toDelete.remove();
  //   // console.log(toDelete);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
    </Card>
  );
}

export default ExpenseItem;
