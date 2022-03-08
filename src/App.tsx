import React from "react";
import "./styles/main.less";
import Login from "@pages/Login";
import DashBoard from "@pages/DashBoard";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
