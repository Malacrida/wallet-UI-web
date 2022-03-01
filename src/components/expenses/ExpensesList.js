import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

  const deleteExpenses = (expenseData) => {
    props.deleteExpenses(expenseData);
  }

  if(props.message.length >0){
    return <h2 className="expenses-list__fallback"> {props.message}</h2>;
  }else if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((el) => (
        <ExpenseItem
          key={el.id}
          id={el.id}
          description={el.description}
          amount={el.amount}
          date={el.date}
          deleteExpenses = {deleteExpenses}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
