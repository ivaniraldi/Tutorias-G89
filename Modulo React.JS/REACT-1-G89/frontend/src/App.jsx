import './App.css'
import NavBar from './components/Navbar'
import Home from "./views/Home"

function App() {

  const porcentajeDelModulo = 100

  return (
    <div>
      <NavBar></NavBar>
      {porcentajeDelModulo == 100 ? <h2>Modulo de React Completado</h2> : <h2>Aun estamos aprendiendo React</h2>}
      <Home />
        <footer></footer>
    </div>
  )
}

export default App
