import Publicidad from "./components/Publicidad";
import NavBar from "./components/NavBar";
import Promocion from "./components/Promocion";
import Ofertas from "./components/Ofertas";
import ItemListContainer from "./components/ItemListContainer";
import Publicidad2 from "./components/Publicidad2";
import Footer from "./components/Footer";


function App() {
  return (
    <>
       <Promocion />
       <NavBar />
       <Publicidad />
       <Ofertas />
       <ItemListContainer texto={"No se encontro el producto!"}/>
       <Publicidad2 />
       <Footer />
       
    </>
  )
}

export default App
