import React from "react";
import "../App.css";
import GroceryTable from "../components/GroceryTable";

function OrderPage({ items }) {
  return (
    <>
      <article>
        <h2>Items</h2>
        <p>Select your items</p>
        <GroceryTable items={items} />
      </article>
    </>
  );
}

export default OrderPage;
