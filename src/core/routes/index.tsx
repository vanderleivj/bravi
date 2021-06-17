import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

//Local Imports
import routerHistory from './routerHistory';

//Pages
import { ThemeSelection } from '../../pages/ThemeSelection/themeSelection'

export default function Routes():any{
  return (
    <Router history={routerHistory}>
      <Switch>
        <Route path="/" exact component={ThemeSelection} />
      </Switch>
    </Router>
  )
};

