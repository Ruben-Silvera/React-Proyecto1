import React, { useEffect, useState } from "react";
import arrayProductos from "../assets/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos);
            }, 2000);
        });

        promesa.then((response) => {
            setItems(response);
        });
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                <ItemList items={items} />
            </div>
        </div>
    );
};

export default ItemListContainer;
