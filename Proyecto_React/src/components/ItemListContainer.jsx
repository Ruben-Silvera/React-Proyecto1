import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Ofertas from "./Ofertas";

const ItemListContainer = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const db = getFirestore();
                const itemsCollection = collection(db, "items");
                const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
                const snapShot = await getDocs(q);

                if (snapShot.size > 0) {
                    setItems(snapShot.docs.map(documento => ({
                        id: documento.id,
                        ...documento.data()
                    })));
                } else {
                    console.error("Error! No existe la colección 'items'!");
                }
            } catch (error) {
                console.error("Error al obtener los documentos: ", error);
            }
        };

        fetchItems();
    }, [id]);

    return (
        <>
            {id ? "": <Ofertas />}
            <div className="container">
                <div className="row">
                    <ItemList items={items} />
                </div>
            </div>
        </>
    );
};

export default ItemListContainer;
