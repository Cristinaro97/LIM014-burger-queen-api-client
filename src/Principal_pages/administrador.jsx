import { Link, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
import {END_POINT_USERS} from '../config'

function AdmintradorPage() {
 
  useEffect(() => {
    var token = localStorage.getItem("token");
    axios({
      method: "get",
      url: END_POINT_USERS,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
  return (
    <div>
      <h1>Menú de Administrador</h1>
      <ul>
        <li>
          <Link to="/administrador/empleados">Lista de Empleados</Link>
        </li>
        <li>
          <Link to="/administrador/menu">Lista de Menú</Link>
        </li>
        <li>
          <Link to="/">Cerrar Sesión</Link>
        </li>
      </ul>
      <Switch>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default AdmintradorPage;
