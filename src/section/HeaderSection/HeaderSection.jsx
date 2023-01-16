import "./HeaderSection.scss"

import Button from "../../components/Button/Button"
import gndLogo from "../../assets/logos/gnd-logo-white.png"

import { Link } from "react-router-dom"
import Heading from "../../components/Heading/Heading"

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-box">
                <Link to="/">
                    <img src={gndLogo} alt="Logo" className="header__logo" />
                </Link>
            </div>
            <div className="header__text-box">
                <Heading HeadingNum={'h1'} headingClass={'primary'}>
                    <span className="heading-primary--main">Granada</span>
                    <span className="heading-primary--sub">A jewel in the Andalucian crown</span>
                </Heading>
                <Button color={'white'}>Visit Granada</Button>
            </div>
        </header >
    )
}

export default Header
