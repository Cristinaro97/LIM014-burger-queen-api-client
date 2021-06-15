import {
  Link, Switch, Route
} from "react-router-dom";

function CocineroPage() {
    return (
      <div>
        <h1>Menú del Cocinero</h1>
        <ul>
          <li>
            <Link to="/cocinero/pedidosingresados">Pedidos Ingresados</Link>
          </li>
          <li>
            <Link to="/cocinero/estadopedidos">Estado de Pedidos</Link>
          </li>
        </ul>
        <Switch>
          <Route>
  
          </Route>
        </Switch>
      </div>
    );
  }
  
  export default CocineroPage;
  