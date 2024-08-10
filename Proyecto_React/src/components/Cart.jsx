import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear, totalProducts, sumProducts } = useContext(CartContext);

    if (totalProducts() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="cart text-center">
                        <img src="/public/bolsa-de-la-compra.png" alt="carrito" />
                        <h1>Tu bolsa está vacía</h1>
                        <h4>Podés buscar nuevos productos en categorías o ver nuestras sugerencias.</h4>
                        <Link to={"/"} className="btn btn-continue-shopping">Seguir Comprando</Link>
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
                                        <button className="btn btn-light" onClick={() => removeItem(item.id)}>
                                            <img src="/contenedor-de-basura.png" alt="Eliminar Producto" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td className="align-middle" colSpan={3}><b>Total a Pagar</b></td>
                                <td className="align-middle text-center"><b>${sumProducts()}</b></td>
                                <td className="align-middle"></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-between mt-4">
                        <button className="btn btn-light" onClick={clear}>
                            Vaciar Carrito <img src="/contenedor-de-basura.png" alt="Vaciar Carrito" />
                        </button>
                        <Link to={"/checkout"} className="btn btn-light" title="Ir al Checkout">
                            Terminar mi Compra!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
