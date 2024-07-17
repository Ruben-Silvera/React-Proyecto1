import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    return (
        <div className="bomber-section">
            <div className="row">
                <div className="col-md-6">
                    <img src={item.image} alt={item.title} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>Precio: ${item.Price}</p>
                    <p>Stock disponible: {item.stock}</p>
                    <ItemCount stock={item.stock} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
