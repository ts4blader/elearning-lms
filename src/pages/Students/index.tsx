import React from "react";
import { Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import AllStudents from "./AllStudents";
import AddStudent from "./AddStudent";
import StudentDetail from "./StudentDetail";
import StudentEdit from "./StudentEdit";
import StudentTransfer from "./StudentTransfer";
import StudentReserve from "./StudentReserve";

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
      <Route path={`${path}/transfer`} exact>
        <StudentTransfer />
      </Route>
      <Route path={`${path}/reserve`} exact>
        <StudentReserve />
      </Route>
      <Route path={`${path}/:studentId`} exact>
        <StudentDetail />
      </Route>
      <Route path={`${path}/:studentId/edit`} exact>
        <StudentEdit />
      </Route>
    </Switch>
  );
};

export default StudentsPage;
