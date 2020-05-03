import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import stockDash from './stock';

const Stocks = ({ match }) => (
    <div className="stocks-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/home`} />
            <Route path={`${match.url}/:symbol`} exact component={stockDash} />
            <Redirect to="/error" />

        </Switch>
    </div>
);
export default Stocks;