import '../../style/Header.scss'
import {  useNavigate } from "react-router-dom";


function Header() {

    const navigate = useNavigate();

    const handleLogout = () => {
      // sortir le token du local storage
      localStorage.removeItem("jwt");
  
      // redirige l'utilisateur vers la page de login
      navigate("/");
    };
    
    return (
        <header>
           

                <nav>
                   
                        <ul id="menu">

                            <li><a href="/">Home</a></li>
                            <li><a href="/parcours">Parcours</a></li>
                            <li><a href="#!">Prestations</a></li>
                            <li><a href="/reviewPage">Galerie</a></li>
                            <li><a href="/login"><button>Connexion</button></a></li>
                            <li><button onClick={handleLogout}>Déconnection</button></li>

                        </ul>
                </nav>


        </header>
    )
}
export default Header