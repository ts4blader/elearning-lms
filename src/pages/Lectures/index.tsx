import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AllLecture from "./AllLecture";
import LectureDetail from "./LectureDetail";
import AddLecture from "./AddLecture";

const Lectures = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}`} exact>
        <AllLecture />
      </Route>
      <Route path={`${url}/add-lecture`} exact>
        <AddLecture />
      </Route>
      <Route path={`${url}/schedule`} exact>
        abc
      </Route>
      <Route path={`${url}/:lectureId`}>
        <LectureDetail />
      </Route>
    </Switch>
  );
};

export default Lectures;
