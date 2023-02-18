import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

export function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div>{props.location}</div>
      <div className="expense-item__description"></div>
      <ExpenseDetails title={props.title} amount={props.amount}/>
    </div>
  );
}

export default ExpenseItem;
