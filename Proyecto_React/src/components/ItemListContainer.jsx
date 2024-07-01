const ItemListContainer = ({ texto }) => {
    return (
        <div className="alert alert-danger" role="alert">
            <h2 className="text-center" style={{ color: "red", padding: "20px", textTransform: "uppercase" }}>{texto}</h2>
        </div>
    );
}

export default ItemListContainer;
