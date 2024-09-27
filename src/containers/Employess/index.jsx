import React, { useState, useEffect } from "react";
import axios from "axios";
import { END_POINT_USERS } from "../../config";
import ItemList from "../../components/ItemList";
import UserForm from "../../components/UserForm";
import { ACTION_CREATE, ACTION_EDIT } from "../../config";

const Employess = () => {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState();
  const [action, setAction] = useState();

  const getAllUsers = async (access_token) => {
    const result = await axios
      .get(END_POINT_USERS, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .catch((error) => {
        alert("ERROR OBTENIENDO USUARIOS DEL API");
      });

    return result;
  };

  const handleEdit = (user) => {
    setUserSelected(user);
    setAction(ACTION_EDIT);
  };

  const handleCreate = () => {
    const newUser = {
      name: "",
      dni: "",
      email: "",
      phone: "",
    };
    setUserSelected(newUser);
    setAction(ACTION_CREATE);
  };

  const handleDelete = (id) => {
    const access_token = localStorage.getItem("token");
    axios
      .delete(`${END_POINT_USERS}/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((resp) => {
        console.log(resp);
        getAllUsers(access_token).then((response) => {
          setUsers(response.data);
        });
      })
      .catch((error) => {
        alert("ERROR OBTENIENDO USUARIOS DEL API");
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    getAllUsers(token).then((response) => {
      setUsers(response.data);
      console.log("USUARIOS", users);
    });
  }, []);

  return (
    <div>
      <div>
        <button onClick={handleCreate}>+ AGREGAR EMPLEADO</button>
        <p>Ingrese los datos del nuevo empleado</p>
        <h3> Listado de Empleados</h3>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <ItemList
                name={user.name}
                handleEdit={() => {
                  handleEdit(user);
                }}
                handleDelete={() => {
                  handleDelete(user._id);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      <UserForm
        userSelected={userSelected}
        setUserSelected={setUserSelected}
        action={action}
        getAllUsers={getAllUsers}
        setUsers={setUsers}
      />
    </div>
  );
};

export default Employess;
