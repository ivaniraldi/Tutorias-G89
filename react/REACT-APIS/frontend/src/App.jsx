import { useEffect, useRef, useState } from "react";
import "./App.css";
import Home from "./views/Home";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [user, setUser] = useState({});
  const [lastName, setLastName] = useState("");
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const inputApellidoReferencia = useRef();

  const inputNombre = useRef();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const getTareas = async () => {
    const response = await fetch(
      "https://api.gameofthronesquotes.xyz/v1/random"
    );
    const data = await response.json();
    setUser(data);
    console.log(data);
  };

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getTareas();
  }, [count]);

  useEffect(() => {
    inputNombre.current.focus();
    getData();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };
  //Filtrado de datos

  let results = [];

  if (!search) {
    results = users;
  } else {
    results = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.username.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <>
      <Home frase={user} />
      <input
        type="text"
        value={name}
        onChange={(e) => handleChange(e)}
        ref={inputNombre}
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        ref={inputApellidoReferencia}
      />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Cambiar Frase
        </button>
      </div>

      <div>
        <input
          type="text"
          placeholder="search"
          className="form-control"
          value={search}
          onChange={handleSearch}
        />
        <table className="table table-striped table-hover my-4 shadow-lg">
          <thead>
            <tr>
              <th>Name</th>
              <th>User name</th>
            </tr>
          </thead>
          <tbody>
          {results != [] ? results.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user?.username ? user.username : "Sin nombre de usuario"}</td>
              </tr>
            )) : (
              <tr>
                <td>No hay usuarios disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
