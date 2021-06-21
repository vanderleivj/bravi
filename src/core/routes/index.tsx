import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

//Local Imports
import routerHistory from './routerHistory';

//Pages
import { ThemeSelection } from '../../pages/ThemeSelection/themeSelection';
import { ThemeEdit } from '../../pages/ThemeEdit/themeEdit'

export default function Routes():any{
  return (
    <Router history={routerHistory}>
      <Switch>
        <Route path="/" exact component={ThemeSelection} />
        <Route path="/theme-edit" exact component={ThemeEdit} />
      </Switch>
    </Router>
  )
};

