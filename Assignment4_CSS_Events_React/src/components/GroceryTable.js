import React from "react";
import "../App.css";

function GroceryTable({ items }) {
  return (
    <>
      <h4>This is a table</h4>
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}

export default GroceryTable;
