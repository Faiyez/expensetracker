import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'; 
export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const {addTransaction} = useContext(GlobalContext);
  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random()*1000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }
  return (
    <div>
        <h3>Add New Transactions</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Type</label>
                <input type="text" value = {text} onChange={(e) => setText(e.target.value)} placeholder='Enter Type of Transaction'></input>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Quantity
                <div>Negative (-) Expense, Positive (+) Income</div>
                
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount'></input>
            </div>
            <button className="btn" >Include Transaction</button>
        </form>
    </div>
  )
}

