import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container my-4">
            <div className="row align-items-center">
                <div className="col-12 col-md-4">
                    <Link to={"/"}>
                        <img src="/logo_renner.png" alt="Renner Uruguay" className="img-fluid" />
                    </Link>
                </div>
                <div className="col-12 col-md-4">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink to={"/category/hombre"} className="nav-link text-black">Hombres</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/category/mujer"} className="nav-link text-black">Mujeres</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/category/niño"} className="nav-link text-black">Niños</NavLink>
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
