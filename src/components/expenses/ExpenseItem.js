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
  const datKey = Math.random();
  const detailKey = Math.random();
  const cardKey = Math.random();
  return (
    <Card key={cardKey} className="expense-item">
      <ExpenseDate date={props.date} key={datKey}/>
      <ExpenseDetails
        key={detailKey}
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
    </Card>
  );
}

export default ExpenseItem;
