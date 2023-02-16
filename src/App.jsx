import './App.css'; 
import 'react-toastify/dist/ReactToastify.css';

//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Toastify
import { ToastContainer} from 'react-toastify';

//Components 
import { Navbar } from './componentes/NavBar/NavBar';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './componentes/Checkout/Checkout';
import { Cart } from './Cart/Cart';
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <ToastContainer/>   
      </BrowserRouter>  
    </>
  )
}

