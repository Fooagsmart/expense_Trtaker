import React, { useContext } from "react";

import { GlobalContext } from "../Context/GlobalContext";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li className="minus">
            {transaction.text} <span>-$500</span>
            <button className="delete-btn"></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
