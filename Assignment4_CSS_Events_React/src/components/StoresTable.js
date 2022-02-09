import React from "react";
import "../App.css";

function StoresTable({ stores }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>State</th>
            <th>Zip code</th>
          </tr>
        </thead>

        <tbody>
          {stores.map(store => (
            <tr key={store.id}>
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
