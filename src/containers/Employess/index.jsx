import React, { useState, useEffect } from "react";
import axios from "axios";
import { END_POINT_USERS } from "../../config";
import EmployeeItem from "../../components/EmployeItem";

const Employess = () => {
  const [users, setUsers] = useState([]);

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
        <h3> Listado de Empleados</h3>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <EmployeeItem name={user.name} />
            </li>
          ))}
        </ul>
      </div>
      Datos del Trabajador
    </div>
  );
};

export default Employess;
