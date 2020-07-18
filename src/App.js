import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInSignOut from "./pages/SignInSignOut/SignInSignOut";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInSignOut} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
