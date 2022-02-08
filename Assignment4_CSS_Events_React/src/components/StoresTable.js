import React from "react";
import "../App.css";

function StoresTable({ stores }) {
  return (
    <>
      <table>
        <caption>list of stores</caption>

        <thead>
          <th>city</th>
          <th>state</th>
          <th>zip code</th>
        </thead>

        <tbody>
          {stores.map(store => (
            <tr>
              <td>{store.city}</td>
              <td>{store.state}</td>
              <td>{store.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form></form>
    </>
  );
}

export default StoresTable;
