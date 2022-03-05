import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "../components/Nav";
import { useRouteMatch } from "react-router-dom";
import Overview from "./Overview";

const DashBoard = () => {
  const { path } = useRouteMatch();

  return (
    <main className="dashboard-page">
      <div className="page-sider">
        <Nav rootPath={path} />
      </div>
      <div className="sider-placeholder"></div>
      <div className="page-content">
        <Switch>
          <Route path={path} exact>
            <Overview />
          </Route>
          <Route path={`${path}/chart`} exact>
            <Overview />
          </Route>
        </Switch>
      </div>
    </main>
  );
};

export default DashBoard;
