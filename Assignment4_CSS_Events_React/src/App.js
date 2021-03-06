import React from "react";
import "./App.css";
import stores from "./data/stores";
import items from "./data/items";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Route } from "react-router-dom";

// import Nav from './components/Nav';

import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import StoresPage from "./pages/StoresPage";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="header">
          <h2>Online Groceries Shopping</h2>
          <Nav />
        </header>

        <main>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/OrderPage">
            <OrderPage items={items} />
          </Route>

          <Route path="/StoresPage">
            <StoresPage stores={stores} />
          </Route>
        </main>

        <footer className="footer">
          Copy right, modified{" "}
          {new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(new Date())}{" "}
          by Hung Le
        </footer>
      </Router>
    </div>
  );
}

export default App;
