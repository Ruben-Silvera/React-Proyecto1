import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({ item }) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

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
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
