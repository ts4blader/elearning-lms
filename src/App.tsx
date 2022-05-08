import React from "react";
import "@styles/main.less";
import Login from "@pages/Login";
import DashBoard from "@pages/Dashboard";
import { Switch, Route } from "react-router-dom";
import ErrorBoundary from "@components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="app" id="app">
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
        </Switch>
      </div>
    </ErrorBoundary>
  );
}

export default App;
