import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

const ItemCount = ({ stock, onAdd }) => {
    const [contador, setContador] = useState(1);
    const [stockDisponible, setStockDisponible] = useState(stock);
    const [visible, setVisible] = useState(true);

 
    useEffect(() => {
        setStockDisponible(stock);
    }, [stock]);

 
    const incrementarContador = () => {
        if (contador < stockDisponible) {
            setContador(contador + 1);
        } else {
            alert('No puedes agregar más productos de los disponibles en stock');
        }
    };


    const decrementarContador = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

  
    const agregarAlCarrito = () => {
        if (contador > 0 && contador <= stockDisponible) {
            console.log(`Agregado al carrito: ${contador} productos`);
            alert(`Compra realizada: Se agregaron ${contador} productos al carrito`);
            setStockDisponible(stockDisponible - contador);
            setContador(1);
            setVisible(false); 
            if (onAdd) onAdd(contador); 
        } else {
            alert('No puedes agregar más productos de los disponibles en stock');
        }
    };

    return (
        <>    
            {visible ? (
                <div>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-custom" onClick={decrementarContador} disabled={contador <= 1}>-</button>
                        <button type="button" className="btn btn-custom">{contador}</button>
                        <button type="button" className="btn btn-custom" onClick={incrementarContador} disabled={contador >= stockDisponible || stockDisponible === 0}>+</button>
                    </div>
                    <div className="mt-2">
                        <button type="button" className="btn btn-custom" onClick={agregarAlCarrito} disabled={stockDisponible === 0}>Agregar al carrito</button>
                    </div>
                    <div className="mt-2">
                        <p>Stock disponible: {stockDisponible}</p>
                    </div>
                </div>
            ) : (
                <Link to="/cart" className="btn btn-custom">Terminar mi Compra</Link>
            )}
        </>
    );
};

export default ItemCount;
