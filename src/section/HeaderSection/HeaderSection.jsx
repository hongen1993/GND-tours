import "./HeaderSection.scss"

import Button from "../../components/Button/Button"
import gndLogo from "../../assets/logos/gnd-logo-white.png"

import { HashLink } from 'react-router-hash-link';
import Heading from "../../components/Heading/Heading"

const Header = () => {

    const buttonLink = '#section-about'
    const buttonText = 'Visit Granada'

    return (
        <header className="header" id="section-header">
            <div className="header__logo-box">
                <HashLink to="#section-header">
                    <img src={gndLogo} alt="Logo" className="header__logo" />
                </HashLink>
            </div>
            <div className="header__text-box">
                <Heading HeadingNum={'h1'} headingClass={'primary'}>
                    <span className="heading-primary--main">Granada</span>
                    <span className="heading-primary--sub">A jewel in the Andalucian crown</span>
                </Heading>
                <Button color={'white'} link={buttonLink} children={buttonText} />
            </div>
        </header >
    )
}

export default Header
