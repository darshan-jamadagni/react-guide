import React, { useState } from "react";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHanlder = (event) => {
    event.preventDefault();
    const expense = {
      title: title,
      amount: amount,
      date: date,
    };
    props.onNewExpense(expense);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const amountChange = (event) => {
    setAmount(event.target.value);
  };
  const dateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <form onSubmit={submitHanlder}>
      <div className="expense-container">
        <div className="row-1">
          <div className="control">
            <label>Title</label>
            <input value={title} onChange={titleChange} type="text" />
          </div>
          <div className="control">
            <label>Amount</label>
            <input value={amount} onChange={amountChange} type="number" />
          </div>
        </div>
        <div className="row-1">
          <div className="control">
            <label>Date</label>
            <input value={date} onChange={dateChange} type="date" />
          </div>
        </div>
        <div className="row-button">
          <button className="button" type="submit">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewExpense;
