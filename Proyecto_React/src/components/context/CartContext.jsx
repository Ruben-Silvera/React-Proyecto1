import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            const product = cart.find(prod => prod.id == item.id);
            product.quantity += quantity
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity}])
        }
    }

    const removeItem = (id) => {
        const items = cart.filter(item => item.id != id);
        setCart(items); 
    }
    

const clear = () => {
    setCart([]);
}

const isInCart = (id) => {
    return cart.some(item =>item.id == id);
}

const totalProducts = () => {
    return cart.reduce((acum, item) => acum += item.quantity, 0)
}

const sumProducts = () => {
    return cart.reduce((acum, item) => acum += item.quantity * item.price, 0)
}

return  <CartContext.Provider value={{cart, addItem, removeItem, clear, totalProducts, sumProducts}}>
    {children}
    </CartContext.Provider>
}

export default CartContextProvider