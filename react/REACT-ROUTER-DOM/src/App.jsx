import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Register from "./views/Register";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFound from "./views/NotFound";
import ProductDetail from "./views/ProductDetail";
import { GlobalContext } from "./context/GlobalContext";
import { useContext } from "react";
import User from "./views/User";
import Admin from "./views/Admin";

function App() {
  const {userIsLogged, user} = useContext(GlobalContext);
  console.log(user)
  return (
    <>
    

      <div className="d-flex flex-column min-vh-100 justify-content-between">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={userIsLogged ? <Navigate to={"/"} /> : <Login />} />
          <Route
            path="/profile"
            element={userIsLogged ? <Profile /> : <Navigate to={"/login"} />}
            />
          <Route path="/register" element={userIsLogged? <Navigate to={"/"} /> : <Register />} />
          <Route path="/product/:pepito" element={<ProductDetail />} />
          <Route path="/user/:nombre" element={<User />} />
          <Route path="/admin" element={user?.role === "admin" ? <Admin /> : <Navigate to={"/login"} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>

    </>
  );
}
export default App;
