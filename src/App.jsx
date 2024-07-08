
import { Admin } from './components/Admin/Admin';
import { CarritoDetalle } from './components/Compra/CarritoDetalle';
import { DatosComprador } from './components/Compra/DatosComprador';
import { Contacto } from './components/Contacto/Contacto';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from "./components/Hero/Hero";
import { DetalleProducto } from './components/Productos/DetalleProducto';
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
          <Route path="/productos/:id" element={<DetalleProducto />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/carrito" element={<CarritoDetalle />}></Route>
          <Route path="/informacionCompra" element={<DatosComprador />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
