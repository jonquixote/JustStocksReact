import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import defaultDash from './default';
import contentDash from './content';
import analyticsDash from './analytics';
import ecommerceDash from './ecommerce';
import strategyDash from './strategy';
import homeDash from './home';

const Dashboards = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/home`} exact component={homeDash} />
            <Route path={`${match.url}/:strategy_name`} exact component={strategyDash} />
            <Route path={`${match.url}/default`} component={defaultDash} />
            <Route path={`${match.url}/content`} component={contentDash} />
            <Route path={`${match.url}/ecommerce`} component={ecommerceDash} />
            <Route path={`${match.url}/analytics`} component={analyticsDash} />
            <Redirect to="/error" />

        </Switch>
    </div>
);
export default Dashboards;