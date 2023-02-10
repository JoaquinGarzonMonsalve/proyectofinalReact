import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Checkout from "./componentes/Checkout";
import { Routes, Route } from "react-router-dom";
import Carrito from "./componentes/Carrito";
import CustomProvider from "./componentes/CustomProvider";

function App() {
  return (
    <CustomProvider>
      <div className="App">
        <header className="App-header">
          <NavBar isclase="navbar" />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/productos/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1> 404</h1>} />
          </Routes>
        </header>
      </div>
    </CustomProvider>
  );
}

export default App;
