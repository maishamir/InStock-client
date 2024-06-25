import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/InStock-Logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to={"/"}>
          <img src={logo} alt="instock logo" className="header__logo-icon" />
        </Link>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-button">
              <NavLink className="header__nav-link" to="/">
                Warehouses
              </NavLink>
            </li>
            <li className="header__nav-button">
              <NavLink className="header__nav-link" to="/inventory">
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
