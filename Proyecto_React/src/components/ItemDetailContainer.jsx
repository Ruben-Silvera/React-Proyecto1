import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const db = getFirestore();
                const docRef = doc(db, "items", id);
                const snapShot = await getDoc(docRef);

                if (snapShot.exists()) {
                    setItem({ id: snapShot.id, ...snapShot.data() });
                } else {
                    console.error("Error! No existe el documento!");
                }
            } catch (error) {
                console.error("Error al obtener el documento: ", error);
            }
        };

        fetchItem();
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
