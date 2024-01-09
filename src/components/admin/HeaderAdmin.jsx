import { Link, useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // sortir le token du local storage
    localStorage.removeItem("jwt");

    // redirige l'utilisateur vers la page de login
    navigate("/loginPage");
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/admin/">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/review">Gérer les coworkings</Link>
          </li>
          <li>
            <Link to="/admin/review/create">Créer un coworking</Link>
          </li>
        </ul>
        <button onClick={handleLogout}>Se déconnecter</button>
      </nav>
    </header>
  );
};

export default HeaderAdmin;