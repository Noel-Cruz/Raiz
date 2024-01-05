import { BrowserRouter,Routes,Route } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import Categorias from "./componentes/Categorias/Categorias";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar/>
          <Categorias />
        </header>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
