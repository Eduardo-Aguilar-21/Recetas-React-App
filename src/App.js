import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { MenuRecetas } from './Componentes/menuRecetas';
import { NavBarC } from './Componentes/navBarC';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MenuDetalle } from './Componentes/menuDetalle';

function App() {
  return (
    <Router>
      <div className="App">
          <NavBarC />
          <Routes>
            <Route exact path='/' element={<MenuRecetas lik={'http://localhost:8080/api/receta'} />} />
            <Route exact path='/desayuno' element={<MenuRecetas lik={`http://localhost:8080/api/receta/cat/${1}`} />} />
            <Route exact path='/almuerzo' element={<MenuRecetas lik={`http://localhost:8080/api/receta/cat/${2}`} />} />
            <Route exact path='/cena' element={<MenuRecetas lik={`http://localhost:8080/api/receta/cat/${3}`} />} />
            <Route exact path='/detalle/:rec' element={<MenuDetalle />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
