import React from "react";
import "../App.css";
import GroceryTable from "../components/GroceryTable";

function OrderPage({ items }) {
  return (
    <>
      <article>
        <h2 className="itemsHeader">Items</h2>
        <p className="pOrder">Select up to 10 items</p>

        <GroceryTable items={items} />
      </article>
    </>
  );
}

export default OrderPage;
