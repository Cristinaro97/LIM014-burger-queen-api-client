import React, { Fragment } from "react";
import axios from "axios";
import { ACTION_CREATE, ACTION_EDIT, END_POINT_USERS } from "../config";

const UserForm = (props) => {
  const { userSelected, setUserSelected, action, getAllUsers, setUsers } = props; // destructuracion

  const reloadList = (access_token) => {
    getAllUsers(access_token).then((response) => {
      setUsers(response.data);
      setUserSelected(null);
    });
  }

  const saveData = () => {
    const access_token = localStorage.getItem("token");

    if (action === ACTION_EDIT) {
      axios
        .put(`${END_POINT_USERS}/${userSelected._id}`, userSelected, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((response) => {
          reloadList(access_token);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (action === ACTION_CREATE) {
      axios
        .post(
          END_POINT_USERS,
          {
            ...userSelected,
            password: "user",
            roles: {
              admin: false,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        )
        .then((response) => {
          reloadList(access_token);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

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
        <button onClick={saveData}>Guardar</button>
        <br />
      </Fragment>
    );
  } else {
    return null;
  }
};

export default UserForm;
