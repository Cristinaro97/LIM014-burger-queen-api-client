import React from 'react';
import {
    BrowserRouter as Router,
    // Redirect,
    Switch,
    Route,
} from "react-router-dom";
import AdmintradorPage from '../Principal_pages/administrador';
import CocineroPage from '../Principal_pages/cocinero';
import MeseroPage from '../Principal_pages/mesero';
import MenuPrincipal from '../menu';
import LoginPage from '../Principal_pages/login'


function RouterApp() {
  return (
    <Router>
        <MenuPrincipal/>
        <Switch>
        <Route exact path = "/">
            <LoginPage/>
        </Route>
        <Route exact path = "/mesero">
            <MeseroPage/>
        </Route>
        <Route exact path = "/cocinero">
            <CocineroPage/>
        </Route>
        <Route exact path = "/administrador">
            <AdmintradorPage/>
        </Route>
        </Switch>
    </Router>
  );
}

export default RouterApp;
