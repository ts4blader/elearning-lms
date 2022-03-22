import React from "react";
import { Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import AllStudents from "@pages/students/AllStudents";

const Students = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`}>
        <AllStudents />
      </Route>
    </Switch>
  );
};

export default Students;
