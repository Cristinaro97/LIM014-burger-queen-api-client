import React from 'react';
import { useHistory } from "react-router-dom";

const SeleccionRol = () => {
    const history = useHistory();

    return (
        <div>
            <h2>Seleccionar Rol</h2>
            <button onClick={()=>history.push('/mesero')}>Mesero</button>
            <button onClick={()=>history.push('/cocinero')}>Cocinero</button>
        </div>
    );
}

export default SeleccionRol;