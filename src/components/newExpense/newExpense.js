import React from "react";

import "./newExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    const expenseDataWithId = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDataWithId);
  };
  
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
