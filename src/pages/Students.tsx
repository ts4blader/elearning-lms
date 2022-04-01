import React from "react";
import { Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import AllStudents from "@pages/students/AllStudents";
import AddStudent from "@pages/students/AddStudent";
import StudentDetail from "@pages/students/StudentDetail";

const Students = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`} exact>
        <AllStudents />
      </Route>
      <Route path={`${path}/add-student`} exact>
        <AddStudent />
      </Route>
      <Route path={`${path}/:id`}>
        <StudentDetail />
      </Route>
    </Switch>
  );
};

export default Students;
