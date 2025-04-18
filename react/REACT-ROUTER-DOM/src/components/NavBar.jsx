import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function NavBar() {
  const { userIsLogged, user, setUser, setUserIsLogged } =
    useContext(GlobalContext);
  const navegar = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setUserIsLogged(false);
    navegar("/");
  };

  const changeActive = ({ isActive }) =>
    isActive ? "text-success" : "text-danger";

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarExample"
          aria-controls="navbarExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand " href="#">
          <i className="fa-solid fa-bag-shopping"></i> FakeStore G89
        </a>
        <div className="collapse navbar-collapse" id="navbarExample">
          <ul className="navbar-nav me-auto mb-0">
            <li className="nav-item">
              <NavLink className={changeActive} aria-current="page" to="/">
                Inicio
              </NavLink>
            </li>
            {!userIsLogged && (
              <>
                <li className="nav-item">
                  <NavLink
                    className={`me-2 ${changeActive}`}
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-success" : "text-danger"
                    }
                    aria-current="page"
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
            {userIsLogged && (
              <li className="nav-item dropdown">
                <a
                  className="nav-NavLink dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/profile">
                      Ver perfil
                    </NavLink>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <img
                        style={{ width: "30px", borderRadius: "100%" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                        alt=""
                      />{" "}
                      {user.username}
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-danger font-weight-bold"
                      onClick={() => {
                        handleLogout();
                      }}
                    >
                      <i class="fa-solid fa-right-from-bracket"></i>{" "}
                      <b>Salir</b>
                    </button>
                  </li>
                </ul>
              </li>
            )}
            <li>
                    <NavLink className="dropdown-item" to="/admin">
                      Admin panel
                    </NavLink>
                  </li>
                  <button className="btn btn-primary" type="button" disabled={userIsLogged ? true : false}>
                    Test
                  </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
