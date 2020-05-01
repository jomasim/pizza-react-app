import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../src/views/Home";
import Checkout from "../src/views/Checkout";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
