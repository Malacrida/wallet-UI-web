import React from 'react';
import trash from "../ui/trash-alt-regular.svg"
 
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';

const ExpenseItem = (props) => {

  const onDelete = () => {
    props.deleteExpenses(props);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.description}</h2>
        <div className='expense-item__price'>{props.amount} €</div>
        <button type="button" className="trashIcon" onClick={onDelete}>
          <img src={trash} className="expense-item__trash" />
        </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
