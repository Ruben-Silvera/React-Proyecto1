import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalProducts } = useContext(CartContext);

    return (
        <Link to={"/cart"}>
            <button type="button" className="btn btn-light position-relative">
                Carrito 👜
                {totalProducts() > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalProducts()}
                    </span>
                )}
            </button>
        </Link>
    );
}

export default CartWidget;
