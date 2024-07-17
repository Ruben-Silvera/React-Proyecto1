import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md">
                        <h5 className="text-white">Contáctanos</h5>
                        <ul className="list-unstyled">
                            <li><span className="text-white">Email: contacto@tudominio.com</span></li>
                            <li><span className="text-white">Teléfono: +1234567890</span></li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <h5 className="text-white">Pedidos</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Rastrea tu Paquete</a></li>
                            <li><a href="/productos" className="text-white">Políticas de Envío</a></li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <h5 className="text-white">Empresas</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Inversores</a></li>
                            <li><a href="/trabaja" className="text-white">Trabaja con Nosotros</a></li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <h5 className="text-white">Más Información</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Acerca de Nosotros</a></li>
                            <li><a href="/trabaja" className="text-white">Reglamentos y Legalidades</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <p className="text-white">© {new Date().getFullYear()} Renner Uruguay. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
