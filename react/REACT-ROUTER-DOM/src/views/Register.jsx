import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function Register() {

  const { setUser, setUserIsLogged } = useContext(GlobalContext);


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navegar = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert("Las contraseñas no coinciden");
      return
    }
    else {
      setUser({
        username: username,
        password: password,
        role: "admin"
      })
      localStorage.setItem("user", JSON.stringify({username, password}))
      setUserIsLogged(true)
      navegar("/")
    }
  };


  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit}>
      <h1>Registrarse ahora</h1>
        <div className="mb-3 mt-5">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombre de usuario
          </label>
          <input
            type="username"
            className="form-control"
            id="exampleInputusername1"
            aria-describedby="usernameHelp"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Repite la contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </form>
    </div>
  );
}
