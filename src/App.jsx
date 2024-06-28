
import { CarritoDetalle } from './components/Compra/CarritoDetalle';
import { Contacto } from './components/Contacto/Contacto';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from "./components/Hero/Hero";
import { Productos } from './components/Productos/Productos';
import { SeccionPrincipal } from './components/SeccionPrincipal/SeccionPrincipal';
import { CartProvider} from './context/CartContext'
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <CartProvider>
      <BrowserRouter>
        <Header/> 
        <Routes>          
            <Route path="/"  element={
            <>
              <Hero />
              <SeccionPrincipal />
            </>
            }>            
          </Route>
          <Route path="/productos" element={<Productos />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/carrito" element={<CarritoDetalle />}></Route>
          {/* <Route path="/carritoDetail" element={<CarritoDetail/>}></Route>
          <Route path="/category/:categoryId"  element={<ItemListContainer />}></Route>          
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}></Route>  */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
