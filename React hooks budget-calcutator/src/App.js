import React, { useState } from 'react';
import uuid from 'uuid/v4';

import './App.css';
import ExpenseList from './Components/ExpenseList';
import ExpenseForm from './Components/ExpenseForm';
import Alert from './Components/Alert';


const initialExpenses = [
  { id: uuid(), charge: 'rent', amount: 1600 },
  { id: uuid(), charge: 'car payment', amount: 400 },
  { id: uuid(), charge: 'credit card bill', amount: 1200 }
];
function App() {
  // ***************** state value **********************
  const [expenses, setExpense] = useState(initialExpenses);
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [idEdit, setIdEdit] = useState(0);

  // ***************** method ***************************
  // thay đổi input, set lại charge và amount.
  const handleCharge = e => {
    setCharge(e.target.value);
  }
  const handleAmount = e => {
    setAmount(e.target.value)
  }
  // submit form lấy giá trị của input set lại bằng '', set 
  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      if (!edit) {
        const sigleExpense = { id: uuid(), charge: charge, amount: amount };
        setExpense([...expenses, sigleExpense]);
        handleAlert({
          type: 'success',
          text: 'item added'
        })      
      }
      else {
        setEdit(!edit);
        setExpense(expenses.map(x => {
          return x.id === idEdit ? {...x,charge,amount} : x
        }))  
        handleAlert({
          type: 'success',
          text: 'item edited'
        })      
      }
      setCharge('');
      setAmount('');
    }
    else {
      handleAlert({
        type: 'danger',
        text: 'check the value of input'
      })
    }

  }
  // set báo hiệu
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false })
    }, 2000);
  }
  // clear tất cả
  const onClearAll = () => {
    setExpense([]);
  }
  // clear 1 item
  const onDeleteItem = (id) => {
    setExpense(expenses.filter(x => x.id !== id));
  }
  // edit 1 item
  const onEditItem = (idEdit) => {
    setEdit(!edit);
    setIdEdit(idEdit);
    let { charge, amount} = expenses.find(x => x.id === idEdit);
    if (!edit) {
      setCharge(charge);
      setAmount(amount);
    }
    else {
      setCharge("");
      setAmount("");
    }
  }
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>Budget calcutator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          onClearAll={onClearAll}
          onDeleteItem={onDeleteItem}
          onEditItem={onEditItem}
          edit={edit}
          idEdit={idEdit}
        />
      </main>
      <h1>
        Total spending : <span className="total">${expenses.reduce((sum, x) => {
          return sum + parseInt(x.amount);
        }, 0)}</span>
      </h1>
    </>
  );
}

export default App;
