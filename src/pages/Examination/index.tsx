import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Examination from "./Examination";
import ClassesList from "./ClassesList";

const ExaminationPage = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}`} exact>
        <Examination />
      </Route>
      <Route path={`${url}/:examId`}>
        <ClassesList />
      </Route>
    </Switch>
  );
};

export default ExaminationPage;
