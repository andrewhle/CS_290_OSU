import React from "react";
import Increment from "./Increment";
import "../App.css";

function GroceryTable({ items }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <Increment />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default GroceryTable;
