import React from 'react'

export const TransactionList = () => {
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        <li className="minus">
            Money<span>-400$</span><button>X</button>
        </li>
      </ul>
    </div>
  )
}


