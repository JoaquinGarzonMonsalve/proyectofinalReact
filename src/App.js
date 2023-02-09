import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailContainer";

import {Routes, Route} from 'react-router-dom'
import Carrito from "./componentes/Carrito";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar
          isclase="navbar"
          
          
        />

         <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          
          <Route path="/productos/:categoria" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/item/:id" element={<Carrito/>} />
          <Route path="*" element={<h1> 404</h1>} />
        </Routes> 

       

        
      </header>
    </div>
  );
}

export default App;
