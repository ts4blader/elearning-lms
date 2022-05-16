import Card from "@components/Card";
import Page from "@components/Page";
import React from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import ClassType from "./ClassType";
import SubjectType from "./SubjectType";
import EducationLevel from "./EducationLevel";
import { CARDS_DATA } from "./data";

export default function Setting() {
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={url} exact>
        <Page title="Cài đặt hệ thống" className="setting-page">
          <div className="cards-container">
            {CARDS_DATA.map((el) => (
              <Card
                key={el.title}
                title={el.title}
                description={el.description}
                variant={el.variant as any}
                onClick={() => history.push(`${url}/${el.link}`)}
              />
            ))}
          </div>
        </Page>
      </Route>
      <Route path={`${url}/class-type`}>
        <ClassType />
      </Route>
      <Route path={`${url}/subject-type`}>
        <SubjectType />
      </Route>
      <Route path={`${url}/education-level`}>
        <EducationLevel />
      </Route>
    </Switch>
  );
}
