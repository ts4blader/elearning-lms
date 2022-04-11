import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AllLecture from "./AllLecture";

const Lectures = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}`}>
        <AllLecture />
      </Route>
      <Route path={`${url}/schedule`}>abc</Route>
    </Switch>
  );
};

export default Lectures;
