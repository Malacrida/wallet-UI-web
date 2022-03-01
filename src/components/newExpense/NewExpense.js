import React, { useState } from "react";
//import uuid from 'react-uuid';

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpensiveForm, setshowExpensiveForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      //id: uuid()
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    hiddenExpensiveForm();
  };

  const startEditingHandler = () => {
    setshowExpensiveForm(true);
  };

  const hiddenExpensiveForm = () => {
    setshowExpensiveForm(false);
  };
  return (
    <div className="new-expense">
      {!showExpensiveForm && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {showExpensiveForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hiddenExpensiveForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
