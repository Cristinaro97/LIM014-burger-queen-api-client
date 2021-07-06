import React from "react";
import { PANEL_EMPLOYESS, PANEL_PRODUCTS } from "../config";
import { useHistory } from "react-router-dom";

const Navigation = ({ setCurrentPanel }) => {
  const history = useHistory();
  return (
    <nav className="menuPrincipal">
      <h2>BURGERQUEEN</h2>
      <ul className="menuOptions">
        <li>
          <button onClick={() => setCurrentPanel(PANEL_EMPLOYESS)}>
            Empleados
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentPanel(PANEL_PRODUCTS)}>
            Productos
          </button>
        </li>
      </ul>
      <button onClick={() => history.push("/")}>
        <span class="material-icons">logout</span>
      </button>
    </nav>
  );
};

export default Navigation;
