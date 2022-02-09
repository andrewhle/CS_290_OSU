import React from "react";
import StoresTable from "../components/StoresTable";
import ZipSearch from "../components/ZipSearch";
import "../App.css";

function StoresPage({ stores }) {
  return (
    <>
      <h2 className="storeHeader">List Stores</h2>
      <p className="pStores">You can view nearby store below</p>
      <StoresTable stores={stores} />
      <ZipSearch />
    </>
  );
}

export default StoresPage;
