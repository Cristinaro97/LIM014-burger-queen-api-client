import {
  Link, Switch, Route
} from "react-router-dom";


function AdmintradorPage() {
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
        </ul>
        <Switch>
          <Route></Route>
        </Switch>

    </div>
  );
}

export default AdmintradorPage;
