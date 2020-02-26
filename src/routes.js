import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { PrivateRoute } from './PrivateRoute';

const routing = () =>(
    <div>
    <Switch>
    <PrivateRoute exact path="/" component={Dashboard} label="Home"/>
        <Route path="/login" component={Login} />
    </Switch>
    </div>
)
export default routing;