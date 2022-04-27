import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Nav from "@layouts/Nav";
import DeleteModal from "@layouts/DeleteModal";
import FormModal from "@layouts/FormModal";
import Overview from "@pages/Overview";
import Database from "@pages/Database";
import ClassDetail from "@pages/ClassDetail";
import StudentsPage from "@pages/Students";
import LecturePage from "@pages/Lectures";
import ExaminationPage from "@pages/Examination";

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
            <StudentsPage />
          </Route>
          <Route path={`${path}/lecture`}>
            <LecturePage />
          </Route>
          <Route path={`${path}/examination`}>
            <ExaminationPage />
          </Route>
        </Switch>
      </div>
    </main>
  );
};

export default DashBoard;
