import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const apiUrl = "https://fakestoreapi.com/products";
  const [user, setUser] = useState(null);
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    console.log("Llamando a la API");
    const respuesta = await fetch(apiUrl);
    let data = await respuesta.json();
    setProducts(data);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) || null)
    getProducts();
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        userIsLogged,
        setUserIsLogged,
        getProducts,
        products,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
