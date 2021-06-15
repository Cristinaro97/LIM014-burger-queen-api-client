import {
    Link, 
} from "react-router-dom";

function MenuPrincipal() {
  return (
    <nav>
        <h1>BurgerQueen</h1>
        <ul>
            <li>
             <Link to = "/">Login</Link> 
            </li>
            <li>
             <Link to = "/mesero">Mesero</Link> 
            </li>
            <li>
             <Link to = "/cocinero">Cocinero</Link> 
            </li>
            <li>
             <Link to = "/administrador">Administrador</Link> 
            </li>
        </ul>
    
    
    </nav>
  );
}

export default MenuPrincipal;
