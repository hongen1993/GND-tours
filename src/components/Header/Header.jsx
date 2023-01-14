import "./Header.scss"

import Button from "../Button/Button"
import gndLogo from "../../assets/logos/gnd-logo-white.png"

import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-box">
                <Link to="/">
                    <img src={gndLogo} alt="Logo" className="header__logo" />
                </Link>
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Granada</span>
                    <span className="heading-primary--sub">A jewel in the Andalucian crown</span>
                </h1>
                <Button>Visita Granada</Button>
            </div>
        </header >
    )
}

export default Header
