import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const { cart, totalProducts, sumProducts, clear } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");
    const navigate = useNavigate();

    const generarOrden = () => {
        if (nombre.trim() === "" || telefono.trim() === "" || email.trim() === "") {
            console.error("Todos los campos deben ser completados.");
            return;
        }

        const order = {
            buyer: { name: nombre, phone: telefono, email: email },
            items: cart.map(item => ({ id: item.id, title: item.title, price: item.price, quantity: item.quantity })),
            total: sumProducts(),
            date: new Date()
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(response => {
            setOrderId(response.id);
        });
    };

    const handleGoHome = () => {
        clear();
        navigate("/");
    };

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
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                onInput={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input
                                type="text"
                                className="form-control"
                                onInput={(e) => setTelefono(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                onInput={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        
                        {!orderId && (
                            <button type="button" className="btn btn-custom" onClick={generarOrden}>
                                Generar Orden
                            </button>
                        )}
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle">
                                        <img src={item.image} alt={item.title} width={80} />
                                    </td>
                                    <td className="align-middle">{item.title}</td>
                                    <td className="align-middle text-center">
                                        ${item.price} X {item.quantity}
                                    </td>
                                    <td className="align-middle text-center">
                                        ${item.price * item.quantity}
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td className="align-middle" colSpan={3}>Total a Pagar</td>
                                <td className="align-middle text-center">${sumProducts()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {orderId && (
                <div className="row justify-content-center mt-4">
                    <div className="alert alert-light text-center" role="alert">
                        <h2>Gracias por su Compra</h2>
                        <p>Tu Orden es: <b>{orderId}</b></p>
                    </div>
                </div>
            )}
            {orderId && (
                <div className="row justify-content-center mt-4">
                    <button className="btn btn-custom" onClick={handleGoHome}>
                        Volver al Inicio
                    </button>
                </div>
            )}
        </div>
    );
}

export default Checkout;
