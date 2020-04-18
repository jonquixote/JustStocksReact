import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import surveyApp from "./survey";
import surveyDetailApp from "./survey-detail";
import chatApp from "./chat";

const Applications = ({ match }) => (
  <div className="dashboard-wrapper">
    <Switch>
      <Route
        path={`${match.url}/survey/:surveyid`}
        component={surveyDetailApp}
        isExact
      />
      <Route path={`${match.url}/survey`} component={surveyApp} isExact/>
      <Route path={`${match.url}/chat`} component={chatApp} />
      <Redirect to="/error" />
    </Switch>
  </div>
);
export default Applications;
