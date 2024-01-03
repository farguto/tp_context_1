import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Beneficios from './paginas/Beneficios';
import Contacto from './paginas/Contacto';
import Inicio from './paginas/Inicio';
import Layout from './paginas/Layout';
import Productos from './paginas/Productos';
import NoPage from './paginas/NoPage';


function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<Inicio/>} />
              <Route path='beneficios' element={<Beneficios/>}/>
              <Route path='productos' element={<Productos/>}/>
              <Route path='contacto' element={<Contacto/>} />
              <Route path='*' element={<NoPage/>} />
 
          </Route>
      </Routes>
   </BrowserRouter>

  )
}

export default App
