import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [changedTitle, setChangedTitle] = useState("");
  const [changedAmount, setChangedAmount] = useState("");
  const [changedDate, setChangedDate] = useState("");

  const titleChangeHandler = (event) => {
    setChangedTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setChangedAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setChangedDate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: changedTitle,
      amount: changedAmount,
      date: new Date(changedDate),
    };
    
    props.onSaveExpenseData(expenseData);

    setChangedTitle("");
    setChangedAmount("");
    setChangedDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={changedTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={changedAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-01-01"
            value={changedDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
