import './ExpenseDate.css';

function ExpenseDate(props){
    const date = new Date(props.date);
    const month = date.toLocaleString('it-IT', {month: 'long'});
    const day = date.toLocaleString('it-IT', {day: '2-digit'});
    const year = date.getFullYear();

    return(
        <div className="expense-date">
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date_year">{year}</div>
      </div>
    );
}

export default ExpenseDate;