import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);

    const onAdd = (quantity) => {
        addItem(item, quantity);
        setPurchaseCompleted(true);
    };

    return (
        <div className="bomber-section">
            <div className="row">
                <div className="col-md-6">
                    <img src={item.image} alt={item.title} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>Precio: ${item.price}</p>
                    <p>Stock disponible: {item.stock}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                    {purchaseCompleted && (
                        <div className="d-flex flex-column gap-2 mt-3">
                            <Link to="/" className="btn" style={{ backgroundColor: 'white', color: 'red', border: '1px solid red' }}>
                                Seguir comprando
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
