import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux';

import Login from "./pages/AUTH/Login";
import SignUp from "./pages/AUTH/SignUp";
import {AuthContextProvider} from "./context/AuthContextProvider";
import PrivateRoute from "./pages/AUTH/PrivateRoute";

import App from './App';
import  Civilizations  from './pages/Civilizations';
import  Units  from './pages/Units';
import  HomePage  from './pages/HomePage';
import  Structures  from './pages/Structures';
import  CivilizationInfo  from './pages/CivilizationInfo';
import  StructureInfo  from './pages/StructureInfo';
import  UnitInfo  from './pages/UnitInfo';
import  Technologies  from './pages/Technologies';
import  TechnologyInfo  from './pages/TechnologyInfo';
import {NotFound} from './pages/NotFound/NotFound';
import 'normalize.css';

ReactDOM.render(

  <Provider store = {store}>
    <AuthContextProvider>
    <Router>

        <App>
          <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />

          <Route path = '/' exact component = {HomePage}/>
          <PrivateRoute path = '/civilizations' exact component = {Civilizations}/>
          <PrivateRoute path = '/civilization/:id' exact component = {CivilizationInfo}/>
          <PrivateRoute path = '/units' exact component = {Units}/>
          <PrivateRoute path = '/unit/:id' component = {UnitInfo}/>
          <PrivateRoute path = '/structures' exact component = {Structures}/>
          <PrivateRoute path = '/structure/:id' component = {StructureInfo}/>
          <PrivateRoute path = '/technologies' exact component = {Technologies}/>
          <PrivateRoute path = '/technology/:id' component = {TechnologyInfo}/>
            <Route path="" component={NotFound} />
          </Switch>
        </App>

    </Router>
    </AuthContextProvider>
  </Provider>,
  document.getElementById('root')
);

