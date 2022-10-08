import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

const saveExpenseDataHandler =(enteredExpenseData) => {

  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()//not a perfect unique id, but It'll have to do for now
  };
  
  props.onAddExpense(expenseData);

};
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
