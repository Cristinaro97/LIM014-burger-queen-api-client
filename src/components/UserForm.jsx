import React, { Fragment } from "react";

const UserForm = ({ userSelected }) => {
  if (userSelected) {
    return (
      <Fragment>
        <h2>Datos de Empleados</h2>
        <label>Nombre:</label>
        <input type='text' value={ userSelected.name}/>
        <br />
        <label>DNI:</label>
        <input type='text' value={ userSelected.dni}/>
        <br />
        <label>Correo Electrónico:</label>
        <input type='text' value={ userSelected.email}/>
        <br />
        <label>Teléfono:</label>
        <input type='text' value={ userSelected.phone}/>
        <br />
        <label>Puesto:</label>
        <br />
        <button>Guardar</button>
        <br />
      </Fragment>
    );
  }else {
     return null;
  }
};

export default UserForm;
