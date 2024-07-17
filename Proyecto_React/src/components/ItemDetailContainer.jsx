import React, { useEffect, useState } from "react";
import arrayProductos from "../assets/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id == id));
            }, 2000);
        });

        promesa.then(response => {
            setItem(response);
        });
    }, [id]);

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div className="row">
                <div className="col-md-12">
                    <ItemDetail item={item} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;
