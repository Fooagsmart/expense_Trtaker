import React from "react";

export const Transaction = ({ transaction }) => {
  return (
    <li className="minus">
      {transaction.text} <span>-$500</span>
      <button className="delete-btn"></button>
    </li>
  );
};
