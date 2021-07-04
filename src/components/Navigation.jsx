import React from "react";
import {
    PANEL_EMPLOYESS,
    PANEL_PRODUCTS
} from '../config';

const Navigation = ({setCurrentPanel}) => {
  return (
    <nav>
      <h2>BURGERQUEEN</h2>
      <ul>
        <li>
          <button onClick={()=>setCurrentPanel(PANEL_EMPLOYESS)}>Empleados</button>
        </li>
        <li>
          <button onClick={()=>setCurrentPanel(PANEL_PRODUCTS)}>Productos</button>
        </li>
      </ul>
      <button>Salir</button>
    </nav>
  );
};

export default Navigation;
