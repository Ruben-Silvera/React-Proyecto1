import React from 'react';
import Item from './Item'; 

const ItemList = ({ items }) => {
    return (
        <>
            {items.map(producto => (
                <div className="col-12 col-sm-6 col-md-4 mb-4" key={producto.id}>
                    <Item item={producto} /> 
                </div>
            ))}
        </>
    );
};

export default ItemList;
