import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Nav from "@layouts/Nav";
import Overview from "@pages/Overview";
import Database from "@pages/Database";
import ClassDetail from "@pages/ClassDetail";
import Students from "@pages/Students";
import DeleteModal from "@layouts/DeleteModal";
import FormModal from "@layouts/FormModal";
import Header from "@layouts/Header";

const DashBoard = () => {
  const { path } = useRouteMatch();

  return (
    <main className="dashboard-page">
      {/* Delete Modal */}
      <DeleteModal />
      {/* Form Modal */}
      <FormModal />
      {/* Page sider */}
      <div className="page-sider">
        <Nav rootPath={path} />
      </div>
      <div className="sider-placeholder"></div>
      {/* Page content */}
      <div className="page-content">
        {/* Header */}
        <Header />
        <Switch>
          <Route path={path} exact>
            <Overview />
          </Route>
          <Route path={`${path}/database`} exact>
            <Database />
          </Route>
          <Route path={`${path}/database/classes/:classId`} exact>
            <ClassDetail />
          </Route>
          <Route path={`${path}/student`}>
            <Students />
          </Route>
        </Switch>
      </div>
    </main>
  );
};

export default DashBoard;
