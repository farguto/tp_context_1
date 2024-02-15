import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreNosotros from "./paginas/SobreNosotros";
import Contacto from "./paginas/Contacto";
import Inicio from "./paginas/Inicio";
import Layout from "./paginas/Layout";
import Productos from "./paginas/Productos";
import NoPage from "./paginas/NoPage";
import { MenuProvider } from "./paginas/MenuContext";

function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="sobrenosotros" element={<SobreNosotros />} />
            <Route path="productos" element={<Productos />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MenuProvider>
  );
}

export default App;
