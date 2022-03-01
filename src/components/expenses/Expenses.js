import React, { useState } from 'react';

import './Expenses.css';
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../ui/Card.js';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    const date = new Date(expense.date);
    return date.getFullYear().toString() === filteredYear;
  });

  const deleteExpenses = (expenseData) => {
    props.onRemoveExpense(expenseData);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} message={props.message} deleteExpenses={deleteExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
