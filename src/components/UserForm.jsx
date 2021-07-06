import React, { Fragment } from "react";
import axios from "axios";
import handleEdit from "../containers/Employess/index"
import handleCreate from "../containers/Employess/index"

const UserForm = (props) => {
  const { userSelected, setUserSelected, saveUser } = props; // destructuracion

  const saveData = () =>{
    if (saveUser === handleEdit){
      axios.put(userSelected)
    } else if (saveUser === handleCreate){
      axios.post(userSelected)
    }
    // si action = editar
    //axios.put(userSelected)
    // de lo contrario si action = crear 
    //axios.post(userSelected)
  }

  if (userSelected) {
    const onChangeHandler = (e) => {
      setUserSelected({
        ...userSelected, // spread operator
        [e.target.name]: e.target.value,
      });
    };

    return (
      <Fragment>
        <h3>Datos de Empleados</h3>
        <label>Nombre:</label>
        <input
          name="name"
          type="text"
          value={userSelected.name}
          onChange={onChangeHandler}
        />
        <br />
        <label>DNI:</label>
        <input
          name="dni"
          type="text"
          value={userSelected.dni}
          onChange={onChangeHandler}
        />
        <br />
        <label>Correo Electrónico:</label>
        <input
          type="text"
          name="email"
          value={userSelected.email}
          onChange={onChangeHandler}
        />
        <br />
        <label>Teléfono:</label>
        <input
          type="text"
          name="phone"
          value={userSelected.phone}
          onChange={onChangeHandler}
        />
        <br />
        <button 
        onClick={saveData
        }
        >Guardar</button>
        <br />
      </Fragment>
    );
  } else {
    return null;
  }
};

export default UserForm;
