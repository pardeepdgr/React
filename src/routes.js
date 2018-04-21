import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Container from './container';
import CounterPage from './pages/counterPage';

export default (
    <Route path='/' component={Container}>
        <Route path='counter' component={CounterPage} />
    </Route>
);