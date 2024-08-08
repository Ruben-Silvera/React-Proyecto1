import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear, totalProducts, sumProducts } = useContext(CartContext);

    if (totalProducts() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="cart">
                        <img src="/public/bolsa-de-la-compra.png" alt="carrito" />
                        <h1>Tu bolsa está vacía</h1>
                        <h4>Podés buscar nuevos productos en categorías o ver nuestras sugerencias.</h4>
                        <Link to={"/"} className="btn-continue-shopping">Seguir Comprando</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.image} alt={item.title} width={80} /></td>
                                    <td className="align-middle">{item.title}</td>
                                    <td className="align-middle text-center">${item.price} X {item.quantity}</td>
                                    <td className="align-middle text-center">${item.price * item.quantity}</td>
                                    <td className="align-middle text-center">
                                        <img src="/contenedor-de-basura.png" alt="Eliminar Producto" onClick={() => removeItem(item.id)} />
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td className="align-middle" colSpan={3}>Total a Pagar</td>
                                <td className="align-middle text-center">${sumProducts()}</td>
                                <td className="align-middle">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Cart;
