
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div className="card item-card" style={{ width: '100%' }}>
            <img src={item.image} className="card-img-top" alt={item.title} />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Precio: ${item.price}</p>
                <Link to={`/item/${item.id}`} className="btn btn-custom">Ver producto</Link>
            </div>
        </div>
    );
};

export default Item;
