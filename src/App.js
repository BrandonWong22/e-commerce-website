import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Hats = () => {
  return <div>Hats</div>;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={Hats} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
