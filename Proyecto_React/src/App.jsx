import React from 'react';
import Promocion from './components/Promocion';
import NavBar from './components/NavBar';
import Publicidad from './components/Publicidad';
import ItemListContainer from './components/ItemListContainer';
import Publicidad2 from './components/Publicidad2';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from './components/context/CartContext';
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
    return (
        <>
            <CartContextProvider>
                <BrowserRouter>
                    <Promocion />
                    <NavBar />
                    <Publicidad />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:id" element={<ItemListContainer />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                    <Publicidad2 />
                    <Footer />
                </BrowserRouter>
            </CartContextProvider>    
        </>
    );
}

export default App;
