import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/InStock-Logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to={"/"}>
          <img src={logo} alt="instock logo" className="header__logo-icon" />
          <span className="header__logo-text">INSTOCK</span>
        </Link>
        <nav>
          <ul className="nav__list">
            <li>
              <NavLink className="nav__link" to="/">
                Warehouses
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/inventory">
                Inventory
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
