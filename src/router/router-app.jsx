import React from 'react';
import {
    BrowserRouter as Router,
    // Redirect,
    Switch,
    Route,
} from "react-router-dom";
import AdmintradorPage from '../containers/Administrador';
import CocineroPage from '../Principal_pages/cocinero';
import MeseroPage from '../Principal_pages/mesero';
import LoginPage from '../Principal_pages/login'
import MainPage from '../containers/MainPage';
import SeleccionRol from '../containers/SeleccionRol';
import Employess from '../containers/Employess';

function RouterApp() {
    return (
        <MainPage>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <LoginPage />
                    </Route>
                    <Route path="/mesero">
                        <MeseroPage />
                    </Route>
                    <Route exact path="/cocinero">
                        <CocineroPage />
                    </Route>
                    <Route exact path="/administrador">
                        <AdmintradorPage />
                    </Route>
                    <Route exact path="/administrador/empleados">
                        <Employess />
                    </Route>
                    <Route exact path="/seleccion">
                        <SeleccionRol />
                    </Route>
                </Switch>
            </Router>
        </MainPage>
    );
}

export default RouterApp;
