import React from "react";
import { Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import AllStudents from "./AllStudents";
import AddStudent from "./AddStudent";
import StudentDetail from "./StudentDetail";
import StudentEdit from "./StudentEdit";

const StudentsPage = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`} exact>
        <AllStudents />
      </Route>
      <Route path={`${path}/add-student`} exact>
        <AddStudent />
      </Route>
      <Route path={`${path}/:id`} exact>
        <StudentDetail />
      </Route>
      <Route path={`${path}/:id/edit`}>
        <StudentEdit />
      </Route>
    </Switch>
  );
};

export default StudentsPage;
