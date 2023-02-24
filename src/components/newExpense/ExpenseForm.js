import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
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

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-01-01"
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
