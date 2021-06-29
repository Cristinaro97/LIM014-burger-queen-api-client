import React, { Fragment } from "react";
import axios from "axios";
import { END_POINT_AUTH, END_POINT_USERS } from "../config";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();
  // const [token, setToken] = useState({}); // hooks
  // setToken: Es el método creado con useState que sirve para cambiar el valor de la variable token
  // que se encuentra en el estado

  //  const [admin, setAdmin] = useState(true);

  const loginUser = () => {
    const getToken = async () => {
      const result = await axios
        .post(END_POINT_AUTH, {
          email: document.getElementById("txtEmail").value,
          password: document.getElementById("txtPassword").value,
        })
        .catch((error) => {
          alert("Error de acceso");
        });

      return result;
    };

    const getRol = async () => {
      const token = localStorage.getItem("token");
      const result = axios({
        method: "get",
        url: `${END_POINT_USERS}/${document.getElementById("txtEmail").value}`,
        headers: { Authorization: `Bearer ${token}` },
      });
      return result;
    };

    getToken().then((result) => {
      if (result !== undefined) {
        localStorage.setItem("token", result.data.token);
        getRol().then((response) => {
          if (response.data.rol.admin) {
            history.push("/administrador");
          } else if (response.data.rol.name === "cocinero") {
            history.push("/cocinero");
          } else if (response.data.rol.name === "mesero") {
            history.push("/mesero");
          }
        });
      }
    });
  };

  //  useEffect(()=>{  //Se lanza cada vez que se cambia el estado

  //   console.log("estado",token);

  // });

  return (
    <Fragment>
      <h1>Iniciar Sesión</h1>
      <p>Ingresa tu correo electrónico</p>
      <input id="txtEmail"></input>
      <p>Ingresa tu contraseña</p>
      <input id="txtPassword"></input>
      <button onClick={() => loginUser()}>Iniciar</button>
    </Fragment>
  );
}

export default LoginPage;
