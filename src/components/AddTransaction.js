import React, {useState} from 'react';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <div>
        <h3>Add New Transactions</h3>
        <form>
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
            <button className="btn">Include Transaction</button>
        </form>
    </div>
  )
}

