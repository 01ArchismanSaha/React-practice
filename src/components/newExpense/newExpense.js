import React, { useState } from "react";

import "./newExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);

  const saveExpenseDataHandler = (expenseData) => {
    const expenseDataWithId = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDataWithId);
    setAddExpense(false);
  };

  const addExpenseHandler = () => {
    setAddExpense(true);
  };

  const cancelHandlerHere = () => {
    setAddExpense(false);
  };

  return (
    <div className="new-expense">
      {!addExpense && (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      )}
      {addExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelHandler={cancelHandlerHere}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
