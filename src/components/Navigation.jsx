import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <button>Inicio</button>
            <ul>
                <li>
                    <Link to="/administrador/empleados">Lista de Empleados</Link>
                </li>
                <li>
                    <Link to="/administrador/menu">Lista de Menú</Link>
                </li>

            </ul>
            <button>Salir</button>
        </nav>

    );
}

export default Navigation;