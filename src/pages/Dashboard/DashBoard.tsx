import React, { useEffect } from "react";
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
import { useAppDispatch } from "@hooks";
//import all fetch method
import { fetchSubjectType } from "@slices/subjectTypeSlice";
import { fetchSubject } from "@slices/subjectSlice";
import { fetchSubjectGroup } from "@slices/subjectGroupSlice";
import { fetchClassType } from "@slices/classTypeSlice";
import { fetchScoreType } from "@slices/scoreTypeSlice";
import { fetchSchoolYear } from "@slices/schoolYearSlice";
import { fetchGrade } from "@slices/gradeSlice";
import { fetchEducationLevel } from "@slices/educationLevelSlice";

import { seedAll } from "@services/firebase/seeder";

const DashBoard = () => {
  const { path } = useRouteMatch();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadAllData = () => {
      dispatch(fetchSubjectType());
      dispatch(fetchSubject());
      dispatch(fetchSubject());
      dispatch(fetchSubjectGroup());
      dispatch(fetchClassType());
      dispatch(fetchScoreType());
      dispatch(fetchSchoolYear());
      dispatch(fetchGrade());
      dispatch(fetchEducationLevel());
    };
    // excute load all data
    loadAllData();
  }, [dispatch]);

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
