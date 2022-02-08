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
          <h1>Local online Groceries Shopping</h1>
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
        <footer>Copy right by Hung Le, modified on {Date()}</footer>
      </Router>
    </div>
  );
}

export default App;
