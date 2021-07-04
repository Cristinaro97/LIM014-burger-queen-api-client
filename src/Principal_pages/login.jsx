import React,{Fragment} from "react";
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
  
const getUser = async (access_token, user_email) => {
    const result = await axios
      .get(`${END_POINT_USERS}/${user_email}`,
        {
          headers: {
            'Authorization': `Bearer ${access_token}`
          }
        }
      )
      .catch((error) => {
        alert("ERROR OBTENIENDO USUARIO DEL API");
      });

    return result;
  };
  getToken().then((result) => {
    if (result !== undefined) {
    const access_token = result.data.token;
   localStorage.setItem("token", access_token);
  const user_email = document.getElementById("txtEmail").value;
  getUser(access_token, user_email).then((responseUser) => {

    const isAdmin = responseUser.data.roles.admin;
      if(isAdmin===true){
        history.push('/administrador');
      }else{
        history.push('/seleccion');
      }
})

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
