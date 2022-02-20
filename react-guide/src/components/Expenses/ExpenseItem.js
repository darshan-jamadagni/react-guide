import "./ExpenseItem.css";
import React, { Component } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const { date, title, amount } = props.expense;

  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <Card className="expense-item">
      <ExpenseDate month={month} day={day} year={year} />
      <div className="expense-description">
        <h2>{title}</h2>
        <div className="expense-amount"> ${amount} </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
