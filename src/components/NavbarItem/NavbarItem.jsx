import { Link } from "react-router-dom";

const NavbarItem = ({ navLink, children }) => {
    return (
        <li className="navbar__item"><Link to={navLink} className="navbar__link">{children}</Link></li>
    )
}

export default NavbarItem