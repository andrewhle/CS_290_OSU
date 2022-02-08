import React from "react";
import StoresTable from "../components/StoresTable";
import ZipSearch from "../components/ZipSearch";
import "../App.css";

function StoresPage({ stores }) {
  return (
    <>
      <h1>This is Store Page</h1>
      <p>Tell the user what to do</p>
      <StoresTable stores={stores} />
      <ZipSearch />
    </>
  );
}

export default StoresPage;
