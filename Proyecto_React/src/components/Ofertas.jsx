import React from 'react';

const Ofertas = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center my-4">
                    <h2>Ofertas Especiales</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="card" style={{ width: '100%' }}>
                        <img src="./public/vestido.webp" className="card-img-top" alt="vestido" />
                        <div className="card-body">
                            <h5 className="card-title">Vestidos hasta 60% OFF*</h5>
                            <a href="#" className="btn btn-custom">Comprar</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="card" style={{ width: '100%' }}>
                        <img src="./public/blusa.webp" className="card-img-top" alt="blusa" />
                        <div className="card-body">
                            <h5 className="card-title">Blusas hasta 70% OFF*</h5>
                            <a href="#" className="btn btn-custom">Comprar</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="card" style={{ width: '100%' }}>
                        <img src="./public/chaqueta.webp" className="card-img-top" alt="chaqueta" />
                        <div className="card-body">
                            <h5 className="card-title">Chaquetas hasta 60% OFF*</h5>
                            <a href="#" className="btn btn-custom">Comprar</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="card" style={{ width: '100%' }}>
                        <img src="./public/pantalon.webp" className="card-img-top" alt="pantalones" />
                        <div className="card-body">
                            <h5 className="card-title">Pantalones hasta 70% OFF*</h5>
                            <a href="#" className="btn btn-custom">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ofertas;
