import {
  Link 
} from "react-router-dom";
function MeseroPage() {
  //'path' nos permite construir rutas relativas <Route> , mientras que 'url' nos permite construir enlaces relativos<Link>o<NavLink

    return (
      <div>
        <h1>Menú del Mesero</h1>
        <ul>
          <li>
            <Link to="/mesero/carta">Carta</Link>
          </li>
          <li>
            <Link to="/mesero/nuevopedido">Nuevo Pedido</Link>
          </li>
          <li>
            <Link to="/mesero/estadopedido">Estado de Pedido</Link>
          </li>
          <li>
          <Link to="/">Cerrar Sesión</Link>
        </li>
        </ul>
      </div>
    );
}
  
  export default MeseroPage;