import { Link } from "react-router-dom"
const NavbarItem = ({ navLink, children }) => {
    const redirecting = () => {
        const checkbox = document.getElementById("navbar-toggle")
        checkbox.checked ? checkbox.checked = false : checkbox.checked = true
        setTimeout(() => {
            document.getElementById(navLink).scrollIntoView({
                behavior: 'smooth'
            })
        }, 1000);
    }

    return (
        <li className="navbar__item"><Link onClick={redirecting} className="navbar__link">{children}</Link></li>
    )
}

export default NavbarItem