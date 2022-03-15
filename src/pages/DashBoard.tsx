import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "@components/Nav";
import { useRouteMatch } from "react-router-dom";
import Overview from "@pages/Overview";
import Database from "@pages/Database";
import DeleteModal from "@components/DeleteModal";

const DashBoard = () => {
  const { path } = useRouteMatch();

  return (
    <main className="dashboard-page">
      {/* Delete Modal */}
      <DeleteModal />
      {/* Page sider */}
      <div className="page-sider">
        <Nav rootPath={path} />
      </div>
      <div className="sider-placeholder"></div>
      {/* Page content */}
      <div className="page-content">
        <Switch>
          <Route path={path} exact>
            <Overview />
          </Route>
          <Route path={`${path}/database`} exact>
            <Database />
          </Route>
        </Switch>
      </div>
    </main>
  );
};

export default DashBoard;
