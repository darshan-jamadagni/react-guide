import "./ExpenseDate.css";

function ExpenseDate(props) {
  const { month, day, year } = props;
  return (
    <div className="expense-date">
      <div className="expense-month">{month}</div>
      <div className="expense-year">{year}</div>
      <div className="expense-day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
