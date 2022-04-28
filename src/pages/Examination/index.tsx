import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Examination from "./Examination";
import ClassesList from "./ClassesList";
import Transcript from "./Transcript";

const ExaminationPage = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}`} exact>
        <Examination />
      </Route>
      <Route path={`${url}/:examId`} exact>
        <ClassesList />
      </Route>
      <Route path={`${url}/:examId/transcript`}>
        <Transcript />
      </Route>
    </Switch>
  );
};

export default ExaminationPage;
