import React from "react";
import "./styles/main.less";
import Login from "pages/Login";
import DashBoard from "pages/DashBoard";
import { Switch, Route } from "react-router-dom";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/dashboard" exact>
            <DashBoard />
          </Route>
        </Switch>
      </div>
    </ConfigProvider>
  );
}

export default App;
