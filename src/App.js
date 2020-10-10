import React from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Router path="/checkout">
            <Checkout/>
          </Router>
          <Router path="/">
            <Home />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
