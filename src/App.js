import React, { useState, useEffect, useCallback } from "react";

import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/expenses/Expenses";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const fetchExpensesHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8080/expense/list');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      setExpenses(data.expenses);
    } catch (error) {
      throw new Error('Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchExpensesHandler();
  }, [fetchExpensesHandler]);

  let content = "";

  if (isLoading) {
    content = "Loading...";
  }else{
    content = "";
  }
  async function addExpenseHandler(expense) {
    const response = await fetch('http://localhost:8080/expense/add', {
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    fetchExpensesHandler();
  }

  async function deleteExpenseHandler(expense) {
    const response = await fetch('http://localhost:8080/expense/remove', {
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    fetchExpensesHandler();
  }


  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} message={content} onRemoveExpense={deleteExpenseHandler}/>
    </div>
  );
}

export default App;
