import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import FilterExpenses from "./FilterExpenses";

function Expenses(props) {
  const expenses = props.expenses;

  const selectYearHandler = (year) => {
    props.onSelectYear(year);
  };

  return (
    <Card className="expenses">
      <FilterExpenses onSelectYear={selectYearHandler} />
      <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
      <ExpenseItem expense={expenses[3]} />
    </Card>
  );
}

export default Expenses;
