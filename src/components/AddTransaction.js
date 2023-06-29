import React from 'react';

export const AddTransaction = () => {
  return (
    <div>
        <h3>Add New Transactions</h3>
        <form>
            <div className="form-control">
                <label htmlFor="text">Type</label>
                <input type="text" placeholder='Enter Type of Transaction'></input>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Quantity
                <div>Negative (-) Expense, Positive (+) Income</div>
                
                </label>
                <input type="number" placeholder='Enter Amount'></input>
            </div>
            <button class="btn">Include Transaction</button>
        </form>
    </div>
  )
}

