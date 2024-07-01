import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="container my-4">
            <div className="row align-items-center">
                <div className="col-12 col-md-4">
                    <img src="public/logo_renner.png" alt="Renner Uruguay" className="img-fluid" />
                </div>
                <div className="col-12 col-md-4">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Hombres</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Mujeres</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Niños</a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 text-md-end text-center">
                    <CartWidget />
                </div>
            </div>
        </div>
    );
}

export default NavBar;
